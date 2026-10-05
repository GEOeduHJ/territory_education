import React, { useMemo, useState } from 'react';
import { LearningTheme, LearningThemeCheckOption } from '../types';
import { cleanUiText } from '../utils/uiText';

interface LearningThemeQuizProps {
  themes: LearningTheme[];
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

const shuffleItems = <T,>(items: T[]): T[] => {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
};

const createRandomizedOptionOrders = (themes: LearningTheme[]): Record<string, LearningThemeCheckOption[]> => {
  const optionOrders: Record<string, LearningThemeCheckOption[]> = {};
  const positionCountsByOptionCount = new Map<number, number[]>();
  const previousPositionByOptionCount = new Map<number, number>();

  themes.forEach((theme) => {
    const options = theme.checkOptions ?? [];
    const correctOption = options.find((option) => option.isCorrect);

    if (!correctOption || options.length < 2) {
      optionOrders[theme.id] = shuffleItems(options);
      return;
    }

    const positionCounts = positionCountsByOptionCount.get(options.length) ?? Array(options.length).fill(0);
    positionCountsByOptionCount.set(options.length, positionCounts);

    const fewestUses = Math.min(...positionCounts);
    let candidatePositions = positionCounts
      .map((count, index) => ({ count, index }))
      .filter(({ count }) => count === fewestUses)
      .map(({ index }) => index);

    const previousPosition = previousPositionByOptionCount.get(options.length);
    if (previousPosition !== undefined && candidatePositions.length > 1) {
      const alternatives = candidatePositions.filter((position) => position !== previousPosition);
      if (alternatives.length > 0) candidatePositions = alternatives;
    }

    const correctPosition = candidatePositions[Math.floor(Math.random() * candidatePositions.length)];
    const shuffledDistractors = shuffleItems(options.filter((option) => option.id !== correctOption.id));
    shuffledDistractors.splice(correctPosition, 0, correctOption);

    positionCounts[correctPosition] += 1;
    previousPositionByOptionCount.set(options.length, correctPosition);
    optionOrders[theme.id] = shuffledDistractors;
  });

  return optionOrders;
};

const LearningThemeQuiz: React.FC<LearningThemeQuizProps> = ({ themes }) => {
  const quizThemes = useMemo(
    () => themes.filter((theme) => theme.checkQuestion && theme.checkOptions && theme.checkOptions.length > 0),
    [themes]
  );
  const [optionOrders, setOptionOrders] = useState<Record<string, LearningThemeCheckOption[]>>(
    () => createRandomizedOptionOrders(quizThemes)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showSummary, setShowSummary] = useState(false);

  if (quizThemes.length === 0) return null;

  const currentTheme = quizThemes[Math.min(currentIndex, quizThemes.length - 1)];
  const currentOptions = optionOrders[currentTheme.id] ?? currentTheme.checkOptions ?? [];
  const selectedId = answers[currentTheme.id];
  const selectedOption = currentOptions.find((option) => option.id === selectedId);
  const correctCount = quizThemes.reduce((count, theme) => {
    const answer = theme.checkOptions?.find((option) => option.id === answers[theme.id]);
    return count + (answer?.isCorrect ? 1 : 0);
  }, 0);
  const answeredCount = quizThemes.filter((theme) => Boolean(answers[theme.id])).length;
  const progress = ((currentIndex + 1) / quizThemes.length) * 100;

  const handleAnswer = (optionId: string) => {
    setAnswers((previous) => ({ ...previous, [currentTheme.id]: optionId }));
  };

  const handleNext = () => {
    if (currentIndex === quizThemes.length - 1) {
      setShowSummary(true);
      return;
    }
    setCurrentIndex((previous) => previous + 1);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex((previous) => previous - 1);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers({});
    setOptionOrders(createRandomizedOptionOrders(quizThemes));
    setShowSummary(false);
  };

  return (
    <section className="theme-quiz" aria-labelledby="theme-quiz-title">
      <div className="theme-quiz__header">
        <div>
          <p className="content-eyebrow">학습 점검</p>
          <h3 id="theme-quiz-title">여섯 주제를 이해했는지 확인해보세요.</h3>
          <p>정답을 고른 뒤 해설과 연결 질문을 읽어보세요. 틀린 문항은 1단계의 해당 테마로 돌아가 다시 확인할 수 있습니다.</p>
        </div>
        <div className="theme-quiz__counter" aria-label={`전체 ${quizThemes.length}문항 중 ${answeredCount}문항 응답`}>
          <strong>{answeredCount}</strong>
          <span>/ {quizThemes.length} 응답</span>
        </div>
      </div>

      <div className="theme-quiz__progress" role="progressbar" aria-label="퀴즈 진행률" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
        <span style={{ width: `${progress}%` }} />
      </div>

      {showSummary ? (
        <div className="theme-quiz__summary" role="status" aria-live="polite">
          <p className="theme-quiz__summary-label">점검 결과</p>
          <h4>{quizThemes.length}문항 중 {correctCount}문항을 맞혔어요.</h4>
          <p>
            {correctCount === quizThemes.length
              ? '여섯 주제의 핵심 내용을 모두 확인했습니다. 이제 배운 내용을 디자인 메시지로 옮겨보세요.'
              : '맞히지 못한 문항의 테마를 다시 읽고, 디자인에 사용할 근거를 하나씩 골라보세요.'}
          </p>
          <div className="theme-quiz__summary-actions">
            <button type="button" className="button button--secondary" onClick={handleRestart}>
              처음부터 다시 점검
            </button>
            <span className="theme-quiz__summary-hint">다음 단계에서 독도 굿즈 디자인을 시작합니다.</span>
          </div>
        </div>
      ) : (
        <article className="theme-quiz__card" aria-labelledby="theme-quiz-question">
          <div className="theme-quiz__card-meta">
            <span>테마 {String(currentIndex + 1).padStart(2, '0')}</span>
            <span>{cleanUiText(currentTheme.title)}</span>
          </div>
          <h4 id="theme-quiz-question">{cleanUiText(currentTheme.checkQuestion || '')}</h4>

          <fieldset className="theme-quiz__options">
            <legend className="sr-only">답을 하나 선택하세요.</legend>
            {currentOptions.map((option, index) => {
              const isSelected = option.id === selectedId;
              return (
                <label
                  key={option.id}
                  className={`theme-quiz__option ${isSelected ? 'theme-quiz__option--selected' : ''} ${
                    isSelected && option.isCorrect ? 'theme-quiz__option--correct' : ''
                  } ${isSelected && !option.isCorrect ? 'theme-quiz__option--incorrect' : ''}`}
                >
                  <input
                    type="radio"
                    name={`theme-quiz-${currentTheme.id}`}
                    value={option.id}
                    checked={isSelected}
                    onChange={() => handleAnswer(option.id)}
                  />
                  <span className="theme-quiz__option-letter" aria-hidden="true">{OPTION_LETTERS[index]}</span>
                  <span className="theme-quiz__option-copy">{cleanUiText(option.label)}</span>
                </label>
              );
            })}
          </fieldset>

          {selectedOption && (
            <div className={`theme-quiz__feedback ${selectedOption.isCorrect ? 'theme-quiz__feedback--correct' : 'theme-quiz__feedback--incorrect'}`} role="status" aria-live="polite">
              <strong>{selectedOption.isCorrect ? '정답이에요.' : '한 번 더 확인해보세요.'}</strong>
              <p>{cleanUiText(selectedOption.feedback)}</p>
            </div>
          )}

          <div className="theme-quiz__reflection">
            <p className="theme-quiz__reflection-label">연결 질문</p>
            <p>{cleanUiText(currentTheme.inquiryPrompt || '이 테마에서 가장 중요한 근거는 무엇인가요?')}</p>
          </div>

          <div className="theme-quiz__actions">
            <button type="button" className="button button--text" onClick={handlePrevious} disabled={currentIndex === 0}>
              이전 문항
            </button>
            <button type="button" className="button button--primary" onClick={handleNext} disabled={!selectedOption}>
              {currentIndex === quizThemes.length - 1 ? '점검 결과 보기' : '다음 문항'}
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </article>
      )}
    </section>
  );
};

export default LearningThemeQuiz;
