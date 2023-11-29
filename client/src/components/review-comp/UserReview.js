import React, { useContext, useEffect, useRef, useState } from 'react'
import ReviewContext from '../../context/review/reviewContext';
import GetCookie from '../../hooks/getCookie';
import ReviewDeleteAlert from '../alers-comp/ReviewDeleteAlert';
import EditReviewModal from './EditReviewModal';


const UserReview = () => {
  const [reviewDetailForEdit, setReviewDetailForEdit] = useState({starCount:0, reviewMsg:""});
  const [id, setId] = useState("");

  // using "useRef"     📌
  const editIconClickRef = useRef();

  // using "useCotext"  📌
  const review_context = useContext(ReviewContext);
  const {getUserReviewApicall, userReview, isUserWantDelete, onclickDeleteIconFunc} = review_context;

  // EDIT ICON FUNCTION 📌
  const editIconFunc = (idParameter) =>{
    editIconClickRef.current.click()
    setReviewDetailForEdit({starCount:userReview[0].starCount, reviewMsg:userReview[0].reviewMsg});
    setId(idParameter)
  }

  // USE EFFECT         📌
  useEffect(() => {
    if(GetCookie("bdigital-token")){
      getUserReviewApicall();
    }
    // eslint-disable-next-line
  }, [])

  // console.log(id);
  return (
    <>
        {userReview && <div id="user-review-div">
            <div className='d-flex justify-content-between'>
              <h5>Your Review</h5>
              <div style={{color:"white"}} className={isUserWantDelete?"d-none":""}>
                <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{editIconFunc(userReview[0]._id)}}></i>
                <i className="fa-solid fa-trash-can mx-2" onClick={onclickDeleteIconFunc}></i>
              </div> 
              {/* USER REVIEW DELETE ALERT */}
              <ReviewDeleteAlert id={userReview[0]._id}/>
            </div>
            <div id="rated-stars">
                <i className={`${userReview[0].starCount>=1?"fa-solid":"fa-regular"} fa-star`}></i>
                <i className={`${userReview[0].starCount>=2?"fa-solid":"fa-regular"} fa-star`}></i>
                <i className={`${userReview[0].starCount>=3?"fa-solid":"fa-regular"} fa-star`}></i>
                <i className={`${userReview[0].starCount>=4?"fa-solid":"fa-regular"} fa-star`}></i>
                <i className={`${userReview[0].starCount>=5?"fa-solid":"fa-regular"} fa-star`}></i>
            </div>
                           
            <p>{userReview[0].reviewMsg}</p>
            <h6> -You</h6>
        </div>} 

        <EditReviewModal editIconClickRef={editIconClickRef} reviewDetailForEdit={reviewDetailForEdit} setReviewDetailForEdit={setReviewDetailForEdit} id={id}/>
    </>
  )
}

export default UserReview