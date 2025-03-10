import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentFailure = () => {
  const navigate = useNavigate();
  return (
    <div style={{ margin: 'auto', padding: '1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Payment Failed</h1>
      <p style={{ color: 'red' }}>Payment failed or cancelled. Please try again later.</p>
      <button
        style={{
          marginTop: '1rem',
          backgroundColor: '#4f46e5',
          color: 'white',
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/')}
      >
        Go back to homepage
      </button>
    </div>
  );
};

export default PaymentFailure;
