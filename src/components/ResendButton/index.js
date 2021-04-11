/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: general, comp: ForgotPasswordButton

// ns__custom_start unit: general, comp: ForgotPasswordButton, loc: beforeImports

// ns__custom_end unit: general, comp: ForgotPasswordButton, loc: beforeImports
import { PLATFORM_ID } from '../../config';
import React, { useState } from 'react';
import { graphql } from '@apollo/react-hoc';
import compose from '@shopify/react-compose';
import styled from 'styled-components';
import {
  withNoStack,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  RESEND_CONFIRMATION,
} from '@nostack/no-stack';

import SendCodeForm from './SendCodeForm';
import ResetPasswordForm from './ResetPasswordForm';

const Button = styled.button`
  border: none;
  text-decoration: underline;
  background: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

const ResendButton = ({
  resendConfirmCode,
  resetPassword,
  platformId,
  ...props
}) => {
  const [formVisible, setFormVisible] = useState(false);
  const [userNameOrEmail, setUsernameOrEmail] = useState('');
  const [passwordReset, setPasswordReset] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const showForm = () => setFormVisible(true);

  const hideForm = () => {
    setError('');
    setSubmitting(false);
    setPasswordReset(false);
    setFormVisible(false);
    setUsernameOrEmail('');
  };

  const handleEmailSubmit = async (userNameOrEmail) => {
    setError('');
    setSubmitting(true);

    try {
      await resendConfirmCode({
        variables: {
          userNameOrEmail: props.initialValues,
          stackId: PLATFORM_ID,
        },
      });

      setUsernameOrEmail(userNameOrEmail);
    } catch (e) {
      setError('Something went wrong. Please try again.');
    }

    setSubmitting(false);
  };

  const handlePasswordSubmit = async (password, code) => {
    setError('');
    setSubmitting(true);

    try {
      await resetPassword({
        variables: {
          userNameOrEmail,
          password,
          code,
          stackId: platformId,
        },
      });

      setPasswordReset(true);
    } catch (e) {
      setError('Something went wrong. Please try again.');
    }

    setSubmitting(false);
  };

  if (formVisible) {
    return (
      <Button type='button' onClick={showForm}>
        Forgot Password?
      </Button>
    );
  }

  if (!userNameOrEmail) {
    return (
      <SendCodeForm
        onSubmit={handleEmailSubmit}
        onCancel={hideForm}
        disabled={submitting}
        error={error}
      />
    );
  }

  return (
    <p>
      Your password has been reset. You may now login.
      <Button type='button' onClick={hideForm}>
        Ok.
      </Button>
    </p>
  );
};

export default compose(
  graphql(RESEND_CONFIRMATION, { name: 'resendConfirmCode' }),
  // graphql(RESET_PASSWORD, { name: 'resetPassword' }),
  withNoStack
)(ResendButton);
