import React, { useState } from 'react';

interface MarineConcept {
  id: string;
  term: string;
  explanation: string;
}

interface MarineConceptTableProps {
  concepts: MarineConcept[];
}

const circledNumbers = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩'];

const MarineConceptTable: React.FC<MarineConceptTableProps> = ({ concepts }) => {
  const [revealedIds, setRevealedIds] = useState<Set<string>>(() => new Set());

  const toggleConcept = (id: string) => {
    setRevealedIds((previous) => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="marine-concept-table" aria-labelledby="marine-concept-table-title">
      <div className="marine-concept-table__heading">
        <div>
          <p className="content-eyebrow">핵심 용어 확인</p>
          <h3 id="marine-concept-table-title">해양영토 개념 한눈에 보기</h3>
          <p>용어를 눌러 이름을 확인하고, 오른쪽 설명과 연결해 보세요.</p>
        </div>
        <span className="marine-concept-table__count">개념 {concepts.length}개</span>
      </div>

      <div className="marine-concept-table__scroll-region">
        <table className="marine-concept-table__table">
          <thead>
            <tr>
              <th scope="col">개념</th>
              <th scope="col">설명</th>
            </tr>
          </thead>
          <tbody>
            {concepts.map((concept, index) => {
              const isRevealed = revealedIds.has(concept.id);
              const number = circledNumbers[index] || `${index + 1}.`;

              return (
                <tr key={concept.id}>
                  <td data-label="개념" className="marine-concept-table__term-cell">
                    <button
                      type="button"
                      className={`marine-concept-table__reveal ${isRevealed ? 'marine-concept-table__reveal--revealed' : ''}`}
                      aria-pressed={isRevealed}
                      aria-describedby={`marine-concept-description-${concept.id}`}
                      aria-label={isRevealed ? `${number} ${concept.term}, 다시 가리기` : `${number} 개념, 클릭해서 내용 확인`}
                      onClick={() => toggleConcept(concept.id)}
                    >
                      <span className="marine-concept-table__number" aria-hidden="true">{number}</span>
                      <span>{isRevealed ? concept.term : '클릭해서 내용 확인'}</span>
                    </button>
                  </td>
                  <td
                    id={`marine-concept-description-${concept.id}`}
                    data-label="설명"
                    className="marine-concept-table__explanation-cell"
                  >
                    {concept.explanation}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MarineConceptTable;
