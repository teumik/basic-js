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
class DepthCalculator {

  calculateDepth(arr) {
    // return arr.reduce((acc, el) => {
    //   return acc = 1 + depthCalc.calculateDepth(el)
    // })


    // return 1 + arr.reduce((acc, el) => {
    //   if (Array.isArray(el)) {
    //     depthCalc.calculateDepth(el);
    //   } else {
    //     return 0;
    //   }
    // }, 0);
  }

}

module.exports = {
  DepthCalculator
};

const depthCalc = new DepthCalculator();
console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5]), 1)
console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]), 2)
console.log(depthCalc.calculateDepth([[[]]]), 3)
