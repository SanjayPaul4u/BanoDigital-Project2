const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name :{
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true   
    },
    password: {
        type: String,
        require: true
    },
    confirmPassword: {
        type: String,
        require: true
    }
})

const Users = new mongoose.model("User", userSchema);

module.exports = Users;