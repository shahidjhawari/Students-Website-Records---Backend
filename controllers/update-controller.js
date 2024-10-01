const bcrypt = require("bcryptjs");
const User = require("../models/register-model");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

const updateController = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, fatherName, rollNumber, grade, formBay, email, password } = req.body;

    let imageUrl = "";
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "uploads",
      });

      imageUrl = result.secure_url;

      fs.unlinkSync(req.file.path);
    }

    const updatedFields = {
      name,
      fatherName,
      rollNumber,
      grade,
      formBay,
      email,
    };

    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      updatedFields.password = hashedPassword;
    }

    if (imageUrl) {
      updatedFields.image = imageUrl;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, { new: true });

    res.status(201).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Something went wrong:", error);
    res.status(500).json({
      message: "Failed to update user",
      error: error.message,
    });
  }
};

module.exports = updateController;
