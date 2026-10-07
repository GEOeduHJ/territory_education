import React from 'react';
import { StepContentProps } from '../types';
import { KeywordInputForm } from './KeywordInputForm';
import { TemplateRenderer } from './TemplateRenderer';
import { ChatbotCardRenderer } from './ChatbotCardRenderer';
import DisputeMap from './DisputeMap';
import ResourceDropdown from './ResourceDropdown';
import ThemedExhibitDropdown from './ThemedExhibitDropdown';
import { PromptInputBox } from './PromptInputBox';
import LearningThemeCards from './LearningThemeCards';
import LearningThemeQuiz from './LearningThemeQuiz';
import GoodsDesignWorkspace from './GoodsDesignWorkspace';
import ProductSheetWorkspace from './ProductSheetWorkspace';
import BoundaryCharacteristics from './BoundaryCharacteristics';
import Module5ImageCarousel from './Module5ImageCarousel';
import InlineEmbeddedResources from './InlineEmbeddedResources';
import StepHeader from './StepHeader';
import { cleanUiText } from '../utils/uiText';

const StepContent: React.FC<StepContentProps> = ({ 
  step, 
  onExternalLinkClick, 
  moduleId,
  keywords,
  onKeywordSubmit,
  onNavigateToStep
}) => {
  // Module 1의 키워드 입력 단계인지 확인
  const isKeywordInputStep = step.isKeywordInput && moduleId === "1";
  
  // Module 1의 템플릿 사용 단계인지 확인
  const isTemplateStep = step.useKeywordTemplate && moduleId === "1";

  // Module 3의 고정 템플릿 사용 단계인지 확인
  const isFixedTemplateStep = step.useFixedTemplate && moduleId === "3";

  // Module 3의 굿즈 디자인 작업 공간인지 확인
  const isGoodsDesignWorkspace = step.useGoodsDesignWorkspace && moduleId === "3";

  // Module 3의 상품 설명서 작업 공간인지 확인
  const isProductSheetWorkspace = step.useProductSheetWorkspace && moduleId === "3";

  // Module 5의 챗봇 카드 사용 단계인지 확인
  const isChatbotCardStep = step.useChatbotCards && moduleId === "5";

  // Module 5의 첫 단계 사례 이미지 갤러리
  const isModule5CaseStudyStep = moduleId === "5" && step.id === "step-1" && !!step.caseStudies?.length;

  // Module 1의 지도 표시 단계인지 확인
  const isMapStep = step.showMap && moduleId === "1";

  // Module 3의 드롭다운 자료 표시 단계인지 확인
  const isResourceDropdownStep = step.showResourceDropdown && moduleId === "3";

  // Module 3의 학습 점검 퀴즈 단계인지 확인
  const isLearningQuizStep = step.useLearningQuiz && moduleId === "3";

  // Embedded iframe preview for external links (all modules)

  // Themed exhibits state (for theme selector + resources dropdown)
  const [selectedThemeId, setSelectedThemeId] = React.useState<string | null>(
    step.themedExhibits && step.themedExhibits.length > 0 ? step.themedExhibits[0].id : null
  );

  const hasDetailContainers = !!(step.detailContainers && step.detailContainers.length > 0);
  const shouldShowDefaultContent = !step.hideDefaultContentContainer;
  const getDefaultContentLabel = () => {
    if (step.contentLabel) return step.contentLabel;
    if (isMapStep) return '분쟁 지역 자료 읽기';
    if (isResourceDropdownStep) return '독도 주제 학습 안내';
    if (step.showEmbeddedPadlet) return '제출 전 확인';
    if (step.showScenarioIframe) return '활동 결과 정리';
    if (step.promptInput) return '프롬프트 구성 안내';
    if (step.themedExhibits && step.themedExhibits.length > 0) return '전시 탐구 안내';
    if (moduleId === '5') return '사례를 이해하는 방법';
    return '이 단계에서 할 일';
  };
  const contentLabel = cleanUiText(getDefaultContentLabel());

  const handleDetailNavigate = (targetModuleId?: string, targetStepId?: string) => {
    if (!targetModuleId || !onNavigateToStep) return;
    onNavigateToStep(targetModuleId, targetStepId);
  };

  const renderDetailContainers = () => {
    if (!hasDetailContainers) return null;
    return (
      <div className="space-y-4 mb-8">
        {step.detailContainers!.map((container) => {
          const isNavigable = !!container.targetModuleId;
          return (
            <div
              key={container.id}
              className={`detail-card transition-transform transition-colors duration-150 ease-out ${
                isNavigable ? 'transform hover:scale-[1.03] focus-within:scale-[1.03] active:scale-[0.995] cursor-pointer' : ''
              } hover:bg-territory-accent/25`}
              role={isNavigable ? 'button' : undefined}
              tabIndex={isNavigable ? 0 : undefined}
              onClick={() => handleDetailNavigate(container.targetModuleId, container.targetStepId)}
              onKeyDown={(e) => {
                if (!isNavigable) return;
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleDetailNavigate(container.targetModuleId, container.targetStepId);
                }
              }}
            >
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {cleanUiText(container.title)}
              </h3>
              {container.description && (
                <p className="text-sm text-gray-600 mb-3">
                  {cleanUiText(container.description)}
                </p>
              )}
              <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                {cleanUiText(container.content)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  React.useEffect(() => {
    // reset selected theme when step changes
    setSelectedThemeId(step.themedExhibits && step.themedExhibits.length > 0 ? step.themedExhibits[0].id : null);
  }, [step.id]);
 

  // 모듈 5, Step 1: 경계 사례와 AI 뉴스 영상
  if (isModule5CaseStudyStep) {
    return (
      <div
        className="step-surface"
        role="tabpanel"
        id={`tabpanel-${step.id}`}
        aria-labelledby={`tab-${step.id}`}
      >
        <div className="max-w-6xl mx-auto">
          <StepHeader step={step} eyebrow="경계 사례 탐구" />

          <section className="module5-case-study-gallery" aria-labelledby="module5-case-study-title">
            <div className="module5-case-study-gallery__heading">
              <h3 id="module5-case-study-title">{cleanUiText(step.contentLabel || '여러 나라의 경계 사례 살펴보기')}</h3>
              <p>{cleanUiText(step.content)}</p>
            </div>

            <div className="module5-case-study-grid">
              {step.caseStudies!.map((study) => (
                <figure className="module5-case-study-card" key={study.id}>
                  <div className="module5-case-study-card__media">
                    <img
                      src={study.imageSrc}
                      alt={cleanUiText(study.imageAlt)}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption>{cleanUiText(study.caption)}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          {step.boundaryStatements && step.boundaryStatements.length > 0 && (
            <BoundaryCharacteristics statements={step.boundaryStatements} />
          )}

          {step.externalLinks && step.externalLinks.length > 0 && (
            <section className="resource-block module5-case-study-video" aria-labelledby="module5-case-study-video-title">
              <h3 id="module5-case-study-video-title" className="text-lg font-medium text-gray-900 mb-3">
                {cleanUiText(step.resourceLabel || 'AI 뉴스 영상')}
              </h3>
              {step.resourceDescription && (
                <p className="text-gray-600 mb-4">{cleanUiText(step.resourceDescription)}</p>
              )}
              <div className="space-y-3">
                {step.externalLinks.map((link, index) => (
                  <button
                    key={`${link.url}-${index}`}
                    type="button"
                    onClick={() => onExternalLinkClick(link.url)}
                    className="external-link-button"
                  >
                    <span>{cleanUiText(link.label)}</span>
                  </button>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    );
  }

  // 지도 렌더링 (Module 1, Step 0 - 분쟁 지역 자료 조사)
  if (isMapStep && step.regionResources) {
    return (
      <div 
        className="step-surface"
        role="tabpanel"
        id={`tabpanel-${step.id}`}
        aria-labelledby={`tab-${step.id}`}
      >
        <div className="max-w-7xl mx-auto">
          <StepHeader step={step} eyebrow="자료 탐구" />

          {/* Content */}
          <div className="mb-8">
            <div className="prose max-w-none">
              <p className="text-gray-700 whitespace-pre-wrap">
                {cleanUiText(step.content)}
              </p>
            </div>
          </div>

          {/* Dispute Map */}
          <DisputeMap regions={step.regionResources} />

          {/* External Link Section (show links alongside the map) */}
          {(step.externalLink || step.externalLinks) && (
            <div className="resource-block mt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                {cleanUiText(step.resourceLabel || '활동 자료')}
              </h3>
              <p className="text-gray-600 mb-4">
                {cleanUiText(step.resourceDescription || '아래 자료를 활용해 활동을 이어가세요.')}
              </p>

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
                      <span>{cleanUiText(link.label)}</span>
                    </button>
                  ))}
                </div>
              )}

              {step.externalLink && !step.externalLinks && (
                <button
                  onClick={() => onExternalLinkClick(step.externalLink!.url)}
                  className="external-link-button"
                >
                  <span>{cleanUiText(step.externalLink.label)}</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // 드롭다운 자료 렌더링 (Module 3, Step 1 - 독도 주제 학습)
  if (isResourceDropdownStep && step.dropdownResources) {
    return (
      <div 
        className="step-surface"
        role="tabpanel"
        id={`tabpanel-${step.id}`}
        aria-labelledby={`tab-${step.id}`}
      >
        <div className="max-w-6xl mx-auto">
          <StepHeader step={step} eyebrow="주제 학습" />

          {/* Content */}
          <div className="mb-8">
            <div className="prose max-w-none">
              <p className="text-gray-700 whitespace-pre-wrap">
                {cleanUiText(step.content)}
              </p>
            </div>
          </div>

          {/* Homepage-internal theme learning */}
          {step.learningThemes && step.learningThemes.length > 0 && (
            <LearningThemeCards themes={step.learningThemes} />
          )}

          {/* 외부 보조 자료 링크가 제공되는 단계에만 표시 */}
          {step.externalLinks && step.externalLinks.length > 0 && (
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                {step.externalLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => onExternalLinkClick(link.url)}
                    className="external-link-button"
                  >
                    <span>{cleanUiText(link.label)}</span>
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

  // 학습 점검 퀴즈 렌더링 (Module 3, Step 2)
  if (isLearningQuizStep && step.learningThemes) {
    return (
      <div
        className="step-surface"
        role="tabpanel"
        id={`tabpanel-${step.id}`}
        aria-labelledby={`tab-${step.id}`}
      >
        <div className="max-w-6xl mx-auto">
          <StepHeader step={step} eyebrow="학습 점검" />

          <div className="mb-8">
            <div className="prose max-w-none">
              <p className="text-gray-700 whitespace-pre-wrap">
                {cleanUiText(step.content)}
              </p>
            </div>
          </div>

          <LearningThemeQuiz themes={step.learningThemes} />
        </div>
      </div>
    );
  }

  // 키워드 입력 폼 렌더링 (Module 1, Step 2)
  if (isKeywordInputStep && onKeywordSubmit) {
    return (
      <div 
        className="step-surface"
        role="tabpanel"
        id={`tabpanel-${step.id}`}
        aria-labelledby={`tab-${step.id}`}
      >
        <KeywordInputForm
          onSubmit={onKeywordSubmit!}
          initialKeywords={keywords}
        />
      </div>
    );
  }

  // 템플릿 콘텐츠 렌더링 (Module 1, Step 3)
  if (isTemplateStep && keywords) {
    return (
      <div 
        className="step-surface"
        role="tabpanel"
        id={`tabpanel-${step.id}`}
        aria-labelledby={`tab-${step.id}`}
      >
        <TemplateRenderer
          step={step}
          keywords={keywords}
          onExternalLinkClick={onExternalLinkClick}
          mode="dynamic"
        />
      </div>
    );
  }

  // 굿즈 목업·프롬프트 작업 공간 렌더링 (Module 3, Step 3)
  if (isGoodsDesignWorkspace) {
    return (
      <div
        className="step-surface"
        role="tabpanel"
        id={`tabpanel-${step.id}`}
        aria-labelledby={`tab-${step.id}`}
      >
        <GoodsDesignWorkspace
          step={step}
          onExternalLinkClick={onExternalLinkClick}
        />
      </div>
    );
  }

  // 상품 설명서 작업 공간 렌더링 (Module 3, Step 4)
  if (isProductSheetWorkspace) {
    return (
      <div
        className="step-surface"
        role="tabpanel"
        id={`tabpanel-${step.id}`}
        aria-labelledby={`tab-${step.id}`}
      >
        <ProductSheetWorkspace />
      </div>
    );
  }

  // 고정 템플릿 콘텐츠 렌더링 (Module 3)
  if (isFixedTemplateStep) {
    return (
      <div 
        className="step-surface"
        role="tabpanel"
        id={`tabpanel-${step.id}`}
        aria-labelledby={`tab-${step.id}`}
      >
        <TemplateRenderer
          step={step}
          onExternalLinkClick={onExternalLinkClick}
          mode="fixed"
        />
      </div>
    );
  }

  // 챗봇 카드 콘텐츠 렌더링 (Module 5, 페르소나 대화 단계)
  if (isChatbotCardStep) {
    return (
      <div 
        className="step-surface"
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
        className="step-surface"
        role="tabpanel"
        id={`tabpanel-${step.id}`}
        aria-labelledby={`tab-${step.id}`}
      >
        <div className="max-w-6xl mx-auto">
          <StepHeader step={step} eyebrow={moduleId === "5" ? "생각 공유와 성찰" : "결과물 공유"} />

          {/* Step Content */}
          {hasDetailContainers && renderDetailContainers()}

          {shouldShowDefaultContent && (
            <div className="mb-6">
              <div className="content-block">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {contentLabel}
                </h3>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {cleanUiText(step.content)}
                </div>
              </div>
            </div>
          )}

          {/* External Link Section */}
          {step.externalLink && (
            <div className="resource-block mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                {moduleId === "5" ? "성찰 내용 공유하기" : "결과물 업로드"}
              </h3>
              <p className="text-gray-600 mb-4">
                {moduleId === "1" && "완성된 캠페인 노래와 앨범 커버를 업로드하고 다른 학습자들의 작품도 감상해보세요."}
                {moduleId === "3" && "완성된 굿즈 디자인과 상품 기획서를 업로드하고 다른 학습자들의 창의적인 작품도 감상해보세요."}
                {moduleId === "5" && "정리한 생각을 Padlet에 공유하고 다른 학습자가 남긴 관점도 살펴보세요."}
                {moduleId && !["1", "3", "5"].includes(moduleId) && "완성된 작품을 업로드하고 다른 학습자들의 작품도 감상해보세요."}
                {!moduleId && "완성된 작품을 업로드하고 다른 학습자들의 작품도 감상해보세요."}
              </p>
              <button
                onClick={() => onExternalLinkClick(step.externalLink!.url)}
                className="external-link-button"
              >
                <span>{cleanUiText(step.externalLink.label)}</span>
              </button>
            </div>
          )}

          {/* Embedded Padlet */}
          <div className="embed-block">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                {moduleId === "5" ? "서로의 생각 살펴보기" : "서로의 결과물 살펴보기"}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {moduleId === "1" && "다른 학습자들이 제작한 캠페인 노래와 앨범 커버를 확인하고 영감을 얻어보세요."}
                {moduleId === "3" && "다른 학습자들이 디자인한 독도 굿즈를 확인하고 새로운 아이디어를 얻어보세요."}
                {moduleId === "5" && "서로 다른 생각과 근거를 읽으며 경계 사례를 여러 관점에서 돌아보세요."}
                {moduleId && !["1", "3", "5"].includes(moduleId) && "다른 학습자들의 작품을 확인하고 영감을 얻어보세요."}
                {!moduleId && "다른 학습자들의 작품을 확인하고 영감을 얻어보세요."}
              </p>
            </div>
            <div className="relative" style={{ height: '600px' }}>
              <iframe
                src={step.padletUrl}
                title={
                  moduleId === "1" ? "캠페인 노래와 앨범 커버 작품 갤러리" :
                  moduleId === "3" ? "독도 굿즈 디자인 갤러리" :
                  moduleId === "5" ? "경계 사례 생각 나누기 Padlet" :
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
        className="step-surface"
        role="tabpanel"
        id={`tabpanel-${step.id}`}
        aria-labelledby={`tab-${step.id}`}
      >
        <div className="max-w-4xl mx-auto">
          <StepHeader step={step} eyebrow="AI 시나리오" />

          {/* Content */}
          {hasDetailContainers && renderDetailContainers()}

          {shouldShowDefaultContent && (
            <div className="prose prose-lg max-w-none mb-6">
              <div className="content-block">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {contentLabel}
                </h3>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {cleanUiText(step.content)}
                </div>
              </div>
            </div>
          )}

          {step.embeddedResources && (
            <InlineEmbeddedResources
              resources={step.embeddedResources}
              onExternalLinkClick={onExternalLinkClick}
            />
          )}

            {/* 활동 자료 영역 (시나리오 iframe 분기에서도 표시) */}
            {(step.externalLink || step.externalLinks) && (
              <div className="resource-block mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {cleanUiText(step.resourceLabel || '활동 자료')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {cleanUiText(step.resourceDescription || '아래 자료를 활용해 활동을 이어가세요.')}
                </p>

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
                        <span>{cleanUiText(link.label)}</span>
                      </button>
                    ))}
                  </div>
                )}

                {step.externalLink && !step.externalLinks && (
                  <button
                    onClick={() => onExternalLinkClick(step.externalLink!.url)}
                    className="external-link-button"
                  >
                    <span>{cleanUiText(step.externalLink.label)}</span>
                  </button>
                )}
              </div>
            )}

            {/* Themed exhibits selector (if provided) */}
            {step.themedExhibits && step.themedExhibits.length > 0 && (
              <div className="exhibit-block mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">전시 테마별 작품 선택</h3>
                <p className="text-sm text-gray-600 mb-3">테마를 선택하면 해당 테마의 전시 작품 목록이 드롭다운으로 표시됩니다.</p>
                <div className="flex gap-3 items-center">
                  <select
                    className="p-3 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedThemeId || ''}
                    onChange={(e) => setSelectedThemeId(e.target.value)}
                  >
                    {step.themedExhibits.map((t) => (
                      <option key={t.id} value={t.id}>{t.theme}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-4">
                  {(() => {
                    const theme = step.themedExhibits!.find(t => t.id === selectedThemeId) || step.themedExhibits![0];
                    return <ThemedExhibitDropdown resources={theme.resources} />;
                  })()}
                </div>
              </div>
            )}

            {step.scenarioIframeUrl ? (
              <div className="embed-block">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">
                    AI 시나리오 결과
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    생성한 시나리오를 확인하고 다음 활동에 활용해보세요.
                  </p>
                </div>
                <div className="relative" style={{ height: '520px' }}>
                  <iframe
                    src={step.scenarioIframeUrl}
                    title="AI 시나리오 결과"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>
            ) : (
              <div className="scenario-placeholder" role="note">
                <span className="scenario-placeholder__label">AI 시나리오 연결 대기</span>
                <p>이 단계에서 만든 시나리오를 연결하면 결과가 이곳에 표시됩니다.</p>
              </div>
            )}
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
      className="step-surface"
      role="tabpanel"
      id={`tabpanel-${step.id}`}
      aria-labelledby={`tab-${step.id}`}
    >
      <div className="max-w-4xl mx-auto">
        <StepHeader step={step} />

        {/* Step Content */}
        {hasDetailContainers && renderDetailContainers()}

        {shouldShowDefaultContent && (
          <div className="prose prose-lg max-w-none mb-8">
            <div className="content-block">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                {contentLabel}
              </h3>
            <div className="text-gray-700 whitespace-pre-line leading-relaxed">
              {cleanUiText(step.content)}
            </div>
            </div>
          </div>
        )}

        {moduleId === '5' && step.imageCarousel && (
          <Module5ImageCarousel
            key={step.id}
            carousel={step.imageCarousel}
          />
        )}

        {step.embeddedResources && (
          <InlineEmbeddedResources
            resources={step.embeddedResources}
            onExternalLinkClick={onExternalLinkClick}
          />
        )}

        {/* Prompt Input Box (학생이 가이드를 참고해 직접 프롬프트를 작성하는 입력 칸) */}
        {step.promptInput && (
          <PromptInputBox
            label={step.promptInput.label}
            placeholder={step.promptInput.placeholder}
          />
        )}

        {/* Themed exhibits selector (if provided) */}
        {step.themedExhibits && step.themedExhibits.length > 0 && (
          <div className="exhibit-block mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-3">전시 테마별 작품 선택</h3>
            <p className="text-sm text-gray-600 mb-3">테마를 선택하면 해당 테마의 전시 작품 목록이 드롭다운으로 표시됩니다.</p>
            <div className="flex gap-3 items-center">
              <select
                className="p-3 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedThemeId || ''}
                onChange={(e) => setSelectedThemeId(e.target.value)}
              >
                {step.themedExhibits.map((t) => (
                  <option key={t.id} value={t.id}>{t.theme}</option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              {(() => {
                const theme = step.themedExhibits!.find(t => t.id === selectedThemeId) || step.themedExhibits![0];
                return <ThemedExhibitDropdown resources={theme.resources} />;
              })()}
            </div>
          </div>
        )}

        {/* External Link Section */}
        {(step.externalLink || step.externalLinks) && (
          <div className="resource-block">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              {cleanUiText(step.resourceLabel || '활동 자료')}
            </h3>
            <p className="text-gray-600 mb-4">
              {cleanUiText(step.resourceDescription || '아래 자료를 활용해 활동을 이어가세요.')}
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
                    <span>{cleanUiText(link.label)}</span>
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
                <span>{cleanUiText(step.externalLink.label)}</span>
              </button>
            )}
          </div>
        )}

        

        {/* Editable Content Notice */}
        {step.editableContent && (
          <div className="callout callout--warning mt-8">
            <span className="callout__mark" aria-hidden="true">!</span>
            <div>
              <h4>수정 가능한 콘텐츠</h4>
              <p>이 콘텐츠는 수정할 수 있습니다. 필요에 따라 내용을 업데이트하세요.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepContent;
