const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const { log } = require('../../utils/logger');

dotenv.config();

function createSequilize() {
  const sequelize = new Sequelize({
    database: process.env.PG_DB_NAME,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: 5432,
    dialect: 'postgres',
  });
  sequelize
    .authenticate()
    .then(() => {
      log('info','Connection has been established successfully.');
    })
    .catch((error) => {
      log('error','Unable to connect to the database', error);
    });
  return sequelize;
}
module.exports = { createSequilize };
