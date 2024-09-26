const express = require("express");
const update = express.Router();
const  updateController  = require("../controllers/update-controller");
const upload = require("../config/multer");


update.put("/update/:id", upload.single('image'),updateController);

module.exports = update