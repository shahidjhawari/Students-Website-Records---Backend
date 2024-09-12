const express = require("express");
const getUser = express.Router();
const  getController  = require("../controllers/get-controller");


getUser.get("/get", getController);

module.exports = getUser