import React, { useContext, useEffect } from 'react'
import "../../style/Review.css"
import WebDesignPng from '../../images/wev-design.png'
import {Link} from 'react-router-dom'
import ReviewContext from '../../context/review/reviewContext'
import ScrallingReviewContext from '../../context/review/scrallingReviewContext'
import Spinner from '../Spinner'


const Review = () => {
  // using "useContext" 📌
  const review_context = useContext(ReviewContext);
  const {capitalizedWord} = review_context;
  const scralling_review_context = useContext(ScrallingReviewContext);
  const {getAllReviewApicall, allReview,} = scralling_review_context;

   // USE EFFECT 📌
   useEffect(() => {
    if(allReview===null){
      getAllReviewApicall();
    }
  // eslint-disable-next-line
}, [])
  return (
    <div id='main-review'>
      <div className="row">

        {/* left-review-row */}
        <div className="col-12 col-md-12 col-xl-6" id='left-review-row'>
          <div  id='main-review-in=mg'>
              <img className='card-img-top' src={WebDesignPng} alt="imgError" />
          </div>
        </div>




        {/* right-review-row */}
        <div className="col-12 col-md-12 col-xl-6" id='right-review-row'>
          <div id='main-review-heading'>
              <h3>Rating & Reviews</h3>
              <h4>What Our Client Say</h4>
          </div>

          {/* REVIEW DIV */}
          <div id='reviews-div'>
            {allReview===null && <Spinner/>}

            {allReview && allReview.map((e, index)=>{
              if(index<2){
                return <div key={e._id} className='review-card' id="review-card-1">
                <div>
                    <div className='dp'>{e.name.charAt(0).toUpperCase()}</div>
                    <div className='review-star'>
                      <i className={`${e.starCount>=1?"fa-solid":"fa-regular"} fa-star`}></i>
                      <i className={`${e.starCount>=2?"fa-solid":"fa-regular"} fa-star`}></i>
                      <i className={`${e.starCount>=3?"fa-solid":"fa-regular"} fa-star`}></i>
                      <i className={`${e.starCount>=4?"fa-solid":"fa-regular"} fa-star`}></i>
                      <i className={`${e.starCount>=5?"fa-solid":"fa-regular"} fa-star`}></i>
                    </div>
                </div>
                <div className='sub-review-card'>
                    <p> {e.reviewMsg}</p>
                    <h6>- {capitalizedWord(e.name)}</h6>
                </div>
              </div>
              }else{
                return "";
              }
              
            })
            }

            <div id='main-review-bottoms'>
              <Link className='btn btn-sm btn-primary' to="/mainreview">Rate Us</Link>
              <Link className='btn btn-sm btn-primary mx-2' to="/mainreview">More Review</Link>
            </div>
            
          </div>
        </div>


      </div>        
    </div>
  )
}

export default Review