const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(array) {

  let newArr = [];

  if (!Array.isArray(array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let o = {
    don: '--double-next',
    din: '--discard-next',
    dop: '--double-prev',
    dip: '--discard-prev',
  }

  for (let i = 0; i < array.length; i++) {

    if (array[i] !== o.don && array[i] !== o.din && array[i] !== o.dop && array[i] !== o.dip) {
      newArr.push(array[i]);
      continue;
    }

    if (array[i] === o.don) {
      if (!array[i + 1]) {
        continue;
      }

      newArr.push(array[i + 1]);
    }

    if (array[i] === o.din) {
      if (!array[i + 1]) {
        continue;
      }

      i++;
    }

    if (array[i] === o.dop) {
      if (!array[i - 1]) {
        continue;
      }

      if (newArr.at(-1) === array[i - 1]) {
        newArr.push(array[i - 1]);
      }
    }

    if (array[i] === o.dip) {
      if (!array[i - 1]) {
        continue;
      }

      if (newArr.at(-1) === array[i - 1]) {
        newArr.pop();
      }
    }
  }

  return newArr;
}

module.exports = {
  transform
};
//
