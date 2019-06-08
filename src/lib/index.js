export const sum = (a, b) => a + b
export const subtract = (a, b) => a - b
export const divide = (a, b) => a / b
export const subtractAsync = (a, b) =>
  new Promise(resolve => setTimeout(() => resolve(a - b), 1))
