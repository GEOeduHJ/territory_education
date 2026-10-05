import React from 'react';
import { ModuleInfo } from '../types';
import { cleanUiText } from '../utils/uiText';

interface LearningRoutePreviewProps {
  modules: ModuleInfo[];
  onModuleClick: (moduleId: string) => void;
}

const moduleOutcomes: Record<string, string> = {
  '1': '평화 캠페인 노래와 앨범 커버',
  '2': '해양 공간 데이터와 미래 제안',
  '3': '독도 굿즈와 상품 설명서',
  '4': 'DMZ의 미래 디자인',
  '5': '국제회의 입장과 해결 방안'
};

const LearningRoutePreview: React.FC<LearningRoutePreviewProps> = ({ modules, onModuleClick }) => {
  return (
    <aside className="learning-route-preview" aria-label="5개 모듈 학습 경로">
      <div className="learning-route-preview__header">
        <div>
          <p className="learning-route-preview__eyebrow">학습 경로</p>
          <h2>다섯 모듈, 하나의 탐구 여정</h2>
        </div>
        <span className="learning-route-preview__count">{modules.length} modules</span>
      </div>

      <ol className="learning-route-preview__list">
        {modules.map((module, index) => (
          <li key={module.id} className="learning-route-preview__item">
            <button
              type="button"
              className="learning-route-preview__button"
              onClick={() => onModuleClick(module.id)}
              aria-label={`${cleanUiText(module.topic)} 모듈 시작`}
            >
              <span className="learning-route-preview__number">{String(index + 1).padStart(2, '0')}</span>
              <span className="learning-route-preview__line" aria-hidden="true" />
              <span className="learning-route-preview__copy">
                <span className="learning-route-preview__topic">{cleanUiText(module.topic)}</span>
                <strong>{cleanUiText(module.title)}</strong>
                <small>{moduleOutcomes[module.id] || '탐구 결과물 만들기'}</small>
              </span>
              <span className="learning-route-preview__arrow" aria-hidden="true">↗</span>
            </button>
          </li>
        ))}
      </ol>

      <p className="learning-route-preview__footer">
        자료를 읽는 일에서 질문이 시작되고, 질문은 AI와 함께 새로운 표현이 됩니다.
      </p>
    </aside>
  );
};

export default LearningRoutePreview;
