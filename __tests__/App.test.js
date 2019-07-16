import React from 'react';
import renderer from 'react-test-renderer';
import App from '../client/src/components/App';

test('It renders App', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
