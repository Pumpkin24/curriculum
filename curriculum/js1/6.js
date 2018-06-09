/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (x, counter = 2, sum = 0) => {
  // base case: if x equals the counter, return the sum (of all divisors)
  // if x can be evenly divided by counter, add to sum
  // increment counter
  // recurse by calling this function
  //

  if (x === counter) return sum;
  if (x % counter === 0) sum = sum + counter;
  counter = counter + 1;
  return solution(x, counter, sum);
};

module.exports = {
  solution,
};
