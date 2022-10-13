const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = [];
  for (let i in names) {
    if (arr.includes(names[i])) {
      let n = 1;
      while (arr.includes(names[i] + `(${n})`)) {
        n++;
      }
      let w = names[i] + `(${n})`;
      arr.push(w);
      continue;
    }
    arr.push(names[i]);
  }
  return arr;
}

module.exports = {
  renameFiles
};
