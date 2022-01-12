import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import CalculatorRender, { Calculator } from './Calculator';

describe('App Component: Calculator', () => {
  test('Verify Component is correctly rendered.', () => {
    const calculatorComponent = renderer.create(<CalculatorRender />);
    expect(calculatorComponent).toMatchSnapshot();
  });

  test('Verify Calculator is correctly displaying results with operation (3.3 x 3 = 9.9)', () => {
    const { getByText } = render(<Calculator />);
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('x'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    getByText('9.9');
  });
});
