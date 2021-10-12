const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
//Tabla Categoria junto con su configuracion de los campos a utilizar
const Category = sequelize.define(
  "Category",
  {
    name: DataTypes.STRING,
  },
  {
    tableName: "category",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Category;
