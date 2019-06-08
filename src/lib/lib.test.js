import {sum, subtract, subtractAsync, divide} from './index'
test('sum adds numbers', () => {
  const result = sum(3, 7)
  const expected = 10
  expect(result).toBe(expected)
})

test('subtract subtracts numbers', () => {
  const result = subtract(7, 3)
  const expected = 4
  expect(result).toBe(expected)
})

test('subtract subtracts numbers async', async () => {
  const result = await subtractAsync(7, 4)
  const expected = 3
  expect(result).toBe(expected)
})

test('divides divide two numbers', () => {
  const result = divide(10, 5)
  const expected = 2
  expect(result).toBe(expected)
})
