const Reviews = require("../models/reviewModel");
const { body, validationResult } = require('express-validator');

// ADD REVIEW FUNCTION
const addReviewFunc = async(req, res, next)=>{
    let success = false
        // check validation by express-validator📌
        const result = validationResult(req);
        if (!result.isEmpty()) {
            success = false
            return res.status(400).json({success, message: `Invalid Credentials - ${result.array()[0].msg}`, errors: result.array() });
        }


    
    try {
        const reviewMsg = req.body.reviewMsg;
        const starCount = req.body.starCount;
        // check already reviewed or not📌
        const isReviewd = await Reviews.findOne({user:req.user._id});
        if(isReviewd){
            success = false;
            return res.status(400).json({success, message: "Review already Added. Now you can Edit it or Delete"})
        }

        
        // Set schema's value📌
        const review_data = await Reviews({
            user:req.user._id,// getting from fetch user
            name:req.user.name,
            reviewMsg:reviewMsg,
            starCount:starCount
        })

        // save review date in database📌
        const saved_review_data = await review_data.save(); 

        success = true;
        res.status(201).json({success, message: "Added review successfully", saved_review_data});
    } catch (error) {
        success = false;
        console.log("Add review error***");
        console.log(error);
        res.status(500).json({success, error:error.message})
    }
}

// GET REVIEW FUNCTION
const getReviewFunc = async (req, res, next) =>{
    try {
        let success = false;
        const review_data = await Reviews.findOne({user:req.user._id});
        // check user already reviewed or not
        if(!review_data){
            success = false;
            return res.status(404).json({success, message: "Not Found"});
        }

        success = true;
        res.status(200).json({success, message: "Got User review successfully", review_data});
    } catch (error) {
        let success = false;
        console.log("Get review error***");
        console.log(error);
        res.status(500).json({success, error:error.message})
    }
}

// GET ALL REVIEW FUNCTION
const getAllReviewFunc = async (req, res, next) =>{
    try {
        let success = false;
        const {page, pageContent} = req.query;
        const review_data = await Reviews.find().sort({createdAt: -1}).limit(pageContent).skip(pageContent*(page-1));
        
        success = true;
        // res.status(200).json({review_data});
        res.status(200).json({success, message: "Got All User Review successfully", review_data});
    } catch (error) {
        let success = false;
        console.log("Get All review error***");
        console.log(error);
        res.status(500).json({success, error:error.message})
    }
}

// UPDATE REVIEW BY ID 
const updateReviewByIdFunc = async (req, res, next) =>{
    let success = false
        // check validation by express-validator📌

        const result = validationResult(req);
        if (!result.isEmpty()) {
            success = false
            return res.status(400).json({success, message: `Invalid Credentials - ${result.array()[0].msg}`, errors: result.array() });
        }
    try {
        let success = false;
        const id = req.params.id;
        const userid = req.user._id;

        const review_data = await Reviews.findById(id);
        // check review found or not📌
        if(!review_data){
            success = false;
            return res.status(404).json({success, message: "Not Found"});
        }

        // check auth user id and "review-data" user id same or not📌
        if(review_data.user.toString() !== userid.toString()){
            success = false;
            return res.status(401).json({success, message: "Not Allowed"});
        }
        
        // final update code📌
        let new_review_data = {};
        const starCount = req.body.starCount;
        const reviewMsg = req.body.reviewMsg;

        if(starCount){
            new_review_data.starCount = starCount
        }
        if(reviewMsg){
            new_review_data.reviewMsg = reviewMsg
        }

        const updated_review_data = await Reviews.findByIdAndUpdate(id, {$set: new_review_data}, {new: true})
        success = true;
        res.status(201).json({success, message: "Review-Data Updated Successfully", updated_review_data});
    } catch (error) {
        let success = false;
        console.log("updateReviewByIdFunc error***");
        console.log(error);
        res.status(500).json({success, error:error.message});
    }
}

// DELETE REVIEW BY ID 
const deleteReviewByIdFunc = async (req, res, next) =>{
   
    try {
        let success = false;
        const id = req.params.id;
        const userid = req.user._id;

        const review_data = await Reviews.findById(id);
        // check review found or not📌
        if(!review_data){
            success = false;
            return res.status(404).json({success, message: "Not Found"});
        }

        // check auth user id and "review-data" user id same or not📌
        if(review_data.user.toString() !== userid.toString()){
            success = false;
            return res.status(401).json({success, message: "Not Allowed"});
        }
        
        // final update code📌
        const deleted_review_data = await Reviews.findByIdAndDelete(id, {new: true})
        success = true;
        res.status(201).json({success, message: "Review-Data Deleted Successfully", deleted_review_data});
    } catch (error) {
        let success = false;
        console.log("deleteReviewByIdFunc error***");
        console.log(error);
        res.status(500).json({success, error:error.message});
    }
}
module.exports = {
    addReviewFunc,
    getReviewFunc,
    getAllReviewFunc,
    updateReviewByIdFunc,
    deleteReviewByIdFunc
}