const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    name:{
        type: Number,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    contactMsg:{
        type: String,
        require: true
    }
})

const contacts = new mongoose.model("contact", contactSchema);

module.exports = contacts;