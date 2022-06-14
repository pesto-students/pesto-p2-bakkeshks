const mathOperations = require('./mathOperations');

test('adds 1 + 4 to equal 5', () => {
  expect(mathOperations.sum(1, 4)).toBe(5);
});
test('diff 4 - 2 return 2 ', () => {
  expect(mathOperations.diff(4, 2)).toBe(2);
});
test('multiply 2 * 3 require 6', () => {
  expect(mathOperations.product(2, 3)).toBe(6);
});