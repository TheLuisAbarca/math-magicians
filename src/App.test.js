import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('Component to analize: App', () => {
  it('Basic Structure of WebPage renders correctly.', () => {
    const basicStructure = renderer.create(<App />);
    expect(basicStructure).toMatchSnapshot();
  });
});
