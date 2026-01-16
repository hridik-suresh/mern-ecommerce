const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authUser = asyncHandler(async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: "Not Authorized, Login Again" });
  }

  try {
    const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decoded.id;
    next();
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
});

module.exports = authUser;
