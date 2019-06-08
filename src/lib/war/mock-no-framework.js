export const fn = (impl = () => {}) => {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }

  mockFn.mock = {calls: []}
  mockFn.mockImplementation = newImpl => (impl = newImpl)

  return mockFn
}

// Replace the function with an empty mocked function
//So now if you try to access the previous module you have:
//1. The mocked function
//2. the mock implementation function
//3. the mock restore function
export const spyOn = (obj, prop) => {
  const originalValue = obj[prop]
  obj[prop] = fn()
  obj[prop].mockRestore = () => (obj[prop] = originalValue)
}
