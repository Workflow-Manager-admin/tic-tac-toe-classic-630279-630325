import React from 'react';

// PUBLIC_INTERFACE
const Square = ({ value, onClick }) => {
  return (
    <button 
      className={`square ${value?.toLowerCase()}`} 
      onClick={onClick}
      aria-label={value ? `Square with ${value}` : 'Empty square'}
    >
      {value}
    </button>
  );
};

export default Square;
