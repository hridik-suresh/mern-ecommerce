const express = require("express");
const upload = require("../middleware/multer");
const {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct,
} = require("../controllers/productController");
const adminAuth = require("../middleware/adminAuth");

const router = express.Router();

router.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);

router.delete("/:id", adminAuth, removeProduct);

router.get("/:id", singleProduct);

router.get("/", listProducts);

module.exports = router;
