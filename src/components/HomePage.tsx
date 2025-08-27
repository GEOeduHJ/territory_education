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
              여기를 수정하세요 - 영토교육 학습 플랫폼
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              여기를 수정하세요 - 체계적인 영토교육을 통해 우리나라의 영토에 대한 올바른 이해를 높여보세요. 
              각 모듈은 단계별 학습 과정으로 구성되어 있습니다.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            학습 모듈 선택
          </h2>
          <p className="text-gray-600">
            여기를 수정하세요 - 아래 모듈 중 하나를 선택하여 학습을 시작하세요.
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
              여기를 수정하세요 - 학습 방법 안내
            </h3>
            <p className="text-gray-600 text-sm">
              여기를 수정하세요 - 각 모듈을 클릭하면 단계별 탭 구조로 이동합니다. 
              각 단계에서 제공되는 외부 링크를 통해 관련 자료를 확인하고 학습을 진행하세요.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;