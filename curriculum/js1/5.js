/**
 * Call X - takes in a number X and a function,
 *    Call the function X number of times
 * @param {number} a
 * @param {function} b
 */

const solution = ( x, fn, i = 0 ) => {
  if (x === i) return;
  fn();
  i = i + 1;
  return solution(x, fn, i);
};

module.exports = {
  solution,
};
