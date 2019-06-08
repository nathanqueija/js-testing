import {thumbWar} from './index'
import * as utils from './utils'

jest.mock('./utils', () => {
  return {
    getWinner: jest.fn((p1, p2) => p1),
  }
})

test('returns winner with mock', () => {
  const winner = thumbWar('Nathan', 'Fernanda')
  expect(winner).toBe('Nathan')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Nathan', 'Fernanda'],
    ['Nathan', 'Fernanda'],
  ])
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  expect(utils.getWinner).toHaveBeenCalledWith('Nathan', 'Fernanda')
  utils.getWinner.mockReset()
})

test('returns winner with spyOn', () => {
  jest.spyOn(utils, 'getWinner')
  utils.getWinner.mockImplementation((p1, p2) => p1)

  const winner = thumbWar('Nathan', 'Fernanda')
  expect(winner).toBe('Nathan')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Nathan', 'Fernanda'],
    ['Nathan', 'Fernanda'],
  ])
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  expect(utils.getWinner).toHaveBeenCalledWith('Nathan', 'Fernanda')
  utils.getWinner.mockRestore()
})
