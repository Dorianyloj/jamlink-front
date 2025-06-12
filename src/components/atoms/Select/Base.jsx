import React from 'react';

function Base({ value, onChange, options, theme, placeholder }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{
        width: '100%',
        padding: '0.75rem',
        borderRadius: '8px',
        backgroundColor: theme.colors.current.surface,
        color: theme.colors.current.text,
        border: `1px solid ${theme.colors.current.border}`,
        fontSize: '1rem',
      }}
    >
      {placeholder && (  
        <option value="" disabled={false}>  
          {placeholder}  
        </option>  
      )} 
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Base;