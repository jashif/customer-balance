const { BalanceEvent } = require('../models/balance-event');
const { getMonthName } = require('../../utils/date-helper');
/**
 * Get balances
 * @param request {object}
 * @param request.retailUnitCode {string}
 * @param request.customerId {string}
 * @param request.activity {string}
 * @param request.period {string}
 * @returns {Promise<[]>}
 */
async function getBalances(request) {
  const { retailUnitCode, customerId, activity, period } = request;
  const monthlyBalances = [];
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const endMonth = parseInt(period, 10) === currentYear ? currentMonth : 12;
  const snapshot = await BalanceEvent.findAll({
    where: {
      reason: activity,
      market: retailUnitCode,
      customerId,
    },
  });
  if (snapshot.length === 0) {
    return [];
  }
  for (let month = 1; month <= endMonth; month++) {
    const startOfMonth = new Date(period, month - 1, 1).getTime();
    const endOfMonth = new Date(period, month, 0, 24, 59, 59).getTime();
    let adjustments = 0;
    let openingBalance = 0;
    let closingBalance = 0;

    snapshot.forEach((doc) => {
      const event = doc.toJSON();
      if (event.reasonTime < startOfMonth) {
        openingBalance += event.type === 'INCREASED' ? event.value : -event.value;
        adjustments += event.type === 'INCREASED' ? event.value : -event.value;
      }
      if (event.reasonTime >= startOfMonth && event.reasonTime <= endOfMonth) {
        closingBalance += event.type === 'INCREASED' ? event.value : -event.value;
      }
    });

    closingBalance += openingBalance;

    monthlyBalances.push({
      month: getMonthName(month),
      adjustments,
      openingBalance,
      closingBalance,
    });
  }

  return monthlyBalances;
}

async function getAllEvents() {
  const events = await BalanceEvent.findAll({
    order: [['market', 'ASC']],
  });
  return events.map((event) => event.toJSON());
}

module.exports = { getBalances, getAllEvents };
