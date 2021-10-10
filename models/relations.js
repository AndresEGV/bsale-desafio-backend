const Product = require("./product");
const Category = require("./category");

//Relacion de tablas 1 es a N

Category.hasMany(Product, {
  foreignKey: "category",
});

Product.belongsTo(Category, {
  sourceKey: "id",
  foreignKey: "category",
});

module.exports = {
  Category,
  Product,
};
