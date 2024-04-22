const { initModel } = require('../../core/models/balance-event');
const { log } = require('../../utils/logger');
const { createSequilize } = require('./sequelize');

const sequelize = createSequilize();

async function initializeDatabase() {
  try {
    initModel(sequelize);
    await sequelize.sync({ force: true });
    log('info', 'All models were synchronized successfully.');
  } catch (error) {
    log('error', 'Unable to connect to the database:', error);
  }
}
module.exports = { initializeDatabase };
