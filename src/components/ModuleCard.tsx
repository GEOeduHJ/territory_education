import React from 'react';
import { ModuleCardProps } from '../types';

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onClick }) => {
  return (
    <div
      className="module-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
      data-testid={`module-card-${module.id}`}
    >
      {/* 여기를 수정하세요 - 모듈 이미지 영역 */}
      <div className="w-full h-32 bg-gradient-to-r from-territory-primary to-territory-secondary rounded-lg mb-4 flex items-center justify-center">
        <div className="text-white text-2xl font-bold">
          모듈 {module.id}
        </div>
      </div>

      {/* 모듈 제목 */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {module.title}
      </h3>

      {/* 모듈 설명 */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {module.description}
      </p>

      {/* 모듈 정보 */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">
          {module.stepCount}개 단계
        </span>
        <div className="flex items-center text-territory-primary">
          <span className="text-sm font-medium">시작하기</span>
          <svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;