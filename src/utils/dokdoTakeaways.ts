import type { LearningTheme } from '../types';

export interface DokdoTakeaway {
  id: string;
  themeId: string;
  themeTitle: string;
  text: string;
}

const STORAGE_KEY = 'dokdo-learning-takeaways-v1';

export const sentenceContainingPart = (paragraph: LearningTheme['contentParagraphs'][number], partId: string): string | null => {
  const selectedPartIndex = paragraph.findIndex((part) => part.id === partId);
  if (selectedPartIndex < 0) return null;

  const sentenceText = paragraph.map((part) => part.text).join('');
  const selectedStart = paragraph
    .slice(0, selectedPartIndex)
    .reduce((length, part) => length + part.text.length, 0);
  const selectedEnd = selectedStart + paragraph[selectedPartIndex].text.length;
  const isSentencePeriod = (index: number) => {
    if (sentenceText[index] !== '.') return false;

    // Keep decimal values such as 216.8km inside the same sentence.
    return !(index > 0 && index < sentenceText.length - 1
      && /\d/.test(sentenceText[index - 1])
      && /\d/.test(sentenceText[index + 1]));
  };

  let sentenceStart = 0;
  for (let index = 0; index < selectedStart; index += 1) {
    if (isSentencePeriod(index)) sentenceStart = index + 1;
  }

  let sentenceEnd = sentenceText.length;
  for (let index = selectedEnd; index < sentenceText.length; index += 1) {
    if (isSentencePeriod(index)) {
      sentenceEnd = index + 1;
      break;
    }
  }

  return sentenceText.slice(sentenceStart, sentenceEnd).trim() || null;
};

export const resolveDokdoTakeaways = (takeaways: DokdoTakeaway[], themes: LearningTheme[]): DokdoTakeaway[] => takeaways.flatMap((takeaway) => {
  const theme = themes.find((item) => item.id === takeaway.themeId);
  if (!theme) return [];

  const matchesTakeawayId = (partId?: string) => Boolean(partId) && takeaway.id === `${theme.id}:${partId}`;
  const paragraph = theme.contentParagraphs.find((parts) => parts.some((part) => matchesTakeawayId(part.id)));
  const selectedPart = paragraph?.find((part) => matchesTakeawayId(part.id));
  if (!paragraph || !selectedPart?.id || !selectedPart.revealable) return [];

  const sentence = sentenceContainingPart(paragraph, selectedPart.id);
  return sentence ? [{ ...takeaway, themeTitle: theme.title, text: sentence }] : [];
});

export const loadDokdoTakeaways = (): DokdoTakeaway[] => {
  if (typeof window === 'undefined') return [];

  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const parsed: unknown = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter((item): item is DokdoTakeaway => (
      Boolean(item)
      && typeof item.id === 'string'
      && typeof item.themeId === 'string'
      && typeof item.themeTitle === 'string'
      && typeof item.text === 'string'
    )).slice(0, 3);
  } catch {
    return [];
  }
};

export const saveDokdoTakeaways = (takeaways: DokdoTakeaway[]): void => {
  if (typeof window === 'undefined') return;

  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(takeaways.slice(0, 3)));
  } catch {
    // Learning can continue when browser storage is unavailable.
  }
};

export const formatDokdoTakeaways = (takeaways: DokdoTakeaway[]): string => takeaways
  .map(({ themeTitle, text }) => `${themeTitle}: ${text}`)
  .join('\n');
