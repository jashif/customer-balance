const { addBalanceCommand } = require('../../core/commands/customer-balance.command');
const { getAllEvents, getBalances } = require('../../core/queries/get-balance');
const moment = require('moment');
/**
 * @param req {object}
 * @param req.body {object}
 * @param req.body.reason {string}
 * @param req.body.reasonTime {string}
 * @param req.body.value {number}
 * @param req.body.type {string}
 * @param req.body.businessUnit {string}
 * @param req.params {object}
 * @param req.params.retailUnitCode {string}
 * @param req.params.customerId {string}
 * @param res {object}
 */
async function addBalanceEvent(req, res) {
  const payload = req.body;
  payload.market = req.params.retailUnitCode;
  payload.customerId = req.params.customerId;
  payload.reasonDate = moment(req.body.reasonTime).format('YYYY-MM-DD HH:mm:ss');
  const event = await addBalanceCommand(payload);
  res.json({
    ...event,
  });
}
/**
 * @param req {object}
 * @param req.params {object}
 * @param req.params.retailUnitCode {string}
 * @param req.params.customerId {string}
 * @param req.params.activity {string}
 * @param req.params.period {string}
 * @param res {Response}
 */
async function getBalancesByPeriod(req, res) {
  const { retailUnitCode, customerId, activity, period } = req.params;
  const balances = await getBalances({ retailUnitCode, customerId, activity, period });
  return res.json({
    balances,
    customerId,
  });
}

async function getAll(req, res) {
  const allEvents = await getAllEvents();
  return res.json({ allEvents });
}

module.exports = { addBalanceEvent, getBalancesByPeriod, getAll };
