const Contacts = require("../models/contactModel");
const { body, validationResult } = require('express-validator');

const submitConMsgFunc = async(req, res, next) =>{
    // check validation by express-validator📌
    let success = false;
    const result = validationResult(req);
    if (!result.isEmpty()) {
        success = false
        return res.json({success, message: `Invalid Credentials - ${result.array()[0].msg}`, errors: result.array() });
    }

    try {
        let success = false;
        const userId = req.user._id;
        const name  = req.body.name;
        const email = req.body.email;
        const mobile = req.body.mobile;
        const contactMsg = req.body.contactMsg;
        
        console.log(name);
        // Give value to schema
        const submit_data = await Contacts({
            user: userId,
            name,
            email,
            mobile,
            contactMsg
        })

        // save data in contacts collection
        const saved_submit_data = await submit_data.save();

        success = true;
        res.status(201).send({success, message: "Contact Message Submmited Successfully", saved_submit_data})
    } catch (error) {
        let success = false;
        console.log("Submit Contact error***");
        console.log(error);
        res.status(500).json({success, error:error.message})
    }
}

module.exports = submitConMsgFunc;