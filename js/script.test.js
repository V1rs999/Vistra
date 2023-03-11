const { sumCubes, n, nativeNull } = require('./script');
describe('Function should return', () => {
  test('should return sum values', () => {
    expect(sumCubes(3)).toBe(36);
    expect(sumCubes(3)).not.toBeUndefined();
    expect(sumCubes(3)).not.toBeNull();
    expect(sumCubes(3)).not.toBeFalsy();
    expect(sumCubes(3)).toBeTruthy();
  });
});

describe('Native null function', () => {
  test('Native null should return null', () => {
    expect(nativeNull()).toBe();
  });
});
const { sumCubes } = require('./script');

test('should return sum values', () => {
  expect(sumCubes(3)).toBe(36);
});
