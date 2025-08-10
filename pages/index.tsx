import React, { useState, useEffect } from 'react';
import Counter from '../components/Counter';
import ListView from '../components/ListView';
import Toast from '../components/Toast';

export default function Home() {
  const [items, setItems] = useState<{ value: number; order: number }[]>([]);
  const [ascending, setAscending] = useState<boolean>(true);
  const [nextOrderId, setNextOrderId] = useState(1);
  const [message, setMessage] = useState<string>('');

  // Load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem('raiqa_items');
      if (raw) {
        const loadedItems = JSON.parse(raw);
        setItems(loadedItems);
        if (loadedItems.length > 0) {
          const maxOrder = Math.max(...loadedItems.map((item: { order: number; }) => item.order));
          setNextOrderId(maxOrder + 1);
        }
      }
    } catch {}
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    try {
      localStorage.setItem('raiqa_items', JSON.stringify(items));
    } catch {}
  }, [items]);

  const handleAdd = (value: number) => {
    if (items.some(item => item.value === value)) {
      setMessage('The number already exists in the list.');
      setTimeout(() => setMessage(''), 3000);
      return;
    }
    setMessage(''); // Clear message on successful add
    setItems(prev => [...prev, { value, order: nextOrderId }]);
    setNextOrderId(prev => prev + 1);
  };

  const handleReset = () => {
    setItems([]);
    setNextOrderId(1);
    localStorage.removeItem('raiqa_items'); // ensure list clears from storage
  };

  const handleDelete = (order: number) => {
    setItems(prev => prev.filter(item => item.order !== order));
  };

  const handleToggleSort = () => {
    const sortedItems = [...items].sort((a, b) => {
      return ascending ? a.value - b.value : b.value - a.value;
    });
    setItems(sortedItems);
    setAscending(!ascending);
  };

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', padding: '0 16px' }}>
      <h1 style={{ textAlign: 'center' }}>Counter & List App</h1>
      <section style={{ marginTop: 24 }}>
        <Counter onAdd={handleAdd} />
      </section>
      <section style={{ marginTop: 24 }}>
        <ListView
          items={items}
          ascending={ascending}
          onToggleSort={handleToggleSort}
          onReset={handleReset}
          onDelete={handleDelete}
        />
      </section>
      <Toast message={message} />
    </main>
  );
}
