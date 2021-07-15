import React from 'react';
import renderer from 'react-test-renderer';
import PrivacyPolicy from '../Privacy-Policy';

test('Snapshopt Test', () => {
  const component = renderer.create(<PrivacyPolicy />);

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
