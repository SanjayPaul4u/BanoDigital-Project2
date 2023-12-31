const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    name:{
        type: String,
        require: true,
    },
    starCount:{
        type: Number,
        require: true,
        min: [1, "Star Count Must be 1 to 5"],
        max: [5, "Star Count Must be 1 to 5"]
    },
    reviewMsg:{
        type: String,
        require: true
    }
}, {timestamps: true})

const Reviews = new mongoose.model("review", reviewSchema);

module.exports = Reviews;