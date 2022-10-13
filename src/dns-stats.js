const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let dns = {};

  for (let el of domains) {
    let arr = el.split('.');
    let n = 1;
    let prop = '';
    for (let i = arr.length - 1; i >= 0; i--) {
      let p = '.' + arr[i];
      prop += p;
      if (dns[prop]) {
        dns[prop]++;
        continue;
      }
      dns[prop] = n;
    }
  }

  return dns;
}

module.exports = {
  getDNSStats
};
