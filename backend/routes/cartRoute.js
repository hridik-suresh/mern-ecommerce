const express = require("express");
const {
  addToCart,
  updateCart,
  getUserCart,
} = require("../controllers/cartController");
const authUser = require("../middleware/auth.js");

const router = express.Router();

router.get("/get", authUser, getUserCart);
router.post("/add", authUser, addToCart);
router.post("/update", authUser, updateCart);

module.exports = router;
