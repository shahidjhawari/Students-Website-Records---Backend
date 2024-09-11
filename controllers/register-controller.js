const User = require("../models/register-model");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

const registerController = async (req, res) => {
    try {
        const { name, fatherName, rollNumber, grade, formBay } = req.body;

        // Check if a file is uploaded
        let imageUrl = "";
        if (req.file) {
            // Upload the image to Cloudinary
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "uploads"  // Cloudinary folder to store images
            });

            // Store the secure URL from Cloudinary
            imageUrl = result.secure_url;

            // Remove the file from the server after uploading to Cloudinary
            fs.unlinkSync(req.file.path);
        }

        // Create a new user with the uploaded image URL
        const newUser = await User.create({
            name,
            fatherName,
            rollNumber,
            grade,
            formBay,
            image: imageUrl  // Store image URL in the database
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
