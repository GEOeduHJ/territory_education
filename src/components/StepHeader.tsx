import React from 'react';
import { ModuleStep } from '../types';
import { cleanUiText } from '../utils/uiText';

interface StepHeaderProps {
  step: ModuleStep;
}

const StepHeader: React.FC<StepHeaderProps> = ({ step }) => {
  return (
    <header className="step-heading">
      <h2>{cleanUiText(step.title)}</h2>
      {step.description && <p>{cleanUiText(step.description)}</p>}
    </header>
  );
};

export default StepHeader;
