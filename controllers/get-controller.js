const User = require("../models/register-model");

const getController = async (req, res) => {
  try {
    const { id } = req.params;

    // Ensure the ID is valid
    if (!id || id.length !== 24) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    // Find the user by ID
    const getUser = await User.findById(id);

    // If the user is not found, send a 404 response
    if (!getUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // If the user is found, send the response
    res.status(200).json({
      message: "User found successfully",
      getUser
    });
  } catch (error) {
    console.error("Something went wrong:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getController;
