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
      {/* 상단 이미지/타이틀 영역 (이미지 우선, 없으면 그라데이션) */}
      <div className="w-full h-32 rounded-lg mb-4 overflow-hidden relative">
        {module.imageUrl ? (
          <img src={module.imageUrl} alt={module.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-territory-primary to-territory-secondary" />
        )}

        {/* 중앙 오버레이: 모듈 번호 및 토픽을 항상 표시 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-white text-center">
            <div className="text-sm">모듈 {module.id} </div>
            <div className="text-2xl font-bold">{module.topic ?? ''}</div>
          </div>
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