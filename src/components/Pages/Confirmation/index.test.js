import React from 'react';
import renderer from 'react-test-renderer';
import Confirmation from '../Confirmation';

test('Snapshopt Test', () => {
  const component = renderer.create(<Confirmation />);

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
