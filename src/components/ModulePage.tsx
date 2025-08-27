import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TabNavigation from './TabNavigation';
import StepContent from './StepContent';
import { ModuleData } from '../types';
import { contentLoader, linkService } from '../services/linkService';

const ModulePage: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const [moduleData, setModuleData] = useState<ModuleData | null>(null);
  const [activeStepId, setActiveStepId] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadModuleData = async () => {
      if (!moduleId) {
        setError('모듈 ID가 제공되지 않았습니다.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await contentLoader.loadModuleData(moduleId);
        setModuleData(data);
        
        // Set first step as active by default
        if (data.steps.length > 0) {
          setActiveStepId(data.steps[0].id);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : '모듈을 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadModuleData();
  }, [moduleId]);

  const handleStepChange = (stepId: string) => {
    setActiveStepId(stepId);
    
    // Update URL hash for step navigation
    window.location.hash = stepId;
  };

  const handleExternalLinkClick = (url: string) => {
    if (!moduleId) return;
    
    // Track link click
    linkService.trackLinkClick(moduleId, activeStepId, url);
    
    // Open external link
    linkService.openExternalLink(url, true);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-territory-primary mx-auto mb-4"></div>
          <p className="text-gray-600">모듈을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (error || !moduleData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">모듈을 찾을 수 없습니다</div>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={handleBackToHome}
            className="bg-territory-primary text-white px-6 py-2 rounded-lg hover:bg-territory-secondary transition-colors"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  const activeStep = moduleData.steps.find(step => step.id === activeStepId);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <button
                onClick={handleBackToHome}
                className="flex items-center text-territory-primary hover:text-territory-secondary transition-colors mb-2"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                홈으로 돌아가기
              </button>
              <h1 className="text-2xl font-bold text-gray-900">
                {moduleData.title}
              </h1>
              <p className="text-gray-600 mt-1">
                {moduleData.description}
              </p>
            </div>
            <div className="text-sm text-gray-500">
              {moduleData.steps.length}개 단계
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <TabNavigation
        steps={moduleData.steps}
        activeStep={activeStepId}
        onStepChange={handleStepChange}
      />

      {/* Step Content */}
      {activeStep && (
        <StepContent
          step={activeStep}
          onExternalLinkClick={handleExternalLinkClick}
        />
      )}

      {/* Progress Indicator */}
      <div className="fixed bottom-4 right-4 bg-white rounded-full shadow-lg p-3">
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-600">진행률</span>
          <div className="w-16 bg-gray-200 rounded-full h-2">
            <div
              className="bg-territory-primary h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((moduleData.steps.findIndex(s => s.id === activeStepId) + 1) / moduleData.steps.length) * 100}%`
              }}
            />
          </div>
          <span className="text-territory-primary font-medium">
            {moduleData.steps.findIndex(s => s.id === activeStepId) + 1}/{moduleData.steps.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModulePage;