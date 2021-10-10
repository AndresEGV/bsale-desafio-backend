const express = require("express");
const router = express.Router();
const { getProducts } = require("../controllers/product");

router.get("/api/products", getProducts);

module.exports = router;
