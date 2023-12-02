import React, { useContext, useState } from "react";
import ReviewContext from "./reviewContext";
import axios from "axios";
import GetCookie from "../../hooks/getCookie";
import AlertContext from "../alert/alertContext";
import ProgressContext from "../progress/progressContext";
import ScrallingReviewContext from "./scrallingReviewContext";



const ReviewState = (props)=>{
    const host = "http://127.0.0.1:5500"

    const [userReview, setUserReview] = useState(null);
    const [isUserWantDelete, setIsUserWantDelete] = useState(false);
    const progress_context = useContext(ProgressContext);
    const {setProgressFunc} = progress_context;
    const scralling_review_context = useContext(ScrallingReviewContext);
    const {getAllReviewApicall} = scralling_review_context;



    // using "useContext" 📌 
    const alert_context = useContext(AlertContext);
    const {showAlertFunc} = alert_context;

    // GET USER REVIEW 📌
    const getUserReviewApicall = async() =>{
        try {
            setProgressFunc(50);
            const token = GetCookie("bdigital-token");
            const response = await axios({
                method:"get",
                url: `${host}/api/review/getreview/${token}`,
                headers: {
                    "Content-Type": "application/json" //important
                }
            })
            setProgressFunc(80);
            const data = await response.data;
            // console.log(data.review_data);
            setUserReview([data.review_data]);
            setProgressFunc(100);
            
        } catch (error) {
            console.log("Get User Review Api call Error*****");
            console.log(error);
        }
    }

    
    // ADD REVIEW 📌 
    const addReviewApicall = async(reviewData) =>{
        try {
            setProgressFunc(50);
            const token = GetCookie("bdigital-token");
            const response = await axios({
                method:"post",
                url: `${host}/api/review/addreview/${token}`,
                data: JSON.stringify(reviewData),
                headers: {
                    "Content-Type": "application/json" //important
                }
            })
            setProgressFunc(80);
            const data = await response.data;
            console.log(data);
            showAlertFunc("success", "Rating and Review Added Successfully");
            getAllReviewApicall();
            setUserReview([data.saved_review_data]);
            setProgressFunc(100);
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

    
    // Edit REVIEW 📌 
    const editReviewApicall = async(reviewData, id) =>{
        try {
            setProgressFunc(50);
            const token = GetCookie("bdigital-token");
            const response = await axios({
                method:"patch",
                url: `${host}/api/review/updatereview/${id}/${token}`,
                data: JSON.stringify(reviewData),
                headers: {
                    "Content-Type": "application/json" //important
                }
            })
            setProgressFunc(80);
            const data = await response.data;
            console.log(data);
            showAlertFunc("success", "Edited Rating & Review Successfully");
            getAllReviewApicall();
            setUserReview([data.updated_review_data]);
            setProgressFunc(100);
            return data;
        } catch (error) {
            console.log("editReviewApicall Error*****");
            console.log(error);


            if(error.response.data.message){
                showAlertFunc("error", `${error.response.data.message}`);
            }else{
                showAlertFunc("error", `Can't Add Review due to some Reason`);
            }
            return error
        }
    }

    // GET All REVIEW -without token📌
    const delteReviewApicall = async(id) =>{
        try {
            setProgressFunc(50);
            const token = GetCookie("bdigital-token");
            const response = await axios({
                method:"delete",
                url: `${host}/api/review/deletereview/${id}/${token}`
            })
            setProgressFunc(80);
            await response.data;
            // console.log(data);
            getAllReviewApicall();
            setUserReview(null);
            showAlertFunc("success", "Your Rating & Review Deleted Successfully");
            setProgressFunc(100);
        } catch (error) {
            console.log("delteReviewApicall Error*****");
            console.log(error);
        }
    }

    // CAPITALIZED WORD FUNCTION 📌
    const capitalizedWord = (word) =>{
        const lowerCaseWord = word.toLowerCase();
        const uppperCaseWord = word.toUpperCase();
        const capitalizedWord = uppperCaseWord.charAt(0)+lowerCaseWord.slice(1);
        return capitalizedWord;
    }
    // CLICK DELETE ICON
    const onclickDeleteIconFunc = ()=>{
        setIsUserWantDelete(true);
    }

    return <ReviewContext.Provider value={{addReviewApicall, getUserReviewApicall, userReview,setUserReview, delteReviewApicall, editReviewApicall, capitalizedWord, isUserWantDelete, setIsUserWantDelete, onclickDeleteIconFunc}}>
        {props.children}
    </ReviewContext.Provider>
}

export default ReviewState;