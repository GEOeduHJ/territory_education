import React, { useLayoutEffect, useRef, useState } from 'react';
import { GuidedPromptConfig } from '../types';

interface GuidedPromptBuilderProps {
  config: GuidedPromptConfig;
  onExternalLinkClick: (url: string) => void;
}

const getParticle = (value: string, particle: 'object' | 'euro' | 'copula') => {
  const lastSyllable = Array.from(value).reverse().find((character) => /[가-힣]/.test(character));
  if (!lastSyllable) {
    if (particle === 'object') return '을/를';
    if (particle === 'euro') return '(으)로';
    return '이야/야';
  }

  const jongseong = (lastSyllable.charCodeAt(0) - 0xac00) % 28;
  if (particle === 'object') return jongseong > 0 ? '을' : '를';
  if (particle === 'euro') return jongseong > 0 && jongseong !== 8 ? '으로' : '로';
  return jongseong > 0 ? '이야' : '야';
};

const GuidedPromptBuilder: React.FC<GuidedPromptBuilderProps> = ({ config, onExternalLinkClick }) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [copyStatus, setCopyStatus] = useState<{ message: string; isError: boolean } | null>(null);
  const previewRef = useRef<HTMLTextAreaElement>(null);
  const fields = config.groups.flatMap((group) => group.fields);
  const fieldsById = new Map(fields.map((field) => [field.id, field]));
  const prompt = config.template.replace(/\{\{([^}]+)\}\}/g, (placeholder, fieldId: string) => {
    const field = fieldsById.get(fieldId);
    if (!field) return placeholder;

    const value = values[fieldId]?.trim();
    if (!value) return '________________';

    return `${value}${field.particle ? getParticle(value, field.particle) : ''}`;
  });

  useLayoutEffect(() => {
    const preview = previewRef.current;
    if (!preview) return undefined;

    const fitPreviewToContent = () => {
      preview.style.height = 'auto';
      preview.style.height = `${preview.scrollHeight}px`;
    };

    fitPreviewToContent();
    window.addEventListener('resize', fitPreviewToContent);
    return () => window.removeEventListener('resize', fitPreviewToContent);
  }, [prompt]);

  const handleFieldChange = (fieldId: string, value: string) => {
    setValues((previous) => ({ ...previous, [fieldId]: value }));
    setCopyStatus(null);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopyStatus({ message: '전체 프롬프트를 복사했습니다. Gemini에 붙여넣어 사용해 보세요.', isError: false });
    } catch {
      setCopyStatus({ message: '복사하지 못했습니다. 아래 프롬프트를 선택해 직접 복사해 보세요.', isError: true });
    }
  };

  return (
    <section className="guided-prompt-builder" aria-labelledby={`${config.id}-title`}>
      <div className="guided-prompt-builder__heading">
        <p className="content-eyebrow">AI 디자인 프롬프트</p>
        <h2 id={`${config.id}-title`}>{config.title}</h2>
        <p>{config.description}</p>
      </div>

      <p className="guided-prompt-builder__note">
        구상한 내용을 각 칸에 입력해 프롬프트를 완성해 보세요. 비워 둔 칸이 밑줄로 표시되는지 확인해 보세요. 조사(을/를·으로/로)가 입력한 말에 맞춰 정리되는지도 확인해 보세요.
      </p>

      <div className="guided-prompt-builder__groups">
        {config.groups.map((group) => (
          <fieldset className="guided-prompt-group" key={group.id}>
            <legend>{group.title}</legend>
            <div className="guided-prompt-group__fields">
              {group.fields.map((field) => {
                const inputId = `${config.id}-${field.id}`;
                const hintId = `${inputId}-hint`;
                const className = `guided-prompt-field${field.fullWidth ? ' guided-prompt-field--wide' : ''}`;

                return (
                  <div className={className} key={field.id}>
                    <label className="form-label" htmlFor={inputId}>{field.label}</label>
                    {field.hint && <p className="guided-prompt-field__hint" id={hintId}>{field.hint}</p>}
                    {field.multiline ? (
                      <textarea
                        id={inputId}
                        className="form-textarea guided-prompt-field__textarea"
                        aria-describedby={field.hint ? hintId : undefined}
                        value={values[field.id] || ''}
                        onChange={(event) => handleFieldChange(field.id, event.target.value)}
                        placeholder={field.placeholder}
                        rows={3}
                      />
                    ) : (
                      <input
                        id={inputId}
                        className="form-input"
                        aria-describedby={field.hint ? hintId : undefined}
                        value={values[field.id] || ''}
                        onChange={(event) => handleFieldChange(field.id, event.target.value)}
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <section className="generated-prompt" aria-labelledby={`${config.id}-preview-title`}>
        <div className="generated-prompt__header">
          <div>
            <p className="content-eyebrow">완성 문장 미리보기</p>
            <h3 id={`${config.id}-preview-title`}>Gemini에 붙여넣을 전체 프롬프트</h3>
          </div>
          <button type="button" className="button button--secondary" onClick={handleCopy}>
            전체 프롬프트 복사 <span aria-hidden="true">→</span>
          </button>
        </div>

        <label className="sr-only" htmlFor={`${config.id}-preview`}>생성된 전체 프롬프트</label>
        <textarea
          ref={previewRef}
          id={`${config.id}-preview`}
          className="generated-prompt__output guided-prompt-builder__preview"
          value={prompt}
          readOnly
          rows={15}
        />
        {copyStatus && (
          <p className={`form-alert ${copyStatus.isError ? 'form-alert--error' : 'form-alert--success'}`} role="status" aria-live="polite">
            {copyStatus.message}
          </p>
        )}
        <p className="guided-prompt-builder__paste-hint">프롬프트를 복사한 다음 Gemini에 붙여넣어 이미지 생성을 요청해 보세요.</p>
        <button
          type="button"
          className="button button--primary generated-prompt__gemini"
          onClick={() => onExternalLinkClick(config.geminiUrl)}
        >
          {config.geminiLabel} <span aria-hidden="true">↗</span>
        </button>
      </section>
    </section>
  );
};

export default GuidedPromptBuilder;
