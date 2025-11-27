import React from 'react';
import { StepContentProps } from '../types';
import { KeywordInputForm } from './KeywordInputForm';
import { TemplateContentRenderer } from './TemplateContentRenderer';
import { FixedTemplateRenderer } from './FixedTemplateRenderer';
import { ChatbotCardRenderer } from './ChatbotCardRenderer';
import DisputeMap from './DisputeMap';
import ResourceDropdown from './ResourceDropdown';

const StepContent: React.FC<StepContentProps> = ({ 
  step, 
  onExternalLinkClick, 
  moduleId,
  keywords,
  onKeywordSubmit 
}) => {
  // Module 1의 키워드 입력 단계인지 확인
  const isKeywordInputStep = step.isKeywordInput && moduleId === "1";
  
  // Module 1의 템플릿 사용 단계인지 확인
  const isTemplateStep = step.useKeywordTemplate && moduleId === "1";

  // Module 3의 고정 템플릿 사용 단계인지 확인
  const isFixedTemplateStep = step.useFixedTemplate && moduleId === "3";

  // Module 5의 챗봇 카드 사용 단계인지 확인
  const isChatbotCardStep = step.useChatbotCards && moduleId === "5";

  // Module 1의 지도 표시 단계인지 확인
  const isMapStep = step.showMap && moduleId === "1";

  // Module 3의 드롭다운 자료 표시 단계인지 확인
  const isResourceDropdownStep = step.showResourceDropdown && moduleId === "3";

  // Embedded iframe preview for external links (all modules)
  const [embeddedUrl, setEmbeddedUrl] = React.useState<string | null>(
    step.externalLink?.url ?? (step.externalLinks && step.externalLinks.length > 0 ? step.externalLinks[0].url : null)
  );

  React.useEffect(() => {
    // Update embeddedUrl when step changes
    setEmbeddedUrl(step.externalLink?.url ?? (step.externalLinks && step.externalLinks.length > 0 ? step.externalLinks[0].url : null));
  }, [step.externalLink, step.externalLinks]);

  // 지도 렌더링 (Module 1, Step 0 - 분쟁 지역 자료 조사)
  if (isMapStep && step.regionResources) {
    return (
      <div 
        className="bg-white p-6 lg:p-8"
        role="tabpanel"
        id={`tabpanel-${step.id}`}
        aria-labelledby={`tab-${step.id}`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Step Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {step.title}
            </h2>
            <p className="text-gray-600">
              {step.description}
            </p>
          </div>

          {/* Content */}
          <div className="mb-8">
            <div className="prose max-w-none">
              <p className="text-gray-700 whitespace-pre-wrap">
                {step.content}
              </p>
            </div>
          </div>

          {/* Dispute Map */}
          <DisputeMap regions={step.regionResources} />
        </div>
      </div>
    );
  }

  // 드롭다운 자료 렌더링 (Module 3, Step 1 - 독도 자율 학습)
  if (isResourceDropdownStep && step.dropdownResources) {
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
            <p className="text-gray-600">
              {step.description}
            </p>
          </div>

          {/* Content */}
          <div className="mb-8">
            <div className="prose max-w-none">
              <p className="text-gray-700 whitespace-pre-wrap">
                {step.content}
              </p>
            </div>
          </div>

          {/* AI Chatbot Links */}
          {step.externalLinks && step.externalLinks.length > 0 && (
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                {step.externalLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => onExternalLinkClick(link.url)}
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
                    <span>{link.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Resource Dropdown (opens in new tab) */}
          <ResourceDropdown resources={step.dropdownResources} />
        </div>
      </div>
    );
  }

  // 키워드 입력 폼 렌더링 (Module 1, Step 2)
  if (isKeywordInputStep && onKeywordSubmit) {
    return (
      <div 
        className="bg-white p-6 lg:p-8"
        role="tabpanel"
        id={`tabpanel-${step.id}`}
        aria-labelledby={`tab-${step.id}`}
      >
        <KeywordInputForm
          onSubmit={onKeywordSubmit}
          initialKeywords={keywords}
        />
      </div>
    );
  }

  // 템플릿 콘텐츠 렌더링 (Module 1, Steps 2-6)
  if (isTemplateStep && keywords) {
    return (
      <div 
        className="bg-white p-6 lg:p-8"
        role="tabpanel"
        id={`tabpanel-${step.id}`}
        aria-labelledby={`tab-${step.id}`}
      >
        <TemplateContentRenderer
          step={step}
          keywords={keywords}
          onExternalLinkClick={onExternalLinkClick}
        />
      </div>
    );
  }

  // 고정 템플릿 콘텐츠 렌더링 (Module 3, Step 2)
  if (isFixedTemplateStep) {
    return (
      <div 
        className="bg-white p-6 lg:p-8"
        role="tabpanel"
        id={`tabpanel-${step.id}`}
        aria-labelledby={`tab-${step.id}`}
      >
        <FixedTemplateRenderer
          step={step}
          onExternalLinkClick={onExternalLinkClick}
        />
      </div>
    );
  }

  // 챗봇 카드 콘텐츠 렌더링 (Module 5, Step 2)
  if (isChatbotCardStep) {
    return (
      <div 
        className="bg-white p-6 lg:p-8"
        role="tabpanel"
        id={`tabpanel-${step.id}`}
        aria-labelledby={`tab-${step.id}`}
      >
        <ChatbotCardRenderer
          step={step}
          onExternalLinkClick={onExternalLinkClick}
        />
      </div>
    );
  }

  // Step 6 (최종 결과물 제출) - Padlet 임베드 포함
  if (step.showEmbeddedPadlet && step.padletUrl) {
    return (
      <div 
        className="bg-white p-6 lg:p-8"
        role="tabpanel"
        id={`tabpanel-${step.id}`}
        aria-labelledby={`tab-${step.id}`}
      >
        <div className="max-w-6xl mx-auto">
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
          <div className="mb-6">
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
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                작품 제출하기
              </h3>
              <p className="text-gray-600 mb-4">
                {moduleId === "1" && "완성된 뮤직비디오를 업로드하고 다른 학습자들의 작품도 감상해보세요."}
                {moduleId === "3" && "완성된 굿즈 디자인과 상품 기획서를 업로드하고 다른 학습자들의 창의적인 작품도 감상해보세요."}
                {moduleId === "5" && "준비한 국제회의 자료를 업로드하고 다른 학습자들의 발표 자료도 확인해보세요."}
                {moduleId && !["1", "3", "5"].includes(moduleId) && "완성된 작품을 업로드하고 다른 학습자들의 작품도 감상해보세요."}
                {!moduleId && "완성된 작품을 업로드하고 다른 학습자들의 작품도 감상해보세요."}
              </p>
              <button
                onClick={() => onExternalLinkClick(step.externalLink!.url)}
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

          {/* Embedded Padlet */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                제출된 작품들 보기
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {moduleId === "1" && "다른 학습자들이 제작한 뮤직비디오를 확인하고 영감을 얻어보세요."}
                {moduleId === "3" && "다른 학습자들이 디자인한 독도 굿즈를 확인하고 새로운 아이디어를 얻어보세요."}
                {moduleId === "5" && "다른 학습자들이 준비한 국제회의 자료를 확인하고 참고해보세요."}
                {moduleId && !["1", "3", "5"].includes(moduleId) && "다른 학습자들의 작품을 확인하고 영감을 얻어보세요."}
                {!moduleId && "다른 학습자들의 작품을 확인하고 영감을 얻어보세요."}
              </p>
            </div>
            <div className="relative" style={{ height: '600px' }}>
              <iframe
                src={step.padletUrl}
                title={
                  moduleId === "1" ? "뮤직비디오 작품 갤러리" :
                  moduleId === "3" ? "독도 굿즈 디자인 갤러리" :
                  moduleId === "5" ? "국제회의 준비 자료 갤러리" :
                  "학습 작품 갤러리"
                }
                className="w-full h-full border-0"
                allow="camera; microphone; geolocation"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 시나리오 생성용 빈 iframe 렌더링 (Module 2, Step 5 용)
  if (step.showScenarioIframe) {
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

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                학습 내용
              </h3>
              <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                {step.content}
              </div>
            </div>
          </div>

          {/* 빈 iframe 박스 (생성형 AI 시나리오 출력용 자리) */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                미래 해양 시나리오 생성 화면
              </h3>
              <p className="text-sm text-gray-600 mt-1">생성형 AI 기반 시나리오가 표시될 영역입니다. 현재는 임시 빈 프레임을 표시합니다.</p>
            </div>
            <div className="relative" style={{ height: '520px' }}>
              {step.scenarioIframeUrl ? (
                <iframe
                  src={step.scenarioIframeUrl}
                  title="미래 해양 시나리오"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <div className="mb-2">[ 빈 시나리오 프레임 ]</div>
                    <div className="text-sm">생성형 AI 시나리오를 연결하면 이 영역에 결과가 표시됩니다.</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  // 기존 표준 콘텐츠 렌더링 (다른 모듈들 또는 키워드 기능이 없는 경우)
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
        {(step.externalLink || step.externalLinks) && (
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              외부 자료 링크
            </h3>
            <p className="text-gray-600 mb-4">
              아래 버튼을 클릭하여 관련 자료를 확인하고 학습을 진행하세요.
            </p>
            
            {/* 복수 외부 링크 처리 */}
            {step.externalLinks && step.externalLinks.length > 0 && (
              <div className="space-y-3">
                {step.externalLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => onExternalLinkClick(link.url)}
                    className={`w-full external-link-button ${
                      link.url.includes('placeholder')
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300'
                        : ''
                    }`}
                    disabled={link.url.includes('placeholder')}
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
                    <span>{link.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* 단일 외부 링크 처리 (externalLinks가 없는 경우만) */}
            {step.externalLink && !step.externalLinks && (
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
            )}
          </div>
        )}

        {/* Embedded iframe preview for external links (bottom of step) */}
        {(step.externalLink || (step.externalLinks && step.externalLinks.length > 0)) && (
          <div className="mt-6 bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">임베디드 미리보기</h3>
            <p className="text-sm text-gray-600 mb-3">아래 프레임에서 외부 링크가 iframe으로 열리는지 확인할 수 있습니다. 일부 사이트는 보안 정책(X-Frame-Options)으로 인해 iframe 로드가 차단될 수 있습니다.</p>

            {/* 선택기: 외부 링크가 여러 개인 경우 */}
            {step.externalLinks && step.externalLinks.length > 1 && (
              <div className="mb-3">
                <label className="sr-only">임베디드 링크 선택</label>
                <select
                  className="border rounded px-3 py-2 w-full"
                  value={embeddedUrl ?? ''}
                  onChange={(e) => setEmbeddedUrl(e.target.value)}
                >
                  {step.externalLinks.map((l, idx) => (
                    <option key={idx} value={l.url}>{l.label}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="relative" style={{ height: '420px' }}>
              {embeddedUrl ? (
                <iframe
                  src={embeddedUrl}
                  title="외부 자료 미리보기"
                  className="w-full h-full border-0"
                  allow="camera; microphone; geolocation; fullscreen"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">선택된 링크가 없습니다.</div>
              )}
            </div>
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