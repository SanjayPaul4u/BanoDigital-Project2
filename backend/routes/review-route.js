const express = require("express");
const { body, validationResult } = require('express-validator');
const fetchUser = require('../middleware/fetchUser');
const { addReviewFunc, getReviewFunc, getAllReviewFunc,updateReviewByIdFunc, deleteReviewByIdFunc} = require("../controller/reviewController");


const router = express.Router();
// all auth routes
// ROUTE 1: AddReview : POST - /api/review/addreview
router.post("/addreview/:token",[
    body("reviewMsg", "Minimum Length of Review Message must be 5").isLength({min: 5}),
    body("reviewMsg", "Maximum Length of Review Message must be 150").isLength({max: 200}),
],fetchUser, addReviewFunc);

// ROUTE 2: GetSpecificReview : GET - /api/review/getreview
router.get("/getreview/:token",fetchUser, getReviewFunc);

// ROUTE 3: GetAlluserReview : GET - /api/review/getallreview
router.get("/getallreview", getAllReviewFunc); // NO AUTHENTICATION REQUIRED📌

// ROUTE 4: updateReviewById : PATCH - /api/review/updatereview
router.patch("/updatereview/:id/:token",[
    body("starCount", "Rating must be between 1 to 5").isInt({min: 1, max: 5}),
    body("reviewMsg", "Minimum Length of Review Message must be 5").isLength({min: 5}),
    body("reviewMsg", "Maximum Length of Review Message must be 150").isLength({max: 200})
], fetchUser, updateReviewByIdFunc);

// ROUTE 5: deleteReviewByIdFunc : DELETE - /api/review/deletereview
router.delete("/deletereview/:id/:token", fetchUser, deleteReviewByIdFunc);

// export auth route
module.exports = router;