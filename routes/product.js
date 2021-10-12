const express = require("express");
const router = express.Router();
const {
  getProducts,
  searchProducts,
  getProductsByCategory,
} = require("../controllers/product");

router.get("/api/products", getProducts);
router.get("/api/products/:products", searchProducts);
router.get("/api/categories/:category", getProductsByCategory);
module.exports = router;
