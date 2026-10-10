import React, { useEffect, useState } from 'react';
import { LearningTheme, LearningThemeContentPart } from '../types';
import {
  DokdoTakeaway,
  loadDokdoTakeaways,
  resolveDokdoTakeaways,
  saveDokdoTakeaways,
  sentenceContainingPart
} from '../utils/dokdoTakeaways';

interface LearningThemeCardsProps {
  themes: LearningTheme[];
}

const MAX_TAKEAWAYS = 3;

const LearningThemeCards: React.FC<LearningThemeCardsProps> = ({ themes }) => {
  const [activeThemeId, setActiveThemeId] = useState<string | null>(themes[0]?.id || null);
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set());
  const [takeaways, setTakeaways] = useState<DokdoTakeaway[]>(() => (
    resolveDokdoTakeaways(loadDokdoTakeaways(), themes)
  ));

  useEffect(() => {
    saveDokdoTakeaways(takeaways);
  }, [takeaways]);

  const toggleReveal = (id: string) => {
    setRevealedIds((previous) => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleTakeaway = (theme: LearningTheme, paragraph: LearningThemeContentPart[], part: LearningThemeContentPart) => {
    if (!part.id) return;
    const id = `${theme.id}:${part.id}`;
    const sentence = sentenceContainingPart(paragraph, part.id) || part.text;

    setTakeaways((previous) => {
      if (previous.some((item) => item.id === id)) {
        return previous.filter((item) => item.id !== id);
      }
      if (previous.length >= MAX_TAKEAWAYS) return previous;
      return [...previous, { id, themeId: theme.id, themeTitle: theme.title, text: sentence }];
    });
  };

  const selectedIds = new Set(takeaways.map((item) => item.id));

  return (
    <section className="theme-learning" aria-labelledby="theme-learning-title">
      <div className="theme-learning__intro">
        <p className="content-eyebrow">독도 바로 배우기</p>
        <div className="theme-learning__intro-heading">
          <div>
            <h3 id="theme-learning-title">주제를 열어 독도의 내용을 살펴보세요.</h3>
            <p>가림막의 ‘클릭해서 내용 확인’을 눌러 중요한 사실을 확인해 보세요. 다시 참고하고 싶은 내용은 최대 3개까지 관심 내용으로 추가해 보세요.</p>
          </div>
          <span className="theme-learning__evidence-count" aria-live="polite">
            {takeaways.length}/{MAX_TAKEAWAYS} 관심 내용
          </span>
        </div>
      </div>

      <div className="theme-learning__list">
        {themes.map((theme, index) => {
          const isOpen = activeThemeId === theme.id;
          const panelId = `learning-theme-panel-${theme.id}`;

          return (
            <article key={theme.id} className={`theme-learning__item ${isOpen ? 'theme-learning__item--open' : ''}`}>
              <button
                type="button"
                className="theme-learning__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setActiveThemeId(isOpen ? null : theme.id)}
              >
                <span className="theme-learning__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <span className="theme-learning__trigger-copy">
                  <strong>{theme.title}</strong>
                  <span>{theme.summary}</span>
                </span>
                <span className="theme-learning__toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>

              {isOpen && (
                <div id={panelId} className="theme-learning__panel" role="region" aria-labelledby={`${panelId}-title`}>
                  <h4 id={`${panelId}-title`}>{theme.title}</h4>
                  <div className="theme-learning__summary">
                    {theme.contentParagraphs.map((paragraph, paragraphIndex) => (
                      <p key={`${theme.id}-paragraph-${paragraphIndex}`}>
                        {paragraph.map((part, partIndex) => {
                          if (!part.revealable || !part.id) return <React.Fragment key={partIndex}>{part.text}</React.Fragment>;

                          const revealId = `${theme.id}:${part.id}`;
                          const isRevealed = revealedIds.has(revealId);
                          const isSelected = selectedIds.has(revealId);

                          return (
                            <span key={partIndex} className={`theme-learning__cloze ${isRevealed ? 'theme-learning__cloze--revealed' : ''}`}>
                              <button
                                type="button"
                                className="theme-learning__reveal"
                                aria-expanded={isRevealed}
                                aria-label={isRevealed ? `핵심 내용 ${part.text} 다시 가리기` : '클릭해서 내용 확인'}
                                onClick={() => toggleReveal(revealId)}
                              >
                                {isRevealed ? part.text : '클릭해서 내용 확인'}
                              </button>
                              {isRevealed && (
                                <button
                                  type="button"
                                  className={`theme-learning__takeaway-button ${isSelected ? 'theme-learning__takeaway-button--selected' : ''}`}
                                  aria-pressed={isSelected}
                                  aria-label={`${part.text} ${isSelected ? '관심 내용에서 빼기' : '관심 내용 추가'}`}
                                  disabled={!isSelected && takeaways.length >= MAX_TAKEAWAYS}
                                  onClick={() => toggleTakeaway(theme, paragraph, part)}
                                >
                                  {isSelected ? '추가됨 ✓' : '관심 내용 추가 +'}
                                </button>
                              )}
                            </span>
                          );
                        })}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className={`theme-learning__takeaways ${takeaways.length ? 'theme-learning__takeaways--filled' : ''}`} aria-live="polite">
        <div className="theme-learning__takeaways-heading">
          <strong>관심 내용</strong>
          <span>{takeaways.length === MAX_TAKEAWAYS ? '최대 3개까지 추가했습니다.' : '확인한 내용 중 다시 참고하고 싶은 문장을 선택해 보세요.'}</span>
        </div>
        {takeaways.length > 0 && (
          <ol>
            {takeaways.map((item) => (
              <li key={item.id}>
                <span><strong>{item.themeTitle}</strong>{item.text}</span>
                <button
                  type="button"
                  aria-label={`${item.text} 선택 취소`}
                  onClick={() => setTakeaways((previous) => previous.filter((takeaway) => takeaway.id !== item.id))}
                >
                  빼기
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
};

export default LearningThemeCards;
