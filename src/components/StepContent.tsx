import React from 'react';
import { StepContentProps } from '../types';

const StepContent: React.FC<StepContentProps> = ({ step, onExternalLinkClick }) => {
  const handleLinkClick = () => {
    if (step.externalLink) {
      onExternalLinkClick(step.externalLink.url);
    }
  };

  return (
    <div 
      className="bg-white p-6 lg:p-8"
      role="tabpanel"
      id={`tabpanel-${step.id}`}
      aria-labelledby={`tab-${step.id}`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Step Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {step.title}
          </h2>
          {step.description && (
            <p className="text-lg text-gray-600">
              {step.description}
            </p>
          )}
        </div>

        {/* Step Content */}
        <div className="prose prose-lg max-w-none mb-8">
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              학습 내용
            </h3>
            <div className="text-gray-700 whitespace-pre-line leading-relaxed">
              {step.content}
            </div>
          </div>
        </div>

        {/* External Link Section */}
        {step.externalLink && (
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              외부 자료 링크
            </h3>
            <p className="text-gray-600 mb-4">
              아래 버튼을 클릭하여 관련 자료를 확인하고 학습을 진행하세요.
            </p>
            <button
              onClick={handleLinkClick}
              className="external-link-button"
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
              <span>{step.externalLink.label}</span>
            </button>
          </div>
        )}

        {/* Editable Content Notice */}
        {step.editableContent && (
          <div className="mt-8 bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <div className="flex items-start">
              <svg 
                className="w-5 h-5 text-yellow-400 mr-2 mt-0.5" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" 
                  clipRule="evenodd" 
                />
              </svg>
              <div>
                <h4 className="text-sm font-medium text-yellow-800">
                  수정 가능한 콘텐츠
                </h4>
                <p className="text-sm text-yellow-700">
                  이 콘텐츠는 수정할 수 있습니다. 필요에 따라 내용을 업데이트하세요.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepContent;