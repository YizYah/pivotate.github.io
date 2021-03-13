import React from 'react';
import renderer from 'react-test-renderer';
import Pricing from '../Pricing';

test('Snapshopt Test', () => {
  const component = renderer.create(<Pricing />);

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
