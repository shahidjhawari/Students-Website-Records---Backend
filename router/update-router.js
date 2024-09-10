const express = require("express");
const update = express.Router();
const  updateController  = require("../controllers/update-controller")


update.put("/update/:id", updateController);

module.exports = update