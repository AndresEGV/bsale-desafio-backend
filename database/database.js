const { Sequelize } = require("sequelize");
const {
  db: { database, username, password, host, dialect },
} = require("./config");

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  logging: false,
});

module.exports = sequelize;
