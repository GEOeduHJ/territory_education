import React from 'react';
import { TemplateContentRendererProps } from '../types';
import { KeywordController } from '../services/keywordController';

/**
 * TemplateContentRenderer - 템플릿 콘텐츠 렌더러 컴포넌트
 * 
 * Module 1의 Step 2-5에서 키워드가 적용된 템플릿 콘텐츠를 표시합니다.
 */
export const TemplateContentRenderer: React.FC<TemplateContentRendererProps> = ({
  step,
  keywords,
  onExternalLinkClick
}) => {
  // 템플릿 콘텐츠에 키워드 적용
  const processedContent = step.templateContent 
    ? KeywordController.replaceTemplatePlaceholders(step.templateContent, keywords)
    : step.content;

  // 키워드 누락 체크
  const hasAllKeywords = KeywordController.hasAllKeywords(keywords);

  return (
    <div className="max-w-4xl mx-auto">
      {/* 키워드 누락 경고 */}
      {!hasAllKeywords && (
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="text-sm font-medium text-yellow-800">키워드를 입력해주세요</h3>
              <p className="mt-1 text-sm text-yellow-700">
                1단계에서 키워드를 먼저 입력하시면 개인화된 콘텐츠를 확인할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 메인 콘텐츠 */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h2>
          <p className="text-gray-600">{step.description}</p>
        </div>

        {/* 학습 내용 섹션 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">학습 내용</h3>
          <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {processedContent}
              </p>
            </div>
          </div>
        </div>

        {/* 키워드 정보 (키워드가 있는 경우만) */}
        {hasAllKeywords && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-sm font-medium text-blue-800 mb-3">적용된 키워드</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center">
                <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded mr-2">
                  갈등 주체
                </span>
                <span className="text-sm text-blue-800">{keywords.keyword1}</span>
              </div>
              <div className="flex items-center">
                <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded mr-2">
                  분쟁 배경
                </span>
                <span className="text-sm text-blue-800">{keywords.keyword2}</span>
              </div>
              <div className="flex items-center">
                <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded mr-2">
                  해결 방안
                </span>
                <span className="text-sm text-blue-800">{keywords.keyword3}</span>
              </div>
              <div className="flex items-center">
                <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded mr-2">
                  추가 내용
                </span>
                <span className="text-sm text-blue-800">{keywords.keyword4}</span>
              </div>
            </div>
          </div>
        )}

        {/* 외부 링크 (있는 경우) */}
        {step.externalLink && (
          <div className="border-t pt-6">
            <h4 className="text-sm font-medium text-gray-800 mb-3">추가 자료</h4>
            <button
              onClick={() => onExternalLinkClick(step.externalLink!.url)}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:ring-4 focus:ring-blue-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {step.externalLink.label}
              {step.externalLink.openInNewTab && (
                <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              )}
            </button>
          </div>
        )}
      </div>

      {/* 키워드 수정 안내 */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-800">키워드 수정이 필요하신가요?</h4>
            <p className="text-xs text-gray-600 mt-1">
              1단계로 돌아가서 키워드를 수정할 수 있습니다.
            </p>
          </div>
          <button
            onClick={() => {
              // 1단계로 이동하는 로직은 부모 컴포넌트에서 처리
              const event = new CustomEvent('navigateToKeywordInput');
              window.dispatchEvent(event);
            }}
            className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-white transition-colors focus:ring-2 focus:ring-gray-200"
          >
            키워드 수정하기
          </button>
        </div>
      </div>
    </div>
  );
};