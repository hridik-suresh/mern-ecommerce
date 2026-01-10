const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/mongodb");
const connectCloudinary = require("./config/cloudinary");

//App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

//api endpoints
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//routes
app.use("/api/user", require("./routes/userRoute"));
app.use("/api/product", require("./routes/productRoute"));

//listening to port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
