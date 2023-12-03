import { useContext, useState } from "react";
import ScrallingReviewContext from "./scrallingReviewContext";
import axios from "axios";
import ProgressContext from "../progress/progressContext";



const ScrallingReviewState = (props) =>{
    const host = process.env.REACT_APP_SERVER;

    // using "useState" 📌
    const [allReview, setAllReview] = useState(null);
    const [loading, setloading] = useState(true)
    const [page, setPage] = useState(1);
    const page_content = 3;
    const [total_result, setTotal_result] = useState(0)

    // using "useContext" 📌
    const progress_context = useContext(ProgressContext);
    const {setProgressFunc} = progress_context;


    // GET All REVIEW -without token📌
    const getAllReviewApicall = async() =>{
        try {
            setProgressFunc(50);
            setloading(true);

            const response = await axios({
                method:"get",
                url: `${host}/api/review/getallreview?page=${page}&pageContent=${page_content}`,
                headers: {
                    "Content-Type": "application/json" //important
                }
            })
            setProgressFunc(80);
            const data = await response.data;
            // console.log(data.review_data);
            setAllReview(data.review_data);
            setTotal_result(data.totalResult);
            setloading(false);
            setProgressFunc(100);
        } catch (error) {
            console.log("Get All Review Api call Error*****");
            console.log(error);
        }
    }

    // CONST FETCH MORE DATA 📌
    const fetchMoreData = async() =>{
        try {
            setProgressFunc(50);
            setloading(true);

            const response = await axios({
                method:"get",
                url: `${host}/api/review/getallreview?page=${page+1}&pageContent=${page_content}`,
                headers: {
                    "Content-Type": "application/json" //important
                }
            })
            setPage(page+1);

            setProgressFunc(80);
            const data = await response.data;
            setAllReview(allReview.concat(data.review_data));
            
            setloading(false);
            setProgressFunc(100);
            // console.log(data.review_data);
        } catch (error) {
            console.log("Get All Review Api call Error*****");
            console.log(error);
        }
    }

    return <ScrallingReviewContext.Provider value={{getAllReviewApicall, allReview, loading, total_result, fetchMoreData}}>
        {props.children}
    </ScrallingReviewContext.Provider>
}
export default ScrallingReviewState;