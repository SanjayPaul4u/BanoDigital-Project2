import React, { useContext } from "react";
import ReviewContext from "../../context/review/reviewContext";


const ReviewDeleteAlert = (props) => {
     // using "useCotext" 📌
  const review_context = useContext(ReviewContext);
    const {isUserWantDelete, setIsUserWantDelete, delteReviewApicall} = review_context;

    // onclickCancelFunc 📌
    const onclickCancelFunc = () =>{
        setIsUserWantDelete(false);
    }
    //onclickFinalDeleteFunc 📌
    const onclickFinalDeleteFunc = (id)=>{
        setIsUserWantDelete(false);
        delteReviewApicall(id);
    }
  return (
    <div
      className={`p-2 ${isUserWantDelete?"":"d-none"}`}
      style={{
        color: "#fff",
        fontWeight: "500",
        backgroundColor: "#00000047",
        borderRadius: "0.1rem",
      }}
    >
      Are you sure ?
      <button className="btn btn-sm btn-primary mx-2" onClick={onclickCancelFunc}>Cancel</button>
      <button className="btn btn-sm btn-danger" onClick={()=>{onclickFinalDeleteFunc(props.id)}}>Delete</button>
    </div>
  );
};

export default ReviewDeleteAlert;
