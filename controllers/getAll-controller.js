const User = require("../models/register-model");

const getAllController = async (req, res) => {
  try {

    const getUser = await User.find();

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

module.exports = getAllController;
