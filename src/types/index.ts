// 모듈 정보 인터페이스
export interface ModuleInfo {
  id: string;
  topic: string;
  title: string;
  description: string;
  imageUrl?: string;
  stepCount: number;
}

// 키워드 관련 인터페이스
export interface KeywordData {
  keyword1: string;  // 지리적 위치 (지형·지역성으로 서술)
  keyword2: string;  // 갈등 배경
  keyword3: string;  // 현재 상황
  keyword4: string;  // 해결 노력
}

export interface KeywordTemplate {
  template: string;
  placeholders: string[];
}

export interface ModuleKeywordConfig {
  moduleId: string;
  hasKeywordFeature: boolean;
  keywordInputStepId: string;
  templateSteps: string[];
  template: KeywordTemplate;
}

export interface StoredKeywordData {
  moduleId: string;
  keywords: KeywordData;
  timestamp: number;
  expiresAt?: number;
}

export interface ValidationState {
  keyword1Error?: string;
  keyword2Error?: string;
  keyword3Error?: string;
  keyword4Error?: string;
  generalError?: string;
  isValid: boolean;
}

export interface GuidedPromptField {
  id: string;
  label: string;
  placeholder: string;
  hint?: string;
  multiline?: boolean;
  fullWidth?: boolean;
  particle?: 'object' | 'euro' | 'copula';
}

export interface GuidedPromptGroup {
  id: string;
  title: string;
  fields: GuidedPromptField[];
}

export interface GuidedPromptConfig {
  id: string;
  title: string;
  description: string;
  groups: GuidedPromptGroup[];
  template: string;
  geminiUrl: string;
  geminiLabel: string;
}

// 모듈 스텝 인터페이스
export interface ModuleStep {
  id: string;
  title: string;
  description: string;
  content: string;
  detailContainers?: Array<{
    id: string;
    title: string;
    description?: string;
    content: string;
    targetModuleId?: string;
    targetStepId?: string;
  }>;
  hideDefaultContentContainer?: boolean;
  externalLink?: {
    url: string;
    label: string;
    openInNewTab: boolean;
    showIframe?: boolean;
  };
  externalLinks?: Array<{
    url: string;
    label: string;
    openInNewTab: boolean;
    showIframe?: boolean;
  }>;
  // 단계 안에 표시하는 외부 영상·지도·자료. 원본 링크는 iframe 대체 경로로 제공한다.
  embeddedResources?: Array<{
    id: string;
    title: string;
    description?: string;
    url: string;
    embedUrl: string;
    aspectRatio?: string;
    allow?: string;
  }>;
  // 영상·자료 뒤에 이어지는 문장형 핵심 표현 확인 활동
  revealableStatements?: LearningThemeContentPart[][];
  editableContent?: boolean;
  // 단계의 실제 내용을 설명하는 섹션 제목 (예: 탐구 활동 안내, 제출 전 확인)
  contentLabel?: string;
  // 외부 도구로 이어지는 행동을 설명하는 제목 (예: Gemini에서 가사 초안 만들기)
  actionLabel?: string;
  // 외부 도구·자료 영역의 제목과 안내 문구
  resourceLabel?: string;
  resourceDescription?: string;
  // 학생이 가이드를 참고해 직접 프롬프트를 작성하고 복사할 수 있는 입력 칸 (Module 1 이미지 생성 등)
  promptInput?: {
    label?: string;
    placeholder?: string;
  };
  // 학생 입력값을 문장형 프롬프트로 조합하는 작성기
  guidedPrompt?: GuidedPromptConfig;
  // 새로운 키워드 기능 속성들
  isKeywordInput?: boolean;
  useKeywordTemplate?: boolean;
  templateContent?: string;
  // 고정 템플릿 기능 (Module 3용)
  useFixedTemplate?: boolean;
  fixedTemplateContent?: string;
  // 독도 굿즈·상품 설명서 작업 공간
  useGoodsDesignWorkspace?: boolean;
  useProductSheetWorkspace?: boolean;
  // 챗봇 카드 기능 (Module 5용)
  useChatbotCards?: boolean;
  // 모듈 5의 경계 사례 탐구 단계에 제시하는 사례 이미지
  caseStudies?: Array<{
    id: string;
    imageSrc: string;
    imageAlt: string;
    caption: string;
  }>;
  // 모듈 5에서 이미지 자료를 한 장씩 넘겨 보는 수동 캐러셀
  imageCarousel?: {
    title: string;
    description?: string;
    placeholderCount?: number;
    aspectRatio?: string;
    slides: Array<{
      id: string;
      src?: string;
      alt?: string;
      caption?: string;
      explanation?: LearningThemeContentPart[][];
    }>;
  };
  // 경계 특성 정리에서 문장 안의 핵심 표현을 클릭해 확인하는 빈칸
  boundaryStatements?: Array<{
    id: string;
    marker: string;
    before: string;
    answer: string;
    connector?: string;
    after: string;
  }>;
  chatbotCards?: Array<{
    id: string;
    name: string;
    profileImage: string;
    description: string;
    url: string;
    isActive: boolean;
  }>;
  // Padlet 임베드 기능
  showEmbeddedPadlet?: boolean;
  padletUrl?: string;
  // Scenario iframe for generated future-sea scenarios
  showScenarioIframe?: boolean;
  scenarioIframeUrl?: string;
  // 지도 기능 (Module 1 step-0용)
  showMap?: boolean;
  regionResources?: RegionResource[];
  // 드롭다운 자료 iframe 기능 (Module 3 step-1용)
  showResourceDropdown?: boolean;
  dropdownResources?: DropdownResource[];
  // 홈페이지 내부에서 바로 학습하는 테마형 콘텐츠 (Module 3 step-1용)
  learningThemes?: LearningTheme[];
  // 테마별 학습 내용을 짧은 선택형 문항으로 점검하는 단계
  useLearningQuiz?: boolean;
  // 테마별 전시(드롭다운) 기능
  themedExhibits?: Array<{
    id: string;
    theme: string;
    resources: DropdownResource[];
  }>;
}

// 분쟁 지역 자료 인터페이스
export interface RegionResource {
  id: string;
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
  pdfUrl: string;
  description: string;
  // 학습지 부록에 수록된 사례 분석용 대화문 (5개 사례에만 존재)
  dialogue?: string;
}

// 드롭다운 자료 인터페이스
export interface DropdownResource {
  id: string;
  label: string;
  url: string;
}

export interface LearningTheme {
  id: string;
  title: string;
  summary: string;
  contentParagraphs: LearningThemeContentPart[][];
  inquiryPrompt?: string;
  checkQuestion?: string;
  checkOptions?: LearningThemeCheckOption[];
}

export interface LearningThemeContentPart {
  id?: string;
  text: string;
  revealable?: boolean;
}

export interface LearningThemeCheckOption {
  id: string;
  label: string;
  feedback: string;
  isCorrect: boolean;
}

// 모듈 데이터 인터페이스
export interface ModuleData {
  id: string;
  topic: string;
  title: string;
  description: string;
  steps: ModuleStep[];
}

// 모듈 설정 인터페이스
export interface ModuleConfig {
  modules: {
    [key: string]: ModuleData;
  };
}

// 컴포넌트 Props 인터페이스들
export interface ModuleCardProps {
  module: ModuleInfo;
  onClick: () => void;
}

export interface ModulePageProps {
  moduleId: string;
}

export interface TabNavigationProps {
  steps: ModuleStep[];
  activeStep: string;
  onStepChange: (stepId: string) => void;
}

export interface StepContentProps {
  step: ModuleStep;
  onExternalLinkClick: (url: string) => void;
  moduleId?: string;
  isFinalStep?: boolean;
  keywords?: KeywordData;
  onKeywordSubmit?: (keywords: KeywordData) => void;
  onNavigateToStep?: (targetModuleId: string, targetStepId?: string) => void;
}

// 키워드 관련 컴포넌트 Props
export interface KeywordInputFormProps {
  onSubmit: (keywords: KeywordData) => void;
  initialKeywords?: KeywordData;
  isLoading?: boolean;
}

export interface TemplateContentRendererProps {
  step: ModuleStep;
  keywords: KeywordData;
  onExternalLinkClick: (url: string) => void;
  
}

// 외부 링크 서비스 인터페이스
export interface ExternalLinkService {
  validateUrl: (url: string) => boolean;
  trackLinkClick: (moduleId: string, stepId: string, url: string) => void;
  openExternalLink: (url: string, newTab: boolean) => void;
}

// 콘텐츠 로더 인터페이스
export interface ContentLoader {
  loadModuleData: (moduleId: string) => Promise<ModuleData>;
  loadLearningModules: () => Promise<ModuleInfo[]>;
  loadAllModules: () => Promise<ModuleInfo[]>;
  loadModuleInfo: (moduleId: string) => Promise<ModuleInfo>;
}
