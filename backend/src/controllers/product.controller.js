const productService = require("../services/product.service");

exports.getProducts = (req, res) => {
  const data = productService.getAllProducts();
  res.json({ products: data });
};

exports.getProductDetail = (req, res) => {
  const id = parseInt(req.params.id);
  const product = productService.getProductById(id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json({ product });
};
