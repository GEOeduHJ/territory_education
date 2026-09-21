import React from 'react';
import { ModuleStep } from '../types';
import { cleanUiText } from '../utils/uiText';

interface StepHeaderProps {
  step: ModuleStep;
  eyebrow?: string;
}

const StepHeader: React.FC<StepHeaderProps> = ({ step, eyebrow = '활동 단계' }) => {
  return (
    <header className="step-heading">
      <p className="step-heading__eyebrow">{eyebrow}</p>
      <h2>{cleanUiText(step.title)}</h2>
      {step.description && <p>{cleanUiText(step.description)}</p>}
    </header>
  );
};

export default StepHeader;
