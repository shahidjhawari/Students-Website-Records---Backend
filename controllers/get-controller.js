const User = require("../models/register-model");

const getController = async (req, res) => {
    try {     
        
        const getUser = await User.find();

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
