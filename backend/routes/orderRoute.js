const express = require("express");
const {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
} = require("../controllers/orderController");
const adminAuth = require("../middleware/adminAuth");
const authUser = require("../middleware/auth");

const router = express.Router();

//Admin Features
router.post("/list", adminAuth, allOrders);
router.post("/status", adminAuth, updateStatus);

//Payment Features
router.post("/place", authUser, placeOrder);
router.post("/stripe", authUser, placeOrderStripe);
router.post("/razorpay", authUser, placeOrderRazorpay);

//User Features
router.post("/userorders", authUser, userOrders);

//verify payment
router.post("/verifyStripe", authUser, verifyStripe);

module.exports = router;
