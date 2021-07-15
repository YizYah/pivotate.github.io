import React from 'react';
import renderer from 'react-test-renderer';
import EmailVerified from '../Email-Verified';

test('Snapshopt Test', () => {
  const component = renderer.create(<EmailVerified />);

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
