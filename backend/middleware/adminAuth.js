const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const adminAuth = asyncHandler(async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res
      .status(401)
      .json({ message: "No token provided", success: false });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
    return res
      .status(401)
      .json({ message: "Not authorized as admin", success: false });
  }

  next();
});

module.exports = adminAuth;
