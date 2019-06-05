import expect from '../assertion/index.js';
export const sum = (a, b) => a + b;
export const subtract = (a, b) => a - b;

let result = sum(3, 7);
let expected = 10;

expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;

expect(result).toBe(expected);
