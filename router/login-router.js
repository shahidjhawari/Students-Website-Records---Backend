const express = require("express");
const login = express.Router();
const loginController = require("../controllers/login-controller");

login.post("/login", loginController);

module.exports = login;
