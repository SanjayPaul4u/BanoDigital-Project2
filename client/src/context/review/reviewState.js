import React, { useContext } from "react";
import ReviewContext from "./reviewContext";
import axios from "axios";
import GetCookie from "../../hooks/getCookie";
import AlertContext from "../alert/alertContext";


const ReviewState = (props)=>{
    const host = "http://127.0.0.1:5500"
    // using "useContext" 📌 
    const alert_context = useContext(AlertContext);
    const {showAlertFunc} = alert_context;

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

    return <ReviewContext.Provider value={{addReviewApicall}}>
        {props.children}
    </ReviewContext.Provider>
}

export default ReviewState;