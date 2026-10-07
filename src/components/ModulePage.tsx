import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import TabNavigation from './TabNavigation';
import StepContent from './StepContent';
import { ModuleData, KeywordData } from '../types';
import { contentLoader, linkService } from '../services/linkService';
import { KeywordController } from '../services/keywordController';
import { cleanUiText } from '../utils/uiText';

const ModulePage: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [moduleData, setModuleData] = useState<ModuleData | null>(null);
  const [activeStepId, setActiveStepId] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [keywords, setKeywords] = useState<KeywordData | null>(null);

  const isModule1 = moduleId === '1';
  const isOverview = moduleId === '0';

  useEffect(() => {
    const loadModuleData = async () => {
      if (!moduleId) {
        setError('모듈 ID가 제공되지 않았습니다.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await contentLoader.loadModuleData(moduleId);
        setModuleData(data);

        if (data.steps.length > 0) {
          const hash = window.location.hash?.replace('#', '');
          const targetFromHash = hash ? data.steps.find((step) => step.id === hash) : null;
          setActiveStepId(targetFromHash ? targetFromHash.id : data.steps[0].id);
        }

        if (isModule1) {
          const savedKeywords = KeywordController.getKeywords(moduleId);
          if (savedKeywords) {
            setKeywords(savedKeywords);
          }
        } else {
          setKeywords(null);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : '모듈을 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadModuleData();
  }, [moduleId, isModule1]);

  useEffect(() => {
    if (!moduleData) return;
    const hash = location.hash?.replace('#', '');
    if (!hash) return;
    const target = moduleData.steps.find((step) => step.id === hash);
    if (target) {
      setActiveStepId(target.id);
    }
  }, [location.hash, moduleData]);

  useEffect(() => {
    const handleNavigateToKeywordInput = () => {
      if (isModule1 && moduleData && moduleData.steps.length > 0) {
        setActiveStepId(moduleData.steps[0].id);
      }
    };

    window.addEventListener('navigateToKeywordInput', handleNavigateToKeywordInput);
    return () => {
      window.removeEventListener('navigateToKeywordInput', handleNavigateToKeywordInput);
    };
  }, [isModule1, moduleData]);

  const handleKeywordSubmit = async (submittedKeywords: KeywordData) => {
    if (!moduleId || !isModule1) return;

    try {
      KeywordController.storeKeywords(moduleId, submittedKeywords);
      setKeywords(submittedKeywords);

      if (moduleData && moduleData.steps.length > 1) {
        setTimeout(() => {
          setActiveStepId(moduleData.steps[1].id);
        }, 500);
      }
    } catch (error) {
      console.error('키워드 저장 실패:', error);
    }
  };

  const handleStepChange = (stepId: string) => {
    setActiveStepId(stepId);
    window.location.hash = stepId;
  };

  const handleNavigateToStep = (targetModuleId: string, targetStepId?: string) => {
    if (!targetModuleId) return;

    if (targetModuleId === moduleId) {
      if (targetStepId) {
        setActiveStepId(targetStepId);
        window.location.hash = targetStepId;
      }
      return;
    }

    const hashPart = targetStepId ? `#${targetStepId}` : '';
    navigate(`/module/${targetModuleId}${hashPart}`);
  };

  const handleExternalLinkClick = (url: string) => {
    if (!moduleId) return;
    linkService.trackLinkClick(moduleId, activeStepId, url);
    linkService.openExternalLink(url, true);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <div className="site-shell loading-state" role="status" aria-live="polite">
        <div className="loading-state__inner">
          <div className="loading-mark" aria-hidden="true" />
          <p>학습 모듈을 준비하고 있습니다.</p>
          <div className="loading-skeleton loading-skeleton--wide" />
          <div className="loading-skeleton" />
        </div>
      </div>
    );
  }

  if (error || !moduleData) {
    return (
      <div className="site-shell status-state">
        <div className="status-state__inner" role="alert">
          <span className="status-state__label">모듈 오류</span>
          <h1>모듈을 찾을 수 없습니다.</h1>
          <p>{error || '요청한 학습 모듈이 없습니다.'}</p>
          <button type="button" onClick={handleBackToHome} className="button button--primary">
            모듈 목록으로 돌아가기 <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    );
  }

  const activeStepIndex = Math.max(0, moduleData.steps.findIndex((step) => step.id === activeStepId));
  const activeStep = moduleData.steps[activeStepIndex];
  const previousStep = moduleData.steps[activeStepIndex - 1];
  const nextStep = moduleData.steps[activeStepIndex + 1];
  const progressValue = moduleData.steps.length > 0
    ? Math.round(((activeStepIndex + 1) / moduleData.steps.length) * 100)
    : 0;

  const handlePreviousStep = () => {
    if (previousStep) handleStepChange(previousStep.id);
  };

  const handleNextStep = () => {
    if (nextStep) {
      handleStepChange(nextStep.id);
    } else {
      handleBackToHome();
    }
  };

  return (
    <div className={`module-page-shell ${isOverview ? 'module-page-shell--overview' : 'module-page-shell--learning'}`}>
      <a className="skip-link" href="#module-content">본문으로 건너뛰기</a>

      <header className="module-page-header">
        <div className="module-page-header__inner">
          <div className="module-page-header__copy">
            <button type="button" onClick={handleBackToHome} className="back-link">
              <span aria-hidden="true">←</span> 모듈 선택으로 돌아가기
            </button>
            <p className="module-route-label">
              {isOverview ? '전체 학습 흐름' : `학습 모듈 ${moduleId?.padStart(2, '0')}`}
            </p>
            <div className="module-topic">{cleanUiText(moduleData.topic)}</div>
            <h1 className="module-page-title">{cleanUiText(moduleData.title)}</h1>
            <p className="module-page-description">{cleanUiText(moduleData.description)}</p>
          </div>
          <div className="module-page-header__meta" aria-label="현재 모듈 정보">
            <span>{isOverview ? '구성 주제' : '학습 단계'}</span>
            <strong>{isOverview ? moduleData.steps.length : moduleData.steps.length}</strong>
            <small>{isOverview ? '개 모듈' : '단계 구성'}</small>
          </div>
        </div>
      </header>

      <TabNavigation
        steps={moduleData.steps}
        activeStep={activeStepId}
        onStepChange={handleStepChange}
      />

      <main id="module-content" tabIndex={-1}>
        <div className="module-progress" role="status" aria-live="polite">
          <div className="module-progress__inner">
            <span className="module-progress__label">현재 학습 위치</span>
            <strong className="module-progress__step">
              {activeStepIndex + 1} / {moduleData.steps.length}
            </strong>
            <div
              className="module-progress__line"
              role="progressbar"
              aria-label="학습 진행률"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progressValue}
            >
              <span style={{ width: `${progressValue}%` }} />
            </div>
            <span className="module-progress__current-step">
              {activeStep ? cleanUiText(activeStep.title) : ''}
            </span>
          </div>
        </div>

        {activeStep && (
          <StepContent
            step={activeStep}
            onExternalLinkClick={handleExternalLinkClick}
            moduleId={moduleId}
            isFinalStep={activeStepIndex === moduleData.steps.length - 1}
            keywords={keywords || undefined}
            onKeywordSubmit={isModule1 ? handleKeywordSubmit : undefined}
            onNavigateToStep={handleNavigateToStep}
          />
        )}

        <nav className="module-step-actions" aria-label="학습 단계 이동">
          <button
            type="button"
            className="button button--secondary"
            onClick={handlePreviousStep}
            disabled={!previousStep}
          >
            <span aria-hidden="true">←</span> 이전 단계
          </button>
          <span className="module-step-actions__status">
            <span>{isOverview ? '전체 흐름' : '학습 진행'}</span>
            <strong>{activeStepIndex + 1} / {moduleData.steps.length}</strong>
          </span>
          <button type="button" className="button button--primary" onClick={handleNextStep}>
            {nextStep
              ? <>다음 단계 <span aria-hidden="true">→</span></>
              : <>모듈 목록으로 <span aria-hidden="true">→</span></>}
          </button>
        </nav>
      </main>
    </div>
  );
};

export default ModulePage;
