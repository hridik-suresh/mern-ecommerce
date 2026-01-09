//For user Login
const loginUser = async (req, res) => {};

//For user Registration
const registerUser = async (req, res) => {
    res.json({ message: "User registered successfully" });
};

//For admin Login
const adminLogin = async (req, res) => {};

module.exports = {
  loginUser,
  registerUser,
  adminLogin,
};
