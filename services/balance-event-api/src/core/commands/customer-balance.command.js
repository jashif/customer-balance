const { BalanceEvent } = require('../models/balance-event');
/**
 *
 * @param eventData {object}
 * @param eventData.market {string}
 * @param eventData.customerId {string}
 * @param eventData.reason {string}
 * @param eventData.reasonTime {number}
 * @param eventData.businessUnit {string}
 * @param eventData.type {string}
 * @param eventData.value {number}
 * @returns
 */
async function addBalanceCommand(eventData) {
  const event = await BalanceEvent.create(eventData);
  return event.toJSON();
}
module.exports = { addBalanceCommand };
