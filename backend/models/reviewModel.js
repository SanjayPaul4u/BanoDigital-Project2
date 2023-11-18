const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    starCount:{
        type: Number,
        require: true
    },
    reviewMsg:{
        type: String,
        require: true
    }
})

const Reviews = new mongoose.model("review", reviewSchema);

module.exports = Reviews;