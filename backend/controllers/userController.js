const asyncHandler = require("express-async-handler");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

//Function to create JWT token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

//@desc   Login user-----------------------------------------------------------------
//@route  POST /api/user/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res
      .status(400)
      .json({ message: "Invalid email or password", success: false });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res
      .status(400)
      .json({ message: "Invalid email or password", success: false });
  }

  const token = createToken(user._id);

  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: token,
    success: true,
  });
});

//@desc   Register user----------------------------------------------------------------
//@route  POST /api/user/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //validating email format and strong password
  if (!validator.isEmail(email)) {
    return res
      .status(400)
      .json({ message: "Invalid email format", success: false });
  }

  if (password.length < 8) {
    return res.status(400).json({
      message: "Password must be at least 8 characters long",
      success: false,
    });
  }

  //checking user already exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    return res
      .status(400)
      .json({ message: "User already exists", success: false });
  }

  //hashing user password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = createToken(user._id);

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: token,
      success: true,
    });
  } else {
    res.status(400).json({ message: "Invalid user data", success: false });
  }
});

//@desc   Login user as admin-------------------------------------------------------------
//@route  POST /api/user/admin
//@access Admin only
const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign(email + password, process.env.JWT_SECRET);
    res.status(200).json({
      email: email,
      token: token,
      success: true,
    });
  } else {
    res
      .status(401)
      .json({ message: "Invalid admin credentials", success: false });
  }
});

module.exports = {
  loginUser,
  registerUser,
  adminLogin,
};
