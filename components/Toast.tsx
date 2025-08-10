import React from 'react';

type Props = {
  message: string;
};

export default function Toast({ message }: Props) {
  if (!message) return null;

  return (
    <div className="toast-container">
      <p>⚠️ {message}</p>
    </div>
  );
}
