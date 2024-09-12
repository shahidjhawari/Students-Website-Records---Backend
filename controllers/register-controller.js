const User = require("../models/register-model");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

const registerController = async (req, res) => {
    try {
        const { name, fatherName, rollNumber, grade, formBay } = req.body;

        let imageUrl = "";
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "uploads" 
            });

            imageUrl = result.secure_url;

            fs.unlinkSync(req.file.path);
        }

        const newUser = await User.create({
            name,
            fatherName,
            rollNumber,
            grade,
            formBay,
            image: imageUrl 
        });

        res.status(201).json({
            message: "User registered successfully",
            user: newUser
        });
    } catch (error) {
        console.error("Something went wrong:", error);
        res.status(500).json({
            message: "Failed to register user",
            error: error.message
        });
    }
};

module.exports = registerController;
