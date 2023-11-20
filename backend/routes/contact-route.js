const express = require("express");
const fetchUser = require("../middleware/fetchUser");
const submitConMsgFunc = require("../controller/contactController");
const { body, validationResult } = require('express-validator');

const router = express.Router();
// ROUTE 1: deleteReviewByIdFunc : POST - /api/contact/submitcontact
router.post("/submitcontact/:token",[
    body("name", "Minimum length of name must be 3").isLength({min:3}),
    body("name", "Maximum length of name must be 25").isLength({max:25}),
    body("contactMsg", "Minimum length of contactMsg must be 5").isLength({min:5}),
    body("contactMsg", "Maximum length of contactMsg must be 200").isLength({max:200}),
    body("mobile", "Invalid Mobile Number").isInt({min:1000000000, max: 9999999999}),
], fetchUser, submitConMsgFunc);

// export auth route
module.exports = router;