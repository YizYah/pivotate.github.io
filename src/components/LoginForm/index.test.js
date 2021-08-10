import { shallow } from 'enzyme';
import 'whatwg-fetch';
import React from 'react';
import LoginForm from '.';
jest.mock('@nostack/no-stack', () => ({
  withNoStack: (el) => el,
}));

jest.mock('../ForgotPasswordButton', () => () => <input type='submit' />);
let login, loading, currentUser, open, onClose;

describe('LoginForm component', () => {
  describe('AND NO user provided and NOT loading', () => {
    beforeEach(() => {
      login = jest.fn();
      loading = false;
      currentUser = null;
      open = true;
      onClose = jest.fn();
    });
    it('SHOULD render login', () => {
      const output = shallow(
        <LoginForm
          login={login}
          loading={loading}
          currentUser={currentUser}
          open={open}
          onClose={onClose}
        />
      );

      expect(output).toMatchSnapshot();
    });

    it('SHOULD submit form', () => {
      const output = shallow(
        <LoginForm
          login={login}
          loading={loading}
          currentUser={currentUser}
          open={open}
          onClose={onClose}
        />
      );
    });
  });

  describe('AND  user is provided OR it is loading', () => {
    beforeEach(() => {
      login = jest.fn();
      loading = false;
      currentUser = {};
      open = true;
      onClose = jest.fn();
    });

    it('SHOULD NOT render login', () => {
      const output = shallow(
        <LoginForm
          login={login}
          loading={loading}
          currentUser={currentUser}
          open={open}
          onClose={onClose}
        />
      );

      expect(output).toMatchSnapshot();
    });
  });
});
