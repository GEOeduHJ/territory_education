import React, { useState } from 'react';
import { LearningTheme } from '../types';

interface LearningThemeCardsProps {
  themes: LearningTheme[];
}

const LearningThemeCards: React.FC<LearningThemeCardsProps> = ({ themes }) => {
  const [activeThemeId, setActiveThemeId] = useState<string | null>(themes[0]?.id || null);

  return (
    <section className="theme-learning" aria-labelledby="theme-learning-title">
      <div className="theme-learning__intro">
        <p className="content-eyebrow">독도 바로 배우기</p>
        <h3 id="theme-learning-title">궁금한 주제를 눌러 학습 내용을 확인하세요.</h3>
        <p>학년별 독도 학습 자료에서 공통으로 다루는 내용을 다섯 가지 주제로 묶었습니다. 읽은 내용을 굿즈 아이디어로 연결해보세요.</p>
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
                  <p className="theme-learning__content">{theme.content}</p>
                  <ul className="theme-learning__points">
                    {theme.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                  {theme.sourceLabel && <p className="theme-learning__source">학습 자료 연결: {theme.sourceLabel}</p>}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default LearningThemeCards;
