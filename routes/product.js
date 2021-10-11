const express = require("express");
const router = express.Router();
const { getProducts, searchProducts } = require("../controllers/product");

router.get("/api/products", getProducts);
router.get("/api/products/:products", searchProducts);
module.exports = router;
