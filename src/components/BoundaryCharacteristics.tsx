import React, { useState } from 'react';

interface BoundaryStatement {
  id: string;
  marker: string;
  before: string;
  answer: string;
  connector?: string;
  after: string;
}

interface BoundaryCharacteristicsProps {
  statements: BoundaryStatement[];
}

const BoundaryCharacteristics: React.FC<BoundaryCharacteristicsProps> = ({ statements }) => {
  const [revealedIds, setRevealedIds] = useState<Set<string>>(() => new Set());

  const toggleReveal = (id: string) => {
    setRevealedIds((previous) => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="module5-boundary-review" aria-labelledby="module5-boundary-review-title">
      <header className="module5-boundary-review__heading">
        <h3 id="module5-boundary-review-title">경계 특성 정리하기</h3>
        <p>사례에서 드러나는 경계의 특성을 떠올리며, 가려진 표현을 눌러 확인해 보세요.</p>
      </header>

      <ol className="module5-boundary-review__list">
        {statements.map((statement) => {
          const isRevealed = revealedIds.has(statement.id);

          return (
            <li className="module5-boundary-review__item" key={statement.id}>
              <span className="module5-boundary-review__marker" aria-hidden="true">{statement.marker}</span>
              <p className="module5-boundary-review__sentence">
                {statement.before}
                <span className={`theme-learning__cloze module5-boundary-review__answer ${isRevealed ? 'theme-learning__cloze--revealed' : ''}`}>
                  <button
                    type="button"
                    className="theme-learning__reveal"
                    aria-expanded={isRevealed}
                    aria-label={isRevealed ? `핵심 표현 ${statement.answer} 다시 가리기` : '클릭해서 내용 확인'}
                    onClick={() => toggleReveal(statement.id)}
                  >
                    {isRevealed ? statement.answer : '클릭해서 내용 확인'}
                  </button>
                  {statement.connector && (
                    <span>{statement.connector}</span>
                  )}
                </span>
                {statement.after}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default BoundaryCharacteristics;
