import React, { useState } from 'react';
import { FillInBlankActivity as FillInBlankActivityConfig } from '../types';

interface FillInBlankActivityProps {
  activity: FillInBlankActivityConfig;
}

const FillInBlankActivity: React.FC<FillInBlankActivityProps> = ({ activity }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showAnswers, setShowAnswers] = useState(false);
  const helperId = `${activity.id}-helper`;
  const blankCount = activity.sentences.reduce(
    (count, sentence) => count + sentence.segments.filter((segment) => segment.type === 'blank').length,
    0
  );

  return (
    <section className="fill-in-blank" aria-labelledby={`${activity.id}-title`}>
      <div className="fill-in-blank__heading">
        <div>
          <p className="content-eyebrow">학습 내용 점검</p>
          <h3 id={`${activity.id}-title`}>{activity.title}</h3>
          <p id={helperId}>{activity.description}</p>
        </div>
        <span className="fill-in-blank__count">빈칸 {blankCount}개</span>
      </div>

      <ol className="fill-in-blank__sentences" aria-describedby={helperId}>
        {activity.sentences.map((sentence) => (
          <li key={sentence.id} className="fill-in-blank__sentence">
            <p>
              {sentence.segments.map((segment, index) => {
                if (segment.type === 'text') {
                  return <React.Fragment key={`${sentence.id}-text-${index}`}>{segment.text}</React.Fragment>;
                }

                const inputId = `${activity.id}-${segment.id}`;

                return (
                  <span key={segment.id} className="fill-in-blank__slot">
                    <span aria-hidden="true">(</span>
                    {showAnswers ? (
                      <span className="fill-in-blank__number" aria-hidden="true">{segment.number}</span>
                    ) : (
                      <label className="fill-in-blank__number" htmlFor={inputId}>
                        <span aria-hidden="true">{segment.number}</span>
                        <span className="fill-in-blank__sr-only">{segment.number} 빈칸 답 입력</span>
                      </label>
                    )}
                    {showAnswers ? (
                      <span className="fill-in-blank__revealed-answer">
                        {segment.answer}
                      </span>
                    ) : (
                      <input
                        id={inputId}
                        className="fill-in-blank__input"
                        type="text"
                        value={answers[segment.id] || ''}
                        onChange={(event) => setAnswers((previous) => ({
                          ...previous,
                          [segment.id]: event.target.value
                        }))}
                        aria-label={`${segment.number} 빈칸에 답 입력`}
                        aria-describedby={helperId}
                        autoComplete="off"
                        spellCheck={false}
                        placeholder="답 입력"
                        style={{ width: `${Math.min(16, Math.max(5, segment.answer.length + 2))}em` }}
                      />
                    )}
                    <span aria-hidden="true">)</span>
                  </span>
                );
              })}
            </p>
          </li>
        ))}
      </ol>

      <div className="fill-in-blank__footer">
        <p aria-live="polite">
          {showAnswers ? '정답을 표시했습니다. 입력한 답은 그대로 보관되어 있습니다.' : '답을 입력한 뒤 정답을 확인해 보세요.'}
        </p>
        <button
          type="button"
          className="fill-in-blank__toggle"
          aria-pressed={showAnswers}
          onClick={() => setShowAnswers((visible) => !visible)}
        >
          {showAnswers ? '정답 숨기기' : '정답 보기'}
        </button>
      </div>
    </section>
  );
};

export default FillInBlankActivity;
