/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: general, comp: SendCodeForm

// ns__custom_start unit: general, comp: SendCodeForm, loc: beforeImports

// ns__custom_end unit: general, comp: SendCodeForm, loc: beforeImports

import React, { useState } from 'react';

const SendCodeForm = ({ onSubmit, onCancel, error, disabled }) => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    e.preventDefault();

    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email);
    if (error.length > 0) {
      alert(error);
    } else {
      alert('Success: Please check your email');
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div hidden>
        <h3>Reset Password</h3>
        <div>
          Your Username/Email:
          <input type='text' onChange={handleChange} disabled={disabled} />
        </div>
      </div>
      <div>
        <button className='button button--rounded' type='submit'>
          SEND AGAIN
        </button>
        {/* <button type='button' onClick={handleCancel} disabled={disabled}>
          Cancel
        </button> */}
      </div>
      {/* {error && <div>{error}</div>} */}
    </form>
  );
};

export default SendCodeForm;
