export const expect = actual => ({
  toBe: expected => {
    if (actual !== expected)
      throw new Error(`${actual} is not equal to ${expected}`);
  },
  toEqual: () => {},
  toBeGreaterThan: expected => actual > expected
});

export const test = (title, callback) => {
  try {
    callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.error(`❌ ${title}`);
    console.error(error);
  }
};
