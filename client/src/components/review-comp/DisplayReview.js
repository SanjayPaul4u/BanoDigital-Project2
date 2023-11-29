import React, { useContext, useEffect } from 'react'
import ReviewContext from '../../context/review/reviewContext';


const DisplayReview = () => {
  // using "useCotext" 📌
  const review_context = useContext(ReviewContext);
  const {getAllReviewApicall, allReview, capitalizedWord} = review_context;

   // USE EFFECT 📌
   useEffect(() => {
      getAllReviewApicall();
    // eslint-disable-next-line
  }, [])

  

  // console.log(allReview);
  return (
    <div>
      {/* DISPLAYING REVIEW BY ROW */}
      {allReview && <div className="row">
        {allReview.map((element)=>{
          return <div key={element._id} className="col-12 col-md-12 col-xl-12">
          <div className='display-review-card'>
                <div>
                    <div className='dp'>{element.name.charAt(0).toUpperCase()}</div>
                    <div className='review-star'>
                      <i className={`${element.starCount>=1?"fa-solid":"fa-regular"} fa-star`}></i>
                      <i className={`${element.starCount>=2?"fa-solid":"fa-regular"} fa-star`}></i>
                      <i className={`${element.starCount>=3?"fa-solid":"fa-regular"} fa-star`}></i>
                      <i className={`${element.starCount>=4?"fa-solid":"fa-regular"} fa-star`}></i>
                      <i className={`${element.starCount>=5?"fa-solid":"fa-regular"} fa-star`}></i>
                    </div>
                </div>
                <div className='sub-display-review-card'>
                  <p>{element.reviewMsg}</p>
                  <h6>- {capitalizedWord(element.name)}</h6>
                </div>
              </div>
          </div>
        })}
        
      </div>}
          
    </div>
  )
}

export default DisplayReview