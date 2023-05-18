const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('ecommercedb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports = {
    sequelize,
    DataTypes,
    Model
}
