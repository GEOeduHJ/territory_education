import React, { useState } from 'react';
import { DropdownResource } from '../types';
import { cleanUiText } from '../utils/uiText';

interface ThemedExhibitDropdownProps {
  resources: DropdownResource[];
}

const ThemedExhibitDropdown: React.FC<ThemedExhibitDropdownProps> = ({ resources }) => {
  const [selected, setSelected] = useState<DropdownResource | null>(resources[0] || null);

  const openSelected = () => {
    if (selected) {
      window.open(selected.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="exhibit-panel" aria-labelledby="exhibit-panel-title">
      <div className="exhibit-panel__header">
        <p className="content-eyebrow">전시회 살펴보기</p>
        <p>아래에서 선택한 전시회를 새 창에서 열어 자세히 살펴보세요.</p>
      </div>

      <div className="resource-panel__controls">
        <div className="form-field">
          <label htmlFor="exhibit-select" className="form-label">전시회 선택</label>
          <select
            id="exhibit-select"
            className="form-select"
            value={selected?.id || ''}
            onChange={(e) => {
              const resource = resources.find(r => r.id === e.target.value);
              setSelected(resource || null);
            }}
          >
            {resources.map(resource => (
              <option key={resource.id} value={resource.id}>{cleanUiText(resource.label)}</option>
            ))}
          </select>
        </div>
        <button type="button" onClick={openSelected} className="button button--primary resource-open-button">
          새 창에서 열기 <span aria-hidden="true">↗</span>
        </button>
      </div>
    </section>
  );
};

export default ThemedExhibitDropdown;
