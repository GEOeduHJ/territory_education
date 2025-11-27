// 모듈 정보 인터페이스
export interface ModuleInfo {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  stepCount: number;
}

// 키워드 관련 인터페이스
export interface KeywordData {
  keyword1: string;  // 갈등 주체
  keyword2: string;  // 분쟁 배경
  keyword3: string;  // 해결 방안
  keyword4: string;  // 추가 내용
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

// 모듈 스텝 인터페이스
export interface ModuleStep {
  id: string;
  title: string;
  description: string;
  content: string;
  externalLink?: {
    url: string;
    label: string;
    openInNewTab: boolean;
  };
  externalLinks?: Array<{
    url: string;
    label: string;
    openInNewTab: boolean;
  }>;
  editableContent?: boolean;
  // 새로운 키워드 기능 속성들
  isKeywordInput?: boolean;
  useKeywordTemplate?: boolean;
  templateContent?: string;
  // 고정 템플릿 기능 (Module 3용)
  useFixedTemplate?: boolean;
  fixedTemplateContent?: string;
  // 챗봇 카드 기능 (Module 5용)
  useChatbotCards?: boolean;
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
}

// 분쟁 지역 자료 인터페이스
export interface RegionResource {
  id: string;
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
  pdfUrl: string;
  description: string;
}

// 드롭다운 자료 인터페이스
export interface DropdownResource {
  id: string;
  label: string;
  url: string;
}

// 모듈 데이터 인터페이스
export interface ModuleData {
  id: string;
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
  keywords?: KeywordData;
  onKeywordSubmit?: (keywords: KeywordData) => void;
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
  loadAllModules: () => Promise<ModuleInfo[]>;
}