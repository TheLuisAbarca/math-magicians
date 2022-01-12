import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('App Component: Home', () => {
  test('Verify Component is correctly rendered.', () => {
    const homeComponent = renderer.create(<Home />).toJSON();
    expect(homeComponent).toMatchSnapshot();
  });
});
