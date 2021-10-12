const Product = require("./product");
const Category = require("./category");

//Establecer relacion entre las dos tablas, uno es a muchos (1:N)

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
