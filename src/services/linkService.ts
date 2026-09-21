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
    // 분석 도구 연동 지점 (예: Google Analytics)
    void moduleId;
    void stepId;
    void url;
    // analytics.track('external_link_click', {
    //   moduleId,
    //   stepId,
    //   url
    // });
  }

  openExternalLink(url: string, newTab: boolean = true): void {
    if (!this.validateUrl(url)) {
      console.error('Invalid URL:', url);
      alert('올바르지 않은 링크 주소입니다. 다시 확인해주세요.');
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

// 콘텐츠 로더 서비스 - 모듈 데이터 동적 로딩
export class StaticContentLoader {
  async loadModuleData(moduleId: string) {
    const { loadModule } = await import('../data/modules/index');
    return await loadModule(moduleId);
  }

  async loadLearningModules() {
    const { loadLearningModules } = await import('../data/modules/index');
    return await loadLearningModules();
  }

  async loadAllModules() {
    return await this.loadLearningModules();
  }

  async loadModuleInfo(moduleId: string) {
    const { loadModuleInfo } = await import('../data/modules/index');
    return await loadModuleInfo(moduleId);
  }
}

export const contentLoader = new StaticContentLoader();
