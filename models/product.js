const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

//Tabla Categoria junto con su configuracion de los campos a utilizar
const Product = sequelize.define(
  "Product",
  {
    name: DataTypes.STRING,
    url_image: DataTypes.STRING,
    price: DataTypes.NUMBER,
    discount: DataTypes.NUMBER,
    category: DataTypes.NUMBER,
  },
  {
    tableName: "product",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Product;
