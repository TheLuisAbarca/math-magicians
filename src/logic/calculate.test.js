import calculate from './calculate';

describe('Basic Operations', () => {
  test('Sum -> 3 + 3 = 6', () => {
    let data = {};
    data = { ...data, ...calculate(data, '3') };
    data = { ...data, ...calculate(data, '+') };
    data = { ...data, ...calculate(data, '3') };
    data = { ...data, ...calculate(data, '=') };
    expect(data).toEqual({
      total: '6',
      next: null,
      operation: null,
    });
  });

  test('Substraction -> 8 - 2 = 6', () => {
    let data = {};
    data = { ...data, ...calculate(data, '8') };
    data = { ...data, ...calculate(data, '-') };
    data = { ...data, ...calculate(data, '2') };
    data = { ...data, ...calculate(data, '=') };
    expect(data).toEqual({
      total: '6',
      next: null,
      operation: null,
    });
  });

  test('Signs Operation -> -9 + 9 = 0', () => {
    let data = {};
    data = { ...data, ...calculate(data, '9') };
    data = { ...data, ...calculate(data, '+/-') };
    data = { ...data, ...calculate(data, '+') };
    data = { ...data, ...calculate(data, '9') };
    data = { ...data, ...calculate(data, '=') };
    expect(data).toEqual({
      total: '0',
      next: null,
      operation: null,
    });
  });

  test('Multiplication -> 9 x 4 = 36', () => {
    let data = {};
    data = { ...data, ...calculate(data, '9') };
    data = { ...data, ...calculate(data, 'x') };
    data = { ...data, ...calculate(data, '4') };
    data = { ...data, ...calculate(data, '=') };
    expect(data).toEqual({
      total: '36',
      next: null,
      operation: null,
    });
  });

  test('Multiplication with decimals -> 9.1 x 2 = 18.2', () => {
    let data = {};
    data = { ...data, ...calculate(data, '9') };
    data = { ...data, ...calculate(data, '.') };
    data = { ...data, ...calculate(data, '1') };
    data = { ...data, ...calculate(data, 'x') };
    data = { ...data, ...calculate(data, '2') };
    data = { ...data, ...calculate(data, '=') };
    expect(data).toEqual({
      total: '18.2',
      next: null,
      operation: null,
    });
  });

  test('Division -> 9 ÷ 3 = 3', () => {
    let data = {};
    data = { ...data, ...calculate(data, '9') };
    data = { ...data, ...calculate(data, '÷') };
    data = { ...data, ...calculate(data, '3') };
    data = { ...data, ...calculate(data, '=') };
    expect(data).toEqual({
      total: '3',
      next: null,
      operation: null,
    });
  });

  test('Mod equals 0 -> 9 % 3 = 0', () => {
    let data = {};
    data = { ...data, ...calculate(data, '9') };
    data = { ...data, ...calculate(data, '%') };
    data = { ...data, ...calculate(data, '3') };
    data = { ...data, ...calculate(data, '=') };
    expect(data).toEqual({
      total: '0',
      next: null,
      operation: null,
    });
  });

  test('Mod equals 1 -> 9 % 2 = 1', () => {
    let data = {};
    data = { ...data, ...calculate(data, '9') };
    data = { ...data, ...calculate(data, '%') };
    data = { ...data, ...calculate(data, '2') };
    data = { ...data, ...calculate(data, '=') };
    expect(data).toEqual({
      total: '1',
      next: null,
      operation: null,
    });
  });

  test('Operation invalid with just one operand.', () => {
    const invalidBinaryOperation = () => {
      let data = {};
      data = { ...data, ...calculate(data, '+') };
      data = { ...data, ...calculate(data, '2') };
      data = { ...data, ...calculate(data, '=') };
      return data;
    };
    expect(() => invalidBinaryOperation()).toThrow('one.plus is not a function');
  });
});