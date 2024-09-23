const express = require("express");
const getUser = express.Router();
const  getController  = require("../controllers/get-controller");


getUser.get("/get/:id", getController);

module.exports = getUser