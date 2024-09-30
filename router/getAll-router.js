const express = require("express");
const getAllUser = express.Router();
const getAllController = require("../controllers/getAll-controller");
const verifyToken = require("../middleware/verifyToken");

getAllUser.get("/get", verifyToken, getAllController);

module.exports = getAllUser;
