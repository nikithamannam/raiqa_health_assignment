import React, { useState } from 'react';

export default function Counter({ onAdd }: { onAdd: (value: number) => void; }) {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => Math.max(0, c - 1));
  const handleAdd = () => {
    if (count > 0) {
      onAdd(count);
      setCount(0);
    }
  };

  return (
    <div className="counter-container">
      <h2>Counter</h2>
        <div className="counter-controls">
        <button className="counter-btn" onClick={decrement} disabled={count === 0}>-</button>
        <div className="counter-display">{count}</div>
        <button className="counter-btn" onClick={increment}>+</button>
      </div>
      <button className="counter-btn add-btn" onClick={handleAdd} disabled={count === 0}>Add to List</button>
    </div>
  );
}
