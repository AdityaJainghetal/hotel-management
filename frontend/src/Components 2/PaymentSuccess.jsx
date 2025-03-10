import React from 'react';

const PaymentSuccess = () => {
    return (
        <div style={{backgroundColor: '#C6F7D0', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #3E8E41', color: '#3E8E41'}} role="alert">
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{marginRight: '1rem'}}>
                    <svg style={{width: '1.5rem', height: '1.5rem', fill: '#3E8E41'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM9.5 11V5.5h2v5.5H9.5zm4.5 0V5.5h2v5.5h-2z"/></svg>
                </div>
                <div>
                    <p style={{fontWeight: 'bold'}}>Payment Success</p>
                    <p style={{fontSize: '0.875rem'}}>Your payment has been successful!</p>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
