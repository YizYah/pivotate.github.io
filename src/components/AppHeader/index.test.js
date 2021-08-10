import React from 'react';
import AppHeader from '.';
import { shallow } from 'enzyme';

jest.mock('@nostack/no-stack', () => ({
  withNoStack: (el) => el,
  NoStackConsumer: jest.fn((props) =>
    props.children({ loading: false, currentUser: null })
  ),
  LogoutButton: <input type='button' />,
}));

jest.mock('../RegistrationForm', () => () => <div />);
jest.mock('../LoginForm', () => () => <div />);

describe('Given AppHeader component', () => {
  it('SHOULD render the Navbar', () => {
    const output = shallow(<AppHeader noAction={false} />);

    expect(output.find('div.header__logo').length).toBe(1);

    expect(output).toMatchSnapshot();
  });
});
