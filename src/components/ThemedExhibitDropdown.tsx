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
        <p className="content-eyebrow">작품 살펴보기</p>
        <h4 id="exhibit-panel-title">전시 작품 선택</h4>
        <p>선택한 전시 작품을 새 창에서 열어 자세히 살펴보세요.</p>
      </div>

      <div className="resource-panel__controls">
        <div className="form-field">
          <label htmlFor="exhibit-select" className="form-label">작품 선택</label>
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

      <div className="callout callout--info">
        <p>작품을 선택한 뒤 버튼을 누르면 상세 페이지를 확인할 수 있습니다.</p>
      </div>
    </section>
  );
};

export default ThemedExhibitDropdown;
