//Place order using COD method
const placeOrder = async (req, res) => {};

//Place order using Stripe method
const placeOrderStripe = async (req, res) => {};

//Place order using RazorPay method
const placeOrderRazorpay = async (req, res) => {};

//All orders data for admin panel
const allOrders = async (req, res) => {};

//User order datya for frontend
const userOrders = async (req, res) => {};

//Update order status from admin panel
const updateStatus = async (req, res) => {};

module.exports = {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
