import React, { useContext, useEffect } from 'react'
import ReviewContext from '../../context/review/reviewContext';
import GetCookie from '../../hooks/getCookie';


const UserReview = () => {
  // using "useCotext" 📌
  const review_context = useContext(ReviewContext);
  const {getUserReviewApicall, userReview} = review_context;

  // USE EFFECT 📌
  useEffect(() => {
    if(GetCookie("bdigital-token")){
      getUserReviewApicall();
    }
    // eslint-disable-next-line
  }, [])

//   console.log(userReview);
  return (
    <>
        {userReview && <div id="user-review-div">
            <div className='d-flex justify-content-between'>
              <h5>Your Review</h5>
              <div style={{color:"white"}}>
                <i className="fa-solid fa-pen-to-square mx-2"></i>
                <i className="fa-solid fa-trash-can mx-2"></i>
              </div> 
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
    </>
  )
}

export default UserReview