import React from 'react';

function Base({ onSubmit, children }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (onSubmit) onSubmit(e);
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '100%',
      }}
    >
      {children}
    </form>
  );
}

export default Base;