const mongoose = require("mongoose");

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Successfully conect to DB");
    } catch (error) {
        console.log("Somting wrong in connection");
    }
}

module.exports = connection