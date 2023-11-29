import React, { useContext, useState } from 'react'
import getCookie from '../../hooks/getCookie'
import { useNavigate } from 'react-router-dom';
import ReviewContext from '../../context/review/reviewContext';
import UserReview from './UserReview';


const AddReview = () => {
  const [reviewDetail, setReviewDetail] = useState({starCount:0, reviewMsg:""});

  // use "useNavigate" 📌
  const navigate = useNavigate();
  // using "useCotext" 📌
  const review_context = useContext(ReviewContext);
  const {addReviewApicall} = review_context;
  
  // RATING COUNT FUNCTION 📌
  const ratingCountFunc = (countNumber)=>{
    if(getCookie("bdigital-token")){
      setReviewDetail({starCount:countNumber, reviewMsg: reviewDetail.reviewMsg});
    }else{
      navigate('/login')
    }
  }

  // ON CHANGE FUNCTION 📌
  const onChangeFunc = (event) =>{
    if(getCookie("bdigital-token")){
      setReviewDetail({starCount:reviewDetail.starCount, reviewMsg:event.target.value});
    }else{
      navigate('/login')
    }
  }


  // REVIEW SUBMIT FUNCTION📌
  const reviewSubmitFunc = async(event) =>{
    event.preventDefault();
    const data = await addReviewApicall(reviewDetail);
    if(data.success){
      setReviewDetail({starCount:0, reviewMsg: ""});
    }
    
  }  
  
  return (
    <div>
          {/* REVIEW PAGE HEADING */}
          <div id="main-review-heading">
              <h2>Rating & Reviews</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in sit, illo illum doloremque? Ullam ipsam maxime dolores nesciunt.</p>
              <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
          </div>

          {/* ADD REVIEW DIV */}
          <div id="add-review-div">
            <h5>Rate Us</h5>
            <div id="rating-stars">
              
              {/* START 1 📌 */}
              <i id='rating-star1' className={`fa-regular fa-star
               ${reviewDetail.starCount>=1?"clickRatingStar":""}
               ${reviewDetail.starCount>=1?"fa-solid":""}
               `}  onClick={()=>{ratingCountFunc(1)}}></i>

              {/* START 2 📌 */}
              <i id='rating-star2' className={`fa-regular fa-star
               ${reviewDetail.starCount>=1?"clickRatingStar":""}
               ${reviewDetail.starCount>=2?"fa-solid":""}
               `}  onClick={()=>{ratingCountFunc(2)}}></i>

              {/* START 3 📌 */}
              <i id='rating-star3' className={`fa-regular fa-star
               ${reviewDetail.starCount>=1?"clickRatingStar":""}
               ${reviewDetail.starCount>=3?"fa-solid":""}
               `}  onClick={()=>{ratingCountFunc(3)}}></i>

              {/* START 4 📌 */}
              <i id='rating-star4' className={`fa-regular fa-star
               ${reviewDetail.starCount>=1?"clickRatingStar":""}
               ${reviewDetail.starCount>=4?"fa-solid":""}
               `}  onClick={()=>{ratingCountFunc(4)}}></i>

              {/* START 5 📌 */}
              <i id='rating-star5' className={`fa-regular fa-star
               ${reviewDetail.starCount>=1?"clickRatingStar":""}
               ${reviewDetail.starCount>=5?"fa-solid":""}
               `}  onClick={()=>{ratingCountFunc(5)}}></i>

            </div>
            
            <form onSubmit={reviewSubmitFunc}>
              <div className="mb-3">
                <textarea type="text" className="form-control" id="exampleInputExperience1" aria-describedby="experienceHelp" placeholder='Describe Your Experience' value={reviewDetail.reviewMsg} name='reviewMsg' onChange={onChangeFunc} minLength={5} maxLength={200}/>
              </div>

              <p className={reviewDetail.reviewMsg.length>0 &&  reviewDetail.reviewMsg.length<5?"":"d-none"} id="err-showing-p">(At Least 5 Character Require)</p>

              {/*REVIEW SUBMIT BTN 📌*/}
              <button type="submit" disabled={reviewDetail.starCount===0 || reviewDetail.reviewMsg.length<5} className="btn btn-primary" >Submit</button>


              <p className='mt-1' style={{fontWeight:"600", color:"#0000005e"}}>Scroll Down to See More Review &darr;</p>
            </form>
          </div>


          {/* USER REVIEW */}
          <UserReview/>
    </div>
  )
}

export default AddReview