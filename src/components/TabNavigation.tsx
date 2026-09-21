import React from 'react';
import { TabNavigationProps } from '../types';
import { cleanUiText } from '../utils/uiText';

const TabNavigation: React.FC<TabNavigationProps> = ({ steps, activeStep, onStepChange }) => {
  return (
    <div className="step-nav-shell">
      <div className="step-nav__inner">
        <nav className="step-nav" aria-label="학습 단계" role="tablist" aria-orientation="horizontal">
          {steps.map((step, index) => {
            const isActive = step.id === activeStep;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => onStepChange(step.id)}
                className={`tab-button ${isActive ? 'tab-button-active' : 'tab-button-inactive'}`}
                role="tab"
                id={`tab-${step.id}`}
                aria-selected={isActive}
                aria-controls={`tabpanel-${step.id}`}
                tabIndex={isActive ? 0 : -1}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight') {
                    const nextIndex = (index + 1) % steps.length;
                    onStepChange(steps[nextIndex].id);
                  } else if (e.key === 'ArrowLeft') {
                    const prevIndex = (index - 1 + steps.length) % steps.length;
                    onStepChange(steps[prevIndex].id);
                  }
                }}
              >
                <span className="tab-button__number">{String(index + 1).padStart(2, '0')}</span>
                <span className="tab-button__label">{cleanUiText(step.title)}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default TabNavigation;
