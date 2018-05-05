/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (x, i = 0, ans = '') => {
  if (x===i) return ans;
  ans = ans + 'hello';
  i = i + 1;

  return solution(x, i, ans);
};

module.exports = {
  solution,
};
