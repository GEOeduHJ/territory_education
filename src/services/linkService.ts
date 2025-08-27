import { ExternalLinkService } from '../types';

class LinkService implements ExternalLinkService {
  validateUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  trackLinkClick(moduleId: string, stepId: string, url: string): void {
    // 여기를 수정하세요 - 링크 클릭 추적 로직
    console.log(`Link clicked: Module ${moduleId}, Step ${stepId} -> ${url}`);
    
    // 여기를 수정하세요 - 분석 도구 연동 (예: Google Analytics)
    // analytics.track('external_link_click', {
    //   moduleId,
    //   stepId,
    //   url
    // });
  }

  openExternalLink(url: string, newTab: boolean = true): void {
    if (!this.validateUrl(url)) {
      console.error('Invalid URL:', url);
      alert('여기를 수정하세요 - 잘못된 링크입니다.');
      return;
    }

    if (newTab) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = url;
    }
  }
}

// 싱글톤 인스턴스 생성
export const linkService = new LinkService();

// 여기를 수정하세요 - 콘텐츠 로더 서비스
export class StaticContentLoader {
  async loadModuleData(moduleId: string) {
    const { MODULES_DATA } = await import('../data/modules');
    const moduleData = MODULES_DATA.modules[moduleId];
    
    if (!moduleData) {
      throw new Error(`Module ${moduleId} not found`);
    }
    
    return moduleData;
  }

  async loadAllModules() {
    const { MODULES_DATA } = await import('../data/modules');
    
    return Object.values(MODULES_DATA.modules).map(module => ({
      id: module.id,
      title: module.title,
      description: module.description,
      stepCount: module.steps.length
    }));
  }
}

export const contentLoader = new StaticContentLoader();