const express = require("express");
const router = express.Router();

// all auth routes
router.get("/", (req, res)=>{
    res.send("This contact router");
});

// export auth route
module.exports = router;