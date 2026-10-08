import React, { useState } from 'react';

type DecisionFieldId = 'decision' | 'priority' | 'concern' | 'response';
type DecisionAnswers = Record<DecisionFieldId, string>;

interface DecisionField {
  id: DecisionFieldId;
  label: string;
  before: string;
  after: string;
  placeholder: string;
  multiline?: boolean;
}

const fields: DecisionField[] = [
  {
    id: 'decision',
    label: '출도 결정',
    before: '나는 제주 무비자 제도를 통해 입국한 난민 신청자의 출도를',
    after: '하기로 결정했습니다.',
    placeholder: '예: 허용 또는 제한',
  },
  {
    id: 'priority',
    label: '우선적으로 고려한 가치와 기준',
    before: '그 이유는 경계를 둘러싼 다양한 가치와 기준 속에서도',
    after: '라는 점을 우선적으로 고려하였기 때문입니다.',
    placeholder: '우선 고려한 가치나 기준을 입력하세요.',
    multiline: true,
  },
  {
    id: 'concern',
    label: '결정으로 예상되는 문제',
    before: '그러나 이러한 결정으로 인해',
    after: '과 같은 문제가 발생할 수 있습니다.',
    placeholder: '결정에 따라 생길 수 있는 문제를 입력하세요.',
    multiline: true,
  },
  {
    id: 'response',
    label: '우려를 줄이기 위한 방안',
    before: '이러한 우려를 극복하기 위해서',
    after: '과 같은 방안이 필요합니다.',
    placeholder: '필요한 대응 방안을 입력하세요.',
    multiline: true,
  },
];

const emptyAnswers: DecisionAnswers = {
  decision: '',
  priority: '',
  concern: '',
  response: '',
};

const formatAnswer = (value: string) => (value.trim() ? `[${value.trim()}]` : '[ ]');

const createDecisionText = (answers: DecisionAnswers) => [
  `나는 제주 무비자 제도를 통해 입국한 난민 신청자의 출도를 ${formatAnswer(answers.decision)} 하기로 결정했습니다.`,
  `그 이유는 경계를 둘러싼 다양한 가치와 기준 속에서도 ${formatAnswer(answers.priority)}라는 점을 우선적으로 고려하였기 때문입니다.`,
  `그러나 이러한 결정으로 인해 ${formatAnswer(answers.concern)}과 같은 문제가 발생할 수 있습니다.`,
  `이러한 우려를 극복하기 위해서 ${formatAnswer(answers.response)}과 같은 방안이 필요합니다.`,
  '앞으로도 여러 국가의 경계가 공정하고 정의롭게 작동할 수 있도록 많은 관심과 목소리를 내어주시길 바랍니다.',
].join('\n\n');

const copyWithFallback = (text: string) => {
  const temporaryInput = document.createElement('textarea');
  temporaryInput.value = text;
  temporaryInput.setAttribute('readonly', '');
  temporaryInput.style.position = 'fixed';
  temporaryInput.style.top = '-1000px';
  temporaryInput.style.opacity = '0';
  document.body.appendChild(temporaryInput);
  temporaryInput.select();

  try {
    if (!document.execCommand('copy')) {
      throw new Error('Clipboard copy command was rejected.');
    }
  } finally {
    temporaryInput.remove();
  }
};

const BoundaryDecisionComposer: React.FC = () => {
  const [answers, setAnswers] = useState<DecisionAnswers>(emptyAnswers);
  const [copyStatus, setCopyStatus] = useState<{ message: string; isError: boolean } | null>(null);

  const handleChange = (id: DecisionFieldId, value: string) => {
    setAnswers((current) => ({ ...current, [id]: value }));
    setCopyStatus(null);
  };

  const handleCopy = async () => {
    const decisionText = createDecisionText(answers);

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(decisionText);
      } else {
        copyWithFallback(decisionText);
      }
      setCopyStatus({ message: '경계 결정문을 복사했습니다.', isError: false });
    } catch {
      try {
        copyWithFallback(decisionText);
        setCopyStatus({ message: '경계 결정문을 복사했습니다.', isError: false });
      } catch {
        setCopyStatus({ message: '복사하지 못했습니다. 다시 시도해주세요.', isError: true });
      }
    }
  };

  return (
    <section className="boundary-decision-composer" aria-labelledby="boundary-decision-title">
      <div className="boundary-decision-composer__heading">
        <h3 id="boundary-decision-title">나의 경계 결정문</h3>
        <button type="button" className="button button--secondary" onClick={handleCopy}>
          복사하기
        </button>
      </div>

      <div className="boundary-decision-composer__fields">
        {fields.map((field) => {
          const inputId = `boundary-decision-${field.id}`;

          return (
            <div className="boundary-decision-composer__field" key={field.id}>
              <p className="boundary-decision-composer__sentence">{field.before}</p>
              <label className="boundary-decision-composer__label" htmlFor={inputId}>
                {field.label}
              </label>
              <div className="boundary-decision-composer__blank">
                <span aria-hidden="true">[</span>
                {field.multiline ? (
                  <textarea
                    id={inputId}
                    className="form-textarea boundary-decision-composer__control"
                    rows={2}
                    value={answers[field.id]}
                    onChange={(event) => handleChange(field.id, event.target.value)}
                    placeholder={field.placeholder}
                  />
                ) : (
                  <input
                    id={inputId}
                    className="form-input boundary-decision-composer__control"
                    value={answers[field.id]}
                    onChange={(event) => handleChange(field.id, event.target.value)}
                    placeholder={field.placeholder}
                  />
                )}
                <span aria-hidden="true">]</span>
              </div>
              <p className="boundary-decision-composer__sentence">{field.after}</p>
            </div>
          );
        })}
      </div>

      <p className="boundary-decision-composer__closing">
        앞으로도 여러 국가의 경계가 공정하고 정의롭게 작동할 수 있도록 많은 관심과 목소리를 내어주시길 바랍니다.
      </p>

      {copyStatus && (
        <p
          className={`form-alert ${copyStatus.isError ? 'form-alert--error' : 'form-alert--success'}`}
          role="status"
          aria-live="polite"
        >
          {copyStatus.message}
        </p>
      )}
    </section>
  );
};

export default BoundaryDecisionComposer;
