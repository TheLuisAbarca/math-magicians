import React from 'react';
import { buttons } from './keypadCalculator';
import './Calculator.css';

class Calculator extends React.Component {
  calculatorStructure = () => (
    <div className="calculator">
      <div className="calculator-display">
        <div className="display-value">0</div>
      </div>
      <div className="calculator-keypad">
        {buttons.map((button) => {
          const { text, className } = button;
          return (
            <button
              type="button"
              key={text}
              className={`keypad-button ${className} || ''`}
            >
              {text}
            </button>
          );
        })}
      </div>
    </div>
  )

  render() {
    return (
      <div className="calculator-content">
        <this.calculatorStructure />
      </div>
    );
  }
}

export default Calculator;
