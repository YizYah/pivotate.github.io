import { shallow } from 'enzyme';
import React from 'react';
import AppFooter from '.';

describe('Footer component', () => {
  beforeEach(() => {
    // jest
    //   .spyOn(global.localStorage, 'getItem')
    //   .mockImplementation((key) => store[key]);
    // jest
    //   .spyOn(global.localStorage, 'setItem')
    //   .mockImplementation((key, value) => {
    //     store[key] = value.toString();
    //   });
  });

  describe('AND there is no accessToken set', () => {
    beforeEach(() => {
      // store.
    });
    it('SHOULD render the footer with signup node', () => {
      const output = shallow(<AppFooter />);
      expect(output).toMatchSnapshot();
      expect(output.find('div.footer__sign-up').length).toBe(1);
    });
  });
});
