const User = require("../models/register-model");

const updateController = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "User deleted successfully",
        });
    } catch (error) {
        console.error("Something went wrong:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = updateController;
