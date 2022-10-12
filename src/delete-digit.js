const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let str = String(n);
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let num = str.slice(0, i) + str.slice(i + 1);
    arr.push(num);
  }

  let result = Math.max(...arr);
  return result;
}

module.exports = {
  deleteDigit
};

deleteDigit(152)
