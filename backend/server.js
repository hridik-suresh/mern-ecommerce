const express = require("express");
const cors = require("cors");
const connectDB = require("./config/mongodb");
require("dotenv").config();

//App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();

//middlewares
app.use(express.json());
app.use(cors());

//api endpoints
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
