import React, { useState } from 'react';

interface PromptInputBoxProps {
  label?: string;
  placeholder?: string;
}

/**
 * PromptInputBox - 학생이 가이드를 참고해 직접 프롬프트를 작성하고 복사할 수 있는 입력 칸
 */
export const PromptInputBox: React.FC<PromptInputBoxProps> = ({
  label = '우리 모둠 프롬프트 작성하기',
  placeholder
}) => {
  const [value, setValue] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  const handleCopy = async () => {
    if (!value.trim()) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopySuccess('복사되었습니다!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      setCopySuccess('복사에 실패했습니다.');
      setTimeout(() => setCopySuccess(''), 2000);
    }
  };

  return (
    <section className="prompt-panel mb-6" aria-labelledby="prompt-input-title">
      <div className="prompt-panel__header">
        <div>
          <p className="content-eyebrow">직접 표현하기</p>
          <h3 id="prompt-input-title">{label}</h3>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          disabled={!value.trim()}
          className={`button button--secondary prompt-copy-button ${!value.trim() ? 'prompt-copy-button--disabled' : ''}`}
        >
          복사하기 <span aria-hidden="true">→</span>
        </button>
      </div>

      {copySuccess && (
        <div className="form-alert form-alert--success" role="status" aria-live="polite">
          {copySuccess}
        </div>
      )}

      <label htmlFor="prompt-input" className="prompt-panel__input-label">프롬프트 내용</label>
      <textarea
        id="prompt-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        rows={8}
        className="form-textarea"
      />
    </section>
  );
};

export default PromptInputBox;
