import React, { useContext, useState } from "react";
import ReviewContext from "./reviewContext";
import axios from "axios";
import GetCookie from "../../hooks/getCookie";
import AlertContext from "../alert/alertContext";


const ReviewState = (props)=>{
    const host = "http://127.0.0.1:5500"

    const [userReview, setUserReview] = useState(null);
    const [allReview, setAllReview] = useState(null);

    // using "useContext" 📌 
    const alert_context = useContext(AlertContext);
    const {showAlertFunc} = alert_context;

    // GET USER REVIEW 📌
    const getUserReviewApicall = async() =>{
        try {
            const token = GetCookie("bdigital-token");
            const response = await axios({
                method:"get",
                url: `${host}/api/review/getreview/${token}`,
                headers: {
                    "Content-Type": "application/json" //important
                }
            })
            const data = await response.data;
            // console.log(data.review_data);
            setUserReview([data.review_data]);
            
        } catch (error) {
            console.log("Get User Review Api call Error*****");
            console.log(error);
        }
    }

    // GET All REVIEW -without token📌
    const getAllReviewApicall = async() =>{
        try {
            const response = await axios({
                method:"get",
                url: `${host}/api/review/getallreview`,
                headers: {
                    "Content-Type": "application/json" //important
                }
            })
            const data = await response.data;
            // console.log(data.review_data);
            setAllReview(data.review_data);
            
        } catch (error) {
            console.log("Get All Review Api call Error*****");
            console.log(error);
        }
    }


    // ADD REVIEW 📌 
    const addReviewApicall = async(reviewData) =>{
        try {
            const token = GetCookie("bdigital-token");
            const response = await axios({
                method:"post",
                url: `${host}/api/review/addreview/${token}`,
                data: JSON.stringify(reviewData),
                headers: {
                    "Content-Type": "application/json" //important
                }
            })
            const data = await response.data;
            console.log(data);
            showAlertFunc("success", "Rating and Review Added Successfully");
            getAllReviewApicall();
            setUserReview([data.saved_review_data]);
            return data;
        } catch (error) {
            console.log("Add Review Api call Error*****");
            console.log(error);


            if(error.response.data.message){
                showAlertFunc("error", `${error.response.data.message}`);
            }else{
                showAlertFunc("error", `Can't Add Review due to some Reason`);
            }
            return error
        }
    }

    // CAPITALIZED WORD FUNCTION 📌
  const capitalizedWord = (word) =>{
    const lowerCaseWord = word.toLowerCase();
    const uppperCaseWord = word.toUpperCase();
    const capitalizedWord = uppperCaseWord.charAt(0)+lowerCaseWord.slice(1);
    return capitalizedWord;
  }
    return <ReviewContext.Provider value={{addReviewApicall, getUserReviewApicall, userReview,setUserReview, getAllReviewApicall, allReview, capitalizedWord}}>
        {props.children}
    </ReviewContext.Provider>
}

export default ReviewState;