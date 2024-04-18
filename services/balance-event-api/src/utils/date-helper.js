/**
 *
 * @param monthNumber {string}
 * @returns {string}
 */
function getMonthName(monthNumber) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return monthNames[monthNumber - 1];
}

module.exports = { getMonthName };
