import React from 'react';
import { ModuleCardProps } from '../types';
import { cleanUiText } from '../utils/uiText';

const moduleOutcomes: Record<string, string> = {
  '1': '캠페인 노래·앨범 커버',
  '2': '공간 데이터·미래 제안',
  '3': '굿즈·상품 설명서',
  '4': 'DMZ 미래 디자인',
  '5': '국제회의·해결 방안'
};

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onClick }) => {
  const moduleNumber = module.id.padStart(2, '0');

  return (
    <button
      type="button"
      className={`module-card module-card--learning module-card--${module.id}`}
      onClick={onClick}
      data-testid={`module-card-${module.id}`}
      aria-label={`${cleanUiText(module.topic)} 모듈, 학습 시작`}
    >
      <span className="module-card__header">
        <span className="module-card__index">모듈 {moduleNumber}</span>
        <span className="module-card__topic">{cleanUiText(module.topic)}</span>
      </span>

      <span className="module-card__body">
        <span className="module-card__label">{cleanUiText(module.topic)}를 탐구합니다</span>
        <span className="module-card__title">{cleanUiText(module.title)}</span>
        <span className="module-card__description">{cleanUiText(module.description)}</span>
        <span className="module-card__output">
          <span>AI 결과물</span>
          {moduleOutcomes[module.id] || '탐구 결과물'}
        </span>
      </span>

      <span className="module-card__footer">
        <span><strong>{module.stepCount}</strong>개 학습 단계</span>
        <span className="module-card__action">
          모듈 열기 <span aria-hidden="true">→</span>
        </span>
      </span>
    </button>
  );
};

export default ModuleCard;
