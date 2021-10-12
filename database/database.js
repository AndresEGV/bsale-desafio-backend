const { Sequelize } = require("sequelize");
const {
  db: { database, username, password, host, dialect },
} = require("./config");
//Configuracion de sequelize
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  logging: false,
});

module.exports = sequelize;
