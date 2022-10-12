const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const input = new Date(date);

  try {
    if (date.getTime()) {
    }
  } catch (err) {
    if (!date) {
      return 'Unable to determine the time of year!';
    }
    throw new Error("Invalid date!");
  }

  const months = ['winter', 'spring', 'summer', 'autumn'];
  const l = months.length;

  const month = input.getMonth() + 1;
  const index = Math.floor((month * l) / 12) % l

  return months.at(index - 4);
}

module.exports = {
  getSeason
};
