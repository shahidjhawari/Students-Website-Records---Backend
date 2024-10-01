const express = require("express");
const update = express.Router();
const  updateController  = require("../controllers/update-controller");
const upload = require("../config/multer");
const verifyToken = require("../middleware/verifyToken");


update.put("/update", verifyToken, upload.single('image'),updateController);

module.exports = update