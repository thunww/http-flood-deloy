const router = require("express").Router();
const productController = require("../controllers/product.controller");

// GET /api/products
router.get("/", productController.getProducts);

// GET /api/products/:id
router.get("/:id", productController.getProductDetail);

module.exports = router;
