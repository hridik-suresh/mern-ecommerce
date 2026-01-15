const asyncHandler = require("express-async-handler");

//add  product to user Cart
const addToCart = asyncHandler(async (req, res) => {});

//update user Cart
const updateCart = asyncHandler(async (req, res) => {});

//get user Cart data
const getUserCart = asyncHandler(async (req, res) => {});

module.export = { addToCart, updateCart, getUserCart };
