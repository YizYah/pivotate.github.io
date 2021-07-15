import React from 'react';
import renderer from 'react-test-renderer';
import Schedule from '../Schedule';

test('Snapshopt Test', () => {
  const component = renderer.create(<Schedule />);

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
