import React, { useState, useEffect } from 'react';
import { KeywordData, KeywordInputFormProps, ValidationState } from '../types';
import { KeywordController } from '../services/keywordController';

/**
 * KeywordInputForm - 키워드 입력 폼 컴포넌트
 * 
 * Module 1의 Step 1에서 4개의 키워드를 입력받는 폼입니다.
 */
export const KeywordInputForm: React.FC<KeywordInputFormProps> = ({
  onSubmit,
  initialKeywords,
  isLoading = false
}) => {
  const [keywords, setKeywords] = useState<KeywordData>(
    initialKeywords || KeywordController.createEmptyKeywords()
  );
  const [validation, setValidation] = useState<ValidationState>({ isValid: true });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const errorSummaryRef = React.useRef<HTMLDivElement>(null);

  // 초기 키워드가 변경되면 상태 업데이트
  useEffect(() => {
    if (initialKeywords) {
      setKeywords(initialKeywords);
    }
  }, [initialKeywords]);

  /**
   * 입력값 변경 핸들러
   */
  const handleInputChange = (field: keyof KeywordData, value: string) => {
    setKeywords(prev => ({ ...prev, [field]: value }));
    if (validation[`${field}Error` as keyof ValidationState]) {
      setValidation(prev => ({ ...prev, [`${field}Error`]: undefined, generalError: undefined }));
    }
  };

  /**
   * 폼 제출 핸들러
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isLoading) return;
    setIsSubmitting(true);
    try {
      const sanitizedKeywords: KeywordData = {
        keyword1: KeywordController.sanitizeKeyword(keywords.keyword1).trim(),
        keyword2: KeywordController.sanitizeKeyword(keywords.keyword2).trim(),
        keyword3: KeywordController.sanitizeKeyword(keywords.keyword3).trim(),
        keyword4: KeywordController.sanitizeKeyword(keywords.keyword4).trim()
      };

      const validationResult = KeywordController.validateKeywords(sanitizedKeywords);
      setValidation(validationResult);
      if (!validationResult.isValid) {
        window.requestAnimationFrame(() => errorSummaryRef.current?.focus());
        setIsSubmitting(false);
        return;
      }

      await onSubmit(sanitizedKeywords);
    } catch (error) {
      console.error('키워드 제출 실패:', error);
      setValidation(prev => ({ ...prev, generalError: '키워드 저장에 실패했습니다. 다시 시도해주세요.' }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setKeywords(KeywordController.createEmptyKeywords());
    setValidation({ isValid: true });
  };

  const isFormDisabled = isSubmitting || isLoading;

  const fields: Array<{ id: keyof KeywordData; label: string; placeholder: string }> = [
    { id: 'keyword1', label: '지리적 위치', placeholder: '예: 히말라야 산맥, 남중국해, 나일강 일대 등' },
    { id: 'keyword2', label: '갈등 배경', placeholder: '예: 역사적 영유권 문제, 자원 경쟁, 인프라 개발 갈등 등' },
    { id: 'keyword3', label: '현재 상황', placeholder: '예: 민간인 이동, 어업 활동의 제한, 경제적 영향 등' },
    { id: 'keyword4', label: '해결 노력', placeholder: '예: 대화와 협상, 공동 관리 협약, 국제중재 참여 등' }
  ];

  return (
    <section className="keyword-form" aria-labelledby="keyword-form-title">
      <div className="keyword-form__intro">
        <p className="content-eyebrow">나의 탐구 기록</p>
        <h3 id="keyword-form-title">조사한 내용을 정리해보세요.</h3>
        <p>네 가지 단서를 정리하면 다음 단계에서 나만의 캠페인 콘텐츠를 만들 수 있습니다.</p>
      </div>

      <form onSubmit={handleSubmit} className="keyword-form__fields">
        {!validation.isValid && (
          <div
            ref={errorSummaryRef}
            className="form-alert form-alert--error form-error-summary"
            role="alert"
            tabIndex={-1}
            aria-labelledby="keyword-error-summary-title"
          >
            <h4 id="keyword-error-summary-title">입력 내용을 확인해주세요.</h4>
            <p>각 항목 아래의 안내를 확인한 뒤 다시 제출하세요.</p>
          </div>
        )}

        {fields.map(({ id, label, placeholder }) => {
          const errorId = `${id}-error`;
          const error = validation[`${id}Error` as keyof ValidationState];

          return (
            <div className="form-field" key={id}>
              <label htmlFor={id} className="form-label">
                {label} <span className="form-required" aria-hidden="true">*</span>
              </label>
              <input
                id={id}
                type="text"
                value={keywords[id]}
                onChange={(e) => handleInputChange(id, e.target.value)}
                disabled={isFormDisabled}
                className={`form-input ${error ? 'form-input--error' : ''} ${isFormDisabled ? 'form-input--disabled' : ''}`}
                placeholder={placeholder}
                maxLength={50}
                aria-describedby={error ? errorId : undefined}
                aria-invalid={Boolean(error)}
              />
              {error && <p id={errorId} className="form-error" role="alert">{error}</p>}
            </div>
          );
        })}

        {validation.generalError && (
          <div className="form-alert form-alert--error" role="alert">
            <p>{validation.generalError}</p>
          </div>
        )}

        <div className="form-actions">
          <button type="submit" disabled={isFormDisabled} className="button button--primary form-button">
            {isSubmitting && <span className="button-progress" aria-hidden="true" />}
            {isSubmitting ? '적용 중' : '키워드 적용하기'}
          </button>
          <button type="button" onClick={handleReset} disabled={isFormDisabled} className="button button--secondary form-button">
            초기화
          </button>
        </div>
      </form>
    </section>
  );
};
