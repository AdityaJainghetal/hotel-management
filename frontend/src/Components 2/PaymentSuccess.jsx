// src/components/PaymentSuccess.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const PaymentSuccess = () => {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const sessionId = queryParams.get('session_id');

    if (sessionId) {
      // Call the backend /payment/success API
      axios
        .get(`http://localhost:3400/api/booking/payment/success?session_id=${sessionId}`)
        .then((response) => {
          console.log('Payment success processed:', response.data);
        //   alert('Booking confirmed!');
        })
        .catch((error) => {
          console.error('Error processing payment success:', error.response?.data || error.message);
          
        });
    }
  }, [location]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p>Your booking has been confirmed. Thank you for choosing us!</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;