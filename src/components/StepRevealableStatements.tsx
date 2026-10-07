import React, { useState } from 'react';
import { LearningThemeContentPart } from '../types';

interface StepRevealableStatementsProps {
  id: string;
  title: string;
  description: string;
  statements: LearningThemeContentPart[][];
}

const StepRevealableStatements: React.FC<StepRevealableStatementsProps> = ({
  id,
  title,
  description,
  statements
}) => {
  const [revealedIds, setRevealedIds] = useState<Set<string>>(() => new Set());

  const toggleReveal = (answerId: string) => {
    setRevealedIds((previous) => {
      const next = new Set(previous);
      if (next.has(answerId)) next.delete(answerId);
      else next.add(answerId);
      return next;
    });
  };

  return (
    <section className="step-reveal-statements" aria-labelledby={`${id}-title`}>
      <header className="step-reveal-statements__heading">
        <p className="content-eyebrow">핵심 내용 확인</p>
        <h3 id={`${id}-title`}>{title}</h3>
        <p>{description}</p>
      </header>
      <ul className="step-reveal-statements__list">
        {statements.map((statement, statementIndex) => (
          <li className="step-reveal-statements__item" key={`${id}-statement-${statementIndex}`}>
            <p className="step-reveal-statements__text">
              {statement.map((part, partIndex) => {
                if (!part.revealable || !part.id) {
                  return <React.Fragment key={part.id || partIndex}>{part.text}</React.Fragment>;
                }

                const answerId = `${id}:${part.id}`;
                const isRevealed = revealedIds.has(answerId);

                return (
                  <span
                    key={part.id}
                    className={`theme-learning__cloze ${isRevealed ? 'theme-learning__cloze--revealed' : ''}`}
                  >
                    <button
                      type="button"
                      className="theme-learning__reveal"
                      aria-expanded={isRevealed}
                      aria-label={isRevealed ? `핵심 표현 ${part.text} 다시 가리기` : '클릭해서 내용 확인'}
                      onClick={() => toggleReveal(answerId)}
                    >
                      {isRevealed ? part.text : '클릭해서 내용 확인'}
                    </button>
                  </span>
                );
              })}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StepRevealableStatements;
