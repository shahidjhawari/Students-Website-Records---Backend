const express = require("express");
const getAllUser = express.Router();
const getAllController = require("../controllers/getAll-controller");

getAllUser.get("/get", getAllController);

module.exports = getAllUser;
