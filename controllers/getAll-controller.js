const User = require("../models/register-model");

const getAllController = async (req, res) => {
  try {
    const userId = req.user.id;

    const getUser = await User.findById(userId);

    if (!getUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User found successfully",
      getUser,
    });
  } catch (error) {
    console.error("Something went wrong in getAllController:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

module.exports = getAllController;
