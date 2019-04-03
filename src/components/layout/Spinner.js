import React from 'react';

const Spinner = () => {
  return (
    <div
      className="spinner-border text-primary"
      role="status"
      style={{ width: '100px', height: '100px' }}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
