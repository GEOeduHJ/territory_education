const DECORATIVE_SYMBOL_PATTERN = /(?:[\u{1F000}-\u{1FAFF}]|[\u{1FC00}-\u{1FFFD}]|[\u2600-\u27BF]|[\u2300-\u23FF]|[\uFE0F]|\u200D|\u20E3)/gu;
const KEYCAP_PATTERN = /\d(?:\uFE0F)?\u20E3/gu;

/**
 * 콘텐츠 원문은 보존하되, 구조적 UI 라벨에서는 장식용 이모지를 제거합니다.
 * 학습 내용의 문장과 접근성 이름이 같은 시각 언어를 유지하도록 공통으로 사용합니다.
 */
export const cleanUiText = (value: string): string => value
  .replace(KEYCAP_PATTERN, '')
  .replace(DECORATIVE_SYMBOL_PATTERN, '')
  .replace(/[ \t]{2,}/g, ' ')
  .replace(/\n[ \t]+/g, '\n')
  .trim();
