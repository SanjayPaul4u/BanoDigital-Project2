import React, { useContext, useEffect } from 'react'
import ReviewContext from '../../context/review/reviewContext';
import ScrallingReviewContext from '../../context/review/scrallingReviewContext';
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from '../Spinner';




const DisplayReview = () => {
  // using "useCotext" 📌
  const review_context = useContext(ReviewContext);
  const {capitalizedWord} = review_context;
  const scralling_review_context = useContext(ScrallingReviewContext);
  const {getAllReviewApicall, allReview, total_result, fetchMoreData} = scralling_review_context;

   // USE EFFECT 📌
   useEffect(() => {
    if(allReview===null){
      getAllReviewApicall();
    }
    // eslint-disable-next-line
  }, [])

  

  // console.log(allReview);
  return (
    <>
      {allReview===null && <Spinner/>}


      {/* DISPLAYING REVIEW BY ROW */}
      {allReview && <div className="row">
      <InfiniteScroll
        dataLength={allReview.length}
        next={fetchMoreData}
        hasMore={allReview.length!==total_result  && allReview.length<total_result}
        loader={<Spinner/>}
      >


        {allReview.map((element)=>{
          return <div key={element._id} className="col-12 col-md-12 col-xl-12">
          <div className='display-review-card'>
                <div>
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
        

        </InfiniteScroll>
      </div>}
          
    </>
  )
}

export default DisplayReview