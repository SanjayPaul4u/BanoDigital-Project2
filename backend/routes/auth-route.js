const express = require("express");
const { body, validationResult } = require('express-validator');
const {signupFunc, loginFunc, getUserFunc} = require("../controller/authController");
const fetchUser = require('../middleware/fetchUser');

const router = express.Router();
// all auth routes
// ROUTE 1: signup : POST - /api/auth/signup
router.post("/signup", [
    body("name", "Minimum Length of name should be 3*****").isLength({min:3}),
    body("name", "max length of name should be 25*").isLength({max:25}),
    body("email", "Enter Valid Email *").isEmail(),
    body("password", "min length of password should be 3*").isLength({min:3}),
    body("password", "max length of password should be 20*").isLength({max:20}),
    body("confirmPassword", "min length of password should be 3*").isLength({min:3}),
    body("confirmPassword", "max length of password should be 20*").isLength({max: 20}),
], signupFunc);// NO AUTHENTICATION REQUIRED📌
// ROUTE 2: login : POST - /api/auth/login
router.post("/login", loginFunc);// NO AUTHENTICATION REQUIRED📌

// ROUTE 3: getuser : GET - /api/auth/getuser
router.get("/getuser/:token", fetchUser, getUserFunc);


// export auth route
module.exports = router;