const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
// const chainMaker = {
//   getLength() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   addLink(/* value */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   removeLink(/* position */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   reverseChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   finishChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// };
const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (!this.chain) this.chain = [];
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!this.chain[position - 1]) {
      delete this.chain;
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    if (this.chain) this.chain.reverse();
    return this;
  },
  finishChain() {
    const finish = this.chain.join('~~');
    delete this.chain;
    return finish;
  }
};

module.exports = {
  chainMaker
};
