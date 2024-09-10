const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    fatherName : {
        type : String,
        require : true
    },
    rollNumber : {
        type : Number,
        require : true
    },
    grade : {
        type : String,
        require : true
    },
    formBay : {
        type : Number,
        require : true
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;