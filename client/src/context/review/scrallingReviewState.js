import { useContext, useState } from "react";
import ScrallingReviewContext from "./scrallingReviewContext";
import axios from "axios";
import ProgressContext from "../progress/progressContext";



const ScrallingReviewState = (props) =>{
    const host = "http://127.0.0.1:5500"
    const [allReview, setAllReview] = useState(null);

    const progress_context = useContext(ProgressContext);
    const {setProgressFunc} = progress_context;


    // GET All REVIEW -without token📌
    const getAllReviewApicall = async() =>{
        try {
            setProgressFunc(50);
            const response = await axios({
                method:"get",
                url: `${host}/api/review/getallreview?page=2&pageContent=5`,
                headers: {
                    "Content-Type": "application/json" //important
                }
            })
            setProgressFunc(80);
            const data = await response.data;
            // console.log(data.review_data);
            setAllReview(data.review_data);
            setProgressFunc(100);
        } catch (error) {
            console.log("Get All Review Api call Error*****");
            console.log(error);
        }
    }


    return <ScrallingReviewContext.Provider value={{getAllReviewApicall, allReview}}>
        {props.children}
    </ScrallingReviewContext.Provider>
}
export default ScrallingReviewState;