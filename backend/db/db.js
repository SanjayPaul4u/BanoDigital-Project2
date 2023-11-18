const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(`mongodb://localhost:27017/${process.env.MAIN_DATA_BASE}`).then(()=>{
    console.log("mongoose connection successfull*******");
}).catch((error)=>{
    console.log("mongoose connection Error");
})