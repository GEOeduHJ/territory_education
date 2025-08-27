// 모듈 정보 인터페이스
export interface ModuleInfo {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  stepCount: number;
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
  editableContent?: boolean;
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