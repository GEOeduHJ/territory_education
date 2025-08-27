import React from 'react';
import { TabNavigationProps } from '../types';

const TabNavigation: React.FC<TabNavigationProps> = ({ steps, activeStep, onStepChange }) => {
  return (
    <div className="border-b border-gray-200 bg-white">
      <nav className="-mb-px flex space-x-8 px-4 sm:px-6 lg:px-8 overflow-x-auto" aria-label="Tabs">
        {steps.map((step, index) => {
          const isActive = step.id === activeStep;
          return (
            <button
              key={step.id}
              onClick={() => onStepChange(step.id)}
              className={`
                tab-button
                ${isActive ? 'tab-button-active' : 'tab-button-inactive'}
                whitespace-nowrap py-4 px-1 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-territory-primary focus:ring-offset-2
              `}
              role="tab"
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
              <div className="flex items-center space-x-2">
                <span className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">
                  {index + 1}
                </span>
                <span className="hidden sm:inline">{step.title}</span>
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default TabNavigation;