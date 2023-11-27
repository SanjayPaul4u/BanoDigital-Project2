const express =  require("express");
const authRouter = require("./routes/auth-route");
const reviewRouter = require("./routes/review-route");
const contactRouter = require("./routes/contact-route");
const cors = require("cors");
require("./db/db");

// middle ware
const app = express();
app.use(cors())

// define
const host  = "127.0.0.1";
const port = process.env.PORT || 5500;
// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// routing
app.use("/api/auth", authRouter);
app.use("/api/review", reviewRouter);
app.use("/api/contact", contactRouter);

// lister server
app.listen(port, host, ()=>{
    console.log(`http://localhost:${port}`);
})
