const User = require("../models/register-model");

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare the plain-text password
        if (password !== user.password) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // If email and password are correct, return success response
        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Something went wrong:", error);
        res.status(500).json({
            message: "Failed to log in",
            error: error.message
        });
    }
};

module.exports = loginController;
