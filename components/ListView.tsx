import React, { useMemo } from 'react';

type Props = {
  items: { value: number; order: number }[];
  ascending: boolean;
  onToggleSort: () => void;
  onReset?: () => void;
  onDelete?: (order: number) => void;
};

export default function ListView({ items, ascending, onToggleSort, onReset, onDelete }: Props) {

  const min = items.length ? Math.min(...items.map(item => item.value)) : null;
  const max = items.length ? Math.max(...items.map(item => item.value)) : null;

  return (
    <div className="list-view">
      <div className="list-controls">
        <h3>Numbers List</h3>
        <div className="list-buttons">
          <button className="list-btn" onClick={onToggleSort}>
            {ascending ? 'Sort ↓' : 'Sort ↑'}
          </button>
          {onReset && (
            <button className="list-btn reset-btn" onClick={onReset}>
              Reset
            </button>
          )}
        </div>
      </div>

      {items.length === 0 ? (
        <div className="empty-state">No items yet — add values &gt; 0</div>
      ) : (
        <ul className="list">
          {items.map(item => {
            const isMin = item.value === min;
            const isMax = item.value === max;
            const className = `list-item ${isMin ? 'min-item' : ''} ${isMax ? 'max-item' : ''}`;
            return (
              <li key={item.order} className={className}>
                <div className="list-item-details">
                  <span className="number">{item.value}</span>
                  <span className="order-number faded-number"> #{item.order}</span>
                </div>
                {onDelete && (
                  <button className="delete-btn" onClick={() => onDelete(item.order)}>x</button>
                )}
              </li>
            );
          })}
        </ul>
      )}
      <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
        Total numbers: {items.length}
      </div>
    </div>
  );
}
