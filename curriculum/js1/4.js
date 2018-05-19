/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (n, string, result='') => {
  if (n === 0) return result;
  result = result + string;
  return solution(n-1, string, result);
};

module.exports = {
  solution,
};
