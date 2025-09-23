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
    // 즉시 상태 업데이트 (sanitize 없이)
    setKeywords(prev => ({
      ...prev,
      [field]: value
    }));

    // 해당 필드의 에러 상태 초기화
    if (validation[`${field}Error` as keyof ValidationState]) {
      setValidation(prev => ({
        ...prev,
        [`${field}Error`]: undefined,
        generalError: undefined
      }));
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
      // 제출 전에 키워드 정제
      const sanitizedKeywords: KeywordData = {
        keyword1: KeywordController.sanitizeKeyword(keywords.keyword1).trim(),
        keyword2: KeywordController.sanitizeKeyword(keywords.keyword2).trim(),
        keyword3: KeywordController.sanitizeKeyword(keywords.keyword3).trim(),
        keyword4: KeywordController.sanitizeKeyword(keywords.keyword4).trim()
      };

      // 입력 검증
      const validationResult = KeywordController.validateKeywords(sanitizedKeywords);
      setValidation(validationResult);

      if (!validationResult.isValid) {
        setIsSubmitting(false);
        return;
      }

      // 키워드 제출
      await onSubmit(sanitizedKeywords);
    } catch (error) {
      console.error('키워드 제출 실패:', error);
      setValidation(prev => ({
        ...prev,
        generalError: '키워드 저장에 실패했습니다. 다시 시도해주세요.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * 폼 초기화
   */
  const handleReset = () => {
    setKeywords(KeywordController.createEmptyKeywords());
    setValidation({ isValid: true });
  };

  const isFormDisabled = isSubmitting || isLoading;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          🎤 캠페인 노래 만들기를 위한 핵심 정보를 입력하세요
        </h3>
        <p className="text-gray-600 text-sm">
          ✨ 각 항목에 적절한 키워드를 넣어주시면 다음 단계에서 자동으로 활용됩니다.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 갈등 주체 입력 */}
        <div>
          <label htmlFor="keyword1" className="block text-sm font-medium text-gray-700 mb-2">
            🗺️ 갈등 주체 <span className="text-red-500">*</span>
          </label>
          <input
            id="keyword1"
            type="text"
            value={keywords.keyword1}
            onChange={(e) => handleInputChange('keyword1', e.target.value)}
            disabled={isFormDisabled}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              validation.keyword1Error 
                ? 'border-red-500 bg-red-50' 
                : 'border-gray-300'
            } ${isFormDisabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
            placeholder="예: 독도, 쿠릴열도, 센카쿠열도 등 🏝️"
            maxLength={50}
            aria-describedby={validation.keyword1Error ? 'keyword1-error' : undefined}
          />
          {validation.keyword1Error && (
            <p id="keyword1-error" className="mt-1 text-sm text-red-600" role="alert">
              {validation.keyword1Error}
            </p>
          )}
        </div>

        {/* 분쟁 배경 입력 */}
        <div>
          <label htmlFor="keyword2" className="block text-sm font-medium text-gray-700 mb-2">
            ⚡ 분쟁 배경 <span className="text-red-500">*</span>
          </label>
          <input
            id="keyword2"
            type="text"
            value={keywords.keyword2}
            onChange={(e) => handleInputChange('keyword2', e.target.value)}
            disabled={isFormDisabled}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              validation.keyword2Error 
                ? 'border-red-500 bg-red-50' 
                : 'border-gray-300'
            } ${isFormDisabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
            placeholder="예: 역사적 주권, 자원 개발권, 영해 경계 등 ⚖️"
            maxLength={50}
            aria-describedby={validation.keyword2Error ? 'keyword2-error' : undefined}
          />
          {validation.keyword2Error && (
            <p id="keyword2-error" className="mt-1 text-sm text-red-600" role="alert">
              {validation.keyword2Error}
            </p>
          )}
        </div>

        {/* 해결 방안 입력 */}
        <div>
          <label htmlFor="keyword3" className="block text-sm font-medium text-gray-700 mb-2">
            🕊️ 해결 방안 <span className="text-red-500">*</span>
          </label>
          <input
            id="keyword3"
            type="text"
            value={keywords.keyword3}
            onChange={(e) => handleInputChange('keyword3', e.target.value)}
            disabled={isFormDisabled}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              validation.keyword3Error 
                ? 'border-red-500 bg-red-50' 
                : 'border-gray-300'
            } ${isFormDisabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
            placeholder="예: 국제법 적용, 평화적 협상, 공동 개발 등 🤝"
            maxLength={50}
            aria-describedby={validation.keyword3Error ? 'keyword3-error' : undefined}
          />
          {validation.keyword3Error && (
            <p id="keyword3-error" className="mt-1 text-sm text-red-600" role="alert">
              {validation.keyword3Error}
            </p>
          )}
        </div>

        {/* 추가 내용 입력 */}
        <div>
          <label htmlFor="keyword4" className="block text-sm font-medium text-gray-700 mb-2">
            💭 추가 내용 <span className="text-red-500">*</span>
          </label>
          <input
            id="keyword4"
            type="text"
            value={keywords.keyword4}
            onChange={(e) => handleInputChange('keyword4', e.target.value)}
            disabled={isFormDisabled}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              validation.keyword4Error 
                ? 'border-red-500 bg-red-50' 
                : 'border-gray-300'
            } ${isFormDisabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
            placeholder="예: 평화적 해결이 중요하다, 상호 이해가 필요하다 등 💫"
            maxLength={50}
            aria-describedby={validation.keyword4Error ? 'keyword4-error' : undefined}
          />
          {validation.keyword4Error && (
            <p id="keyword4-error" className="mt-1 text-sm text-red-600" role="alert">
              {validation.keyword4Error}
            </p>
          )}
        </div>

        {/* 전체 에러 메시지 */}
        {validation.generalError && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
            <p className="text-sm text-red-600">{validation.generalError}</p>
          </div>
        )}

        {/* 버튼 영역 */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={isFormDisabled}
            className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
              isFormDisabled
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-200'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                ⏳ 적용 중...
              </span>
            ) : (
              '✨ 키워드 적용하기'
            )}
          </button>
          
          <button
            type="button"
            onClick={handleReset}
            disabled={isFormDisabled}
            className={`px-6 py-3 rounded-lg font-medium border transition-all ${
              isFormDisabled
                ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200'
            }`}
          >
            🔄 초기화
          </button>
        </div>
      </form>

      {/* 키워드 미리보기 */}
      {KeywordController.hasAllKeywords(keywords) && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="text-sm font-medium text-blue-800 mb-2">🔍 미리보기</h4>
          <p className="text-sm text-blue-700">
            {KeywordController.replaceTemplatePlaceholders(
              '영토 분쟁을 사례로 캠페인 노래를 만들거야. 이 사례는 [keyword1]이/가 갈등을 겪고 있고, [keyword2]이/가 핵심적인 분쟁 배경이야. 해결 방안으로는 [keyword3]이/가 필요해. [keyword4]',
              keywords
            )}
          </p>
        </div>
      )}
    </div>
  );
};