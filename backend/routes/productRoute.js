const express = require("express");
const {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct,
} = require("../controllers/productController");

const router = express.Router();

router.post("/add", addProduct);

router.delete("/:id", removeProduct);

router.get(":id", singleProduct);

router.get("/", listProducts);

module.exports = router;
