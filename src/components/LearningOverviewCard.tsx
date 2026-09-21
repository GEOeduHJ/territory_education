import React from 'react';
import { ModuleInfo } from '../types';
import { cleanUiText } from '../utils/uiText';

interface LearningStage {
  title: string;
  description: string;
}

interface LearningOverviewCardProps {
  overview: ModuleInfo;
  stages: LearningStage[];
  onClick: () => void;
}

const LearningOverviewCard: React.FC<LearningOverviewCardProps> = ({ overview, stages, onClick }) => {
  return (
    <article className="overview-card">
      <div className="overview-card__main">
        <p className="overview-card__label">전체 학습 흐름</p>
        <h3>{cleanUiText(overview.title)}</h3>
        <p className="overview-card__description">
          자료 탐구부터 AI 창작과 성찰까지, 다섯 개 모듈을 관통하는 학습의 순서를 먼저 살펴보세요.
        </p>

        <ol className="overview-card__stages" aria-label="공통 학습 흐름">
          {stages.map((stage, index) => (
            <li key={stage.title} className="overview-card__stage">
              <span className="overview-card__stage-index">{String(index + 1).padStart(2, '0')}</span>
              <span className="overview-card__stage-copy">
                <strong>{stage.title}</strong>
                <span>{stage.description}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="overview-card__action">
        <div>
          <span className="overview-card__action-label">시작 전 안내</span>
          <strong>{overview.stepCount}개 모듈의 주제와 활동 순서</strong>
        </div>
        <button type="button" className="button button--primary" onClick={onClick}>
          개요 열기 <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
};

export default LearningOverviewCard;
