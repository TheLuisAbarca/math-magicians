import React from 'react';
import { buttons } from './keypadCalculator';
import calculate from '../logic/calculate';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
  }

  pressButtonHandler = (event) => {
    this.setState((prev) => {
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
  };

  calculatorStructure = () => {
    const { total, next, operation } = this.state;
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
                onClick={this.pressButtonHandler}
              >
                {text}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="calculator-content">
        <this.calculatorStructure />
      </div>
    );
  }
}

export default Calculator;
