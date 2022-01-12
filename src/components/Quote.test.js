import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

describe('App Component: Quote', () => {
    test('Verify Component is correctly rendered.', () => {
      const quoteComponent = renderer.create(<Quote />).toJSON();
      expect(quoteComponent).toMatchSnapshot();
    });
});