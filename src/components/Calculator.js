import React from 'react';
import { buttons } from './keypadCalculator';
import calculate from '../logic/calculate';
import './Calculator.css';

export const Calculator = () => {
  const [state, setState] = React.useState({});

  const pressButtonHandler = React.useCallback((event) => {
    setState((prev) => {
      try {
        const output = calculate(prev, event.target.value);
        return ({
          ...prev,
          ...output,
        });
      } catch (e) {
        return prev;
      }
    });
  }, []);

  const calculatorStructure = () => {
    const { total, next, operation } = state;
    const display = (total || '') + (operation || '') + (next || '');
    return (
      <div className="calculator">
        <div className="calculator-display">
          <div className="display-value">
            {display || '0'}
          </div>
        </div>
        <div className="calculator-keypad">
          {buttons.map((button) => {
            const { text, className } = button;
            return (
              <button
                value={text}
                key={text}
                type="button"
                className={`keypad-button ${className} || ''`}
                onClick={pressButtonHandler}
              >
                {text}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const calculator = calculatorStructure();
  return calculator;
};

const CalculatorRender = () => (
  <section className="calculator-section">
    <h2 className="section-title">Let&apos;s do some math</h2>
    <div className="calculator-content">
      <Calculator />
    </div>
  </section>
);

export default CalculatorRender;
