const express = require("express");
const deleteUser = express.Router();
const  deleteController  = require("../controllers/delete-controller")


deleteUser.delete("/delete/:id", deleteController);

module.exports = deleteUser