const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
// class DepthCalculator {
//   calculateDepth(/* arr */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }
class DepthCalculator {
  calculateDepth(arr) {
    this.count = 0;
    if (Array.isArray(arr)) {
      for (let el of arr) {
        this.count = Math.max(this.count, this.calculateDepth(el));
      }
      this.count++;
    }
    return this.count;
  }
}

module.exports = {
  DepthCalculator
};
