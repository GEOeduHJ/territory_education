import React from 'react';
import { ModuleStep } from '../types';
import { cleanUiText } from '../utils/uiText';

interface MarineAreaCasesProps {
  id: string;
  cases: NonNullable<ModuleStep['marineAreaCases']>;
}

const MarineAreaCases: React.FC<MarineAreaCasesProps> = ({ id, cases }) => (
  <section className="marine-area-cases" aria-labelledby={`${id}-title`}>
    <h3 id={`${id}-title`} className="text-lg font-medium text-gray-900 mb-3">
      탐구할 해역 사례
    </h3>
    <div className="marine-area-cases__grid">
      {cases.map((area) => (
        <figure className="marine-area-case-card" key={area.id}>
          <div className="marine-area-case-card__media">
            <img
              src={area.imageSrc}
              alt={cleanUiText(area.imageAlt)}
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption>
            <div className="marine-area-case-card__detail">
              <span>사례 해역:</span>
              <span>{cleanUiText(area.caption)}</span>
            </div>
            <div className="marine-area-case-card__detail">
              <span>주요 탐구 관점:</span>
              <span>{cleanUiText(area.explorationFocus)}</span>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default MarineAreaCases;
