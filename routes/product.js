const express = require("express");
const router = express.Router();
const {
  getProducts,
  searchProducts,
  getProductsByCategory,
} = require("../controllers/product");

//Rutas de la API, que contienen las funciones importadas desde el controlador, para consummirlas desde la palicación cliente
router.get("/api/products", getProducts);
router.get("/api/products/:products", searchProducts);
router.get("/api/categories/:category", getProductsByCategory);
module.exports = router;
