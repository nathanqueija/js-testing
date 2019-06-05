import { expect, test } from '../assertion/index.js';
export const sum = (a, b) => a + b;
export const subtract = (a, b) => a - b;

test('sum adds numbers', () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('subtract subtracts numbers', () => {
  const result = subtract(7, 3);
  const expected = 1;
  expect(result).toBe(expected);
});
