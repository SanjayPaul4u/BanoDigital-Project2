const express = require("express");
const router = express.Router();
const signupFunc = require("../controller/authController");

// all auth routes
// ROUTE 1: signup : POST - /api/auth/signup
router.post("/signup", signupFunc);


// export auth route
module.exports = router;