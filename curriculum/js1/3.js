/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (x, i = 0, ans = '') => {
  if (x===i) return ans;
  return solution(x, i + 1, ans + 'hello');
};

module.exports = {
  solution,
};
