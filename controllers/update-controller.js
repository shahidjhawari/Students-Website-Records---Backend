const User = require("../models/register-model");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

const updateController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, fatherName, rollNumber, grade, formBay } = req.body;
        
        let updatedUserData = { name, fatherName, rollNumber, grade, formBay };

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: 'studentsrecords',
            });

            updatedUserData.image = result.secure_url;

            fs.unlinkSync(req.file.path);
        }

        const updatedUser = await User.findByIdAndUpdate(id, updatedUserData);

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "User updated successfully",
            user: updatedUser,
        });
    } catch (error) {
        console.error("Something went wrong:", error);
        res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
};

module.exports = updateController;
