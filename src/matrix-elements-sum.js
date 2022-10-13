const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
// function getMatrixElementsSum(/* matrix */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
function getMatrixElementsSum(matrix) {
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const el = matrix[i][j];
      if (el === 0) {
        matrix[i + 1][j] = 0;
      }
    }
  }

  const sum = matrix.flat().reduce((acc, el) => acc += el);
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
