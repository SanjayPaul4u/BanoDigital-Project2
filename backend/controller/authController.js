const Users = require("../models/userModel");

// SIGNUP FUNCTION  
const signupFunc = async(req, res, next) =>{
    try {
        let success = false
        // check email already exists or not📌
        const isEmail = await Users.findOne({email:req.body.email});
        if(isEmail){
            success = false
             return res.status(400).json({success, message:"A user with this Email already exists"});
        }
        // if both password are not match 📌
        if(req.body.password!== req.body.confirmPassword){
            success = false
            return res.status(400).json({success, message:"Your both passwords are not same"});
        }

        // final code for save data in db 📌
        const user_data = await Users({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        })

        // pre method before save for hashing password***📌

        // generate toke by userSchema.methods.createToken 📌
        const token = await user_data.createToken();
        
        // if there is not toke 📌
        if(!token){
            success = false
            return res.status(400).json({success, message:"Token not generated"});
        }

        const saved_data = await user_data.save();
        success = true;
        res.status(201).json({token, success, message:"Account Created SuccessFully", saved_data});
    } catch (error) {
        success = false
        console.log("SIGNUP ERROR********");
        console.log(error);
        res.status(500).json({success, error:error.message})
    }
}

module.exports = signupFunc;