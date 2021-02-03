import React from 'react';

const EmailVerification = () => {
  return (
    <div className='text-center container full-width'>
      <div
        style={{
          margin: 'auto',
          marginTop: '100px',
          maxWidth: '769px',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          marginBottom: '100px',
        }}
      >
        <h2 className='text-center'>
          <span className='headline headline--teal'> ACCOUNT ACTIVATED </span>
        </h2>
        <p> Your email address has been verified.</p>
      </div>
    </div>
  );
};

export default EmailVerification;
