const { Model, DataTypes } = require('sequelize');
class BalanceEvent extends Model {}

function initModel(sequelize) {
  BalanceEvent.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      time: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      market: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      customerId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reason: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reasonTime: {
        type: DataTypes.BIGINT, // Assuming reasonTime is a timestamp or similar
        allowNull: true,
      },
      reasonDate: {
        type: DataTypes.DATE, // Assuming reasonTime is a timestamp or similar
        allowNull: true,
      },
      businessUnit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM('INCREASED', 'DECREASED'),
        allowNull: false,
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'BalanceEvent',
    }
  );
}
module.exports = { BalanceEvent, initModel };
