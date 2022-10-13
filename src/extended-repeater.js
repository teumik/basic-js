const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let main = '';
  let additional = '';
  let s = String(str);

  for (let opt in options) {
    options.opt = String(options.opt);
  }

  if (!options.separator || (options.separator === '')) {
    options.separator = '+';
  }
  if (!options.additionSeparator || (options.additionSeparator === '')) {
    options.additionSeparator = '|';
  }
  if (!options.repeatTimes || (options.repeatTimes === '')) {
    options.repeatTimes = 1;
  }
  if (options.addition && (!options.additionRepeatTimes || (options.additionRepeatTimes === ''))) {
    options.additionRepeatTimes = 1;
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    main += s;

    for (let k = 0; k < options.additionRepeatTimes; k++) {
      additional += options.addition;

      if (k < options.additionRepeatTimes - 1) {
        additional += options.additionSeparator;
      }
    }

    main += additional;

    additional = '';

    if (i < options.repeatTimes - 1) {
      main += options.separator;
    }
  }

  return main;
}

module.exports = {
  repeater
};
//
