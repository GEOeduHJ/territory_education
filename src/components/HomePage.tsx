import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ModuleCard from './ModuleCard';
import { ModuleInfo } from '../types';
import { contentLoader } from '../services/linkService';

const HomePage: React.FC = () => {
  const [modules, setModules] = useState<ModuleInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadModules = async () => {
      try {
        setLoading(true);
        const moduleList = await contentLoader.loadAllModules();
        setModules(moduleList);
      } catch (err) {
        setError(err instanceof Error ? err.message : '모듈을 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadModules();
  }, []);

  const handleModuleClick = (moduleId: string) => {
    navigate(`/module/${moduleId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-territory-primary mx-auto mb-4"></div>
          <p className="text-gray-600">모듈을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">오류 발생</div>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              🤖 AI와 함께하는 스마트 영토교육 ✨
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              인공지능 기술을 활용한 창의적이고 재미있는 영토교육 플랫폼입니다! <br />
              AI 챗봇과의 대화, 창작 활동, 시뮬레이션을 통해 우리나라의 소중한 영토를 더 깊이 이해해보세요. 🌍
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            🎯 AI 기반 학습 모듈 선택
          </h2>
          <p className="text-gray-600">
            AI 기술을 활용한 다양한 학습 모듈로 영토교육의 새로운 경험을 만나보세요! 🚀✨
          </p>
        </div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              onClick={() => handleModuleClick(module.id)}
            />
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-sm p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              💡 학습 방법 안내
            </h3>
            <p className="text-gray-600 text-sm">
              각 모듈을 클릭하면 단계별 탭 구조로 이동합니다. 
              각 단계에서 제공되는 외부 링크와 다양한 활동을 통해 관련 자료를 확인하고 재미있게 학습을 진행하세요! 
              AI 챗봇과의 대화, 창작 활동, 토론 등 다양한 방식으로 영토교육을 체험할 수 있습니다. ✨
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;