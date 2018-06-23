require('dotenv').config();

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const sequelize = new Sequelize('users', 'root', '', {
  host: 'localhost' || '127.0.0.1',
  dialect: 'mysql',
  operatorsAliases: Op,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions: {
    decimalNumbers: true
  },
  logging: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;