const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    mobile:{
        type: Number,
        require: true,
        
    },
    contactMsg:{
        type: String,
        require: true
    }
}, {timestamps: true})

const Contacts = new mongoose.model("contact", contactSchema);

module.exports = Contacts;