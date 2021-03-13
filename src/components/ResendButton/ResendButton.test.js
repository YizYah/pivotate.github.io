import React from 'react';
import { shallow } from 'enzyme';
import ResendButton from './index';

describe('component', () => {
  it('renders without exploding', () => {
    expect(shallow(<ResendButton></ResendButton>).length).toEqual(1);
  });
});
