const asyncHandler = require("express-async-handler");
const cloudinary = require("cloudinary").v2;
const Product = require("../models/Product");

// @desc    Add new product--------------------------------------------------------
// @route   POST /api/product/add
// @access  Private/Admin
const addProduct = asyncHandler(async (req, res) => {
  const { name, description, price, category, subCategory, sizes, bestSeller } =
    req.body;

  const image1 = req.files.image1 && req.files.image1[0];
  const image2 = req.files.image2 && req.files.image2[0];
  const image3 = req.files.image3 && req.files.image3[0];
  const image4 = req.files.image4 && req.files.image4[0];

  const images = [image1, image2, image3, image4].filter(
    (item) => item !== undefined
  );

  const imagesUrl = await Promise.all(
    images.map(async (image) => {
      let result = await cloudinary.uploader.upload(image.path, {
        resource_type: "image",
      });
      return result.secure_url;
    })
  );

  const productData = {
    name,
    description,
    price: Number(price),
    category,
    subCategory,
    bestSeller: bestSeller === "true" ? true : false,
    sizes: JSON.parse(sizes),
    image: imagesUrl,
    date: Date.now(),
  };

  const product = new Product(productData);
  const createdProduct = await product.save();
  res.status(201).json({
    success: true,
    message: "Product added successfully",
    product: createdProduct,
  });
});

// @desc    Get all products--------------------------------------------------------
// @route   GET /api/product
// @access  Public
const listProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ success: true, products });
});

// @desc    Remove a product--------------------------------------------------------
// @route   DELETE /api/product/:id
// @access  Private/Admin
const removeProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await Product.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Product removed successfully" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Get product details--------------------------------------------------------
// @route   GET /api/product/:id
// @access  Public
const singleProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.status(200).json({ success: true, product });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

module.exports = {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct,
};
