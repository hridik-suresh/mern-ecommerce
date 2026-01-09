const multer = require("multer");

// Set up storage engine
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + "-" + file.originalname); // use the original filename
  },
});

const upload = multer({ storage: storage });

module.exports = upload;