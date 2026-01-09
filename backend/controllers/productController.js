const asyncHandler = require("express-async-handler");
const Product = require("../models/Product");

// @desc    Add new product--------------------------------------------------------
// @route   POST /api/product/add
// @access  Private/Admin
const addProduct = asyncHandler(async (req, res) => {});

// @desc    Get all products--------------------------------------------------------
// @route   GET /api/product/
// @access  Public
const listProducts = asyncHandler(async (req, res) => {});

// @desc    Remove a product--------------------------------------------------------
// @route   DELETE /api/product/:id
// @access  Private/Admin
const removeProduct = asyncHandler(async (req, res) => {});

// @desc    Get product details--------------------------------------------------------
// @route   GET /api/product/:id
// @access  Public
const singleProduct = asyncHandler(async (req, res) => {});

module.exports = {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct,
};
