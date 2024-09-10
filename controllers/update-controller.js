const User = require("../models/register-model");

const updateController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, fatherName, rollNumber, grade, formBay } = req.body;
        
         const updatedUser = await User.findByIdAndUpdate(id, { name, fatherName, rollNumber, grade, formBay });

         if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status("200").json({
            message: "User upadted successfully",
        });
    } catch (error) {
        res.status("500").console.error("Sometrhing wrong");
    }
};

module.exports =  updateController;