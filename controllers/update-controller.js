const express = require("express");
const multer = require("multer");
const User = require("../models/register-model");

const storage = multer.memoryStorage(); // or configure diskStorage for file uploads
const upload = multer({ storage });

const updateController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, fatherName, rollNumber, grade, formBay } = req.body;

        const updatedUser = await User.findByIdAndUpdate(id, {
            name,
            fatherName,
            rollNumber,
            grade,
            formBay
        }, { new: true }); // Use { new: true } to return the updated document

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "User updated successfully",
        });
    } catch (error) {
        console.error("Something went wrong:", error); // Log the error
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Set up the route to handle file uploads
const update = express.Router();
update.put("/update/:id", upload.single('image'), updateController); // 'image' matches the field name in FormData

module.exports = update;
