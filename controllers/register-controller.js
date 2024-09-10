const User = require("../models/register-model");

const registerController = async (req, res) => {
    try {
        const { name, fatherName, rollNumber, grade, formBay } = req.body;
        
        await User.create({ name, fatherName, rollNumber, grade, formBay });

        res.json({
            message: "User registered successfully",
            user : {
                name,
                fatherName, 
                rollNumber, 
                grade, 
                formBay
            }
        });
    } catch (error) {
        console.error("Sometrhing wrong");
    }
};

module.exports =  registerController;