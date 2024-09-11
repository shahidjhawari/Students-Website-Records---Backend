const express = require("express");
const router = express.Router();
const  registerController  = require("../controllers/register-controller");
const upload = require("../config/multer");


router.post("/register", upload.single('image'), registerController);

module.exports = router