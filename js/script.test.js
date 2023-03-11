const { sumCubes } = require('./script');

test('should return sum values', () => {
  expect(sumCubes(3)).toBe(36);
});
