const express = require("express");
const {
  addToCart,
  updateCart,
  getUserCart,
} = require("../controllers/cartController");

const router = express.Router();

router.get("/get", getUserCart);
router.post("/add", addToCart);
router.post("/update", updateCart);

module.exports = router;
