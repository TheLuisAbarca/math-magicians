import operate from './operate';

describe('Operations not Valid to Operate.', () => {
  test('Zero Division is not supported by big.js', () => {
    const a = 9;
    const b = 0;
    const zeroDivision = () => operate(a, b, '÷');
    expect(() => zeroDivision()).toThrow('[big.js] Division by zero');
  });

  test('Using "*" character instead of "x" for a multiplication is not supported', () => {
    const a = 3;
    const b = 1;
    const notSupportedOp = () => operate(a, b, '*');
    expect(() => notSupportedOp()).toThrow("Unknown operation '*'");
  });

  test('Using "/" character instead of "÷" for a division is not supported', () => {
    const a = 6;
    const b = 2;
    const notSupportedOp = () => operate(a, b, '/');
    expect(() => notSupportedOp()).toThrow("Unknown operation '/'");
  });
});

describe('Basic Operations Supported', () => {
  test('3 + 3 = 6', () => {
    const a = 3;
    const b = 3;
    const resp = operate(a, b, '+');
    expect(resp).toBe('6');
  });

  test('8 - 2 = 6', () => {
    const a = 8;
    const b = 2;
    const resp = operate(a, b, '-');
    expect(resp).toBe('6');
  });

  test('-9 + 9 = 0', () => {
    const a = -9;
    const b = 9;
    const resp = operate(a, b, '+');
    expect(resp).toBe('0');
  });

  test('9 x 4 = 36', () => {
    const a = 9;
    const b = 4;
    const resp = operate(a, b, 'x');
    expect(resp).toBe('36');
  });

  test('9 ÷ 3 = 3', () => {
    const a = 9;
    const b = 3;
    const resp = operate(a, b, '÷');
    expect(resp).toBe('3');
  });

  test('9 % 3 = 0', () => {
    const a = 9;
    const b = 3;
    const resp = operate(a, b, '%');
    expect(resp).toBe('0');
  });

  test('9 % 2 = 1', () => {
    const a = 9;
    const b = 2;
    const resp = operate(a, b, '%');
    expect(resp).toBe('1');
  });
});