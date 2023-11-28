import React from 'react'
import "../../style/Review.css"
import WebDesignPng from '../../images/wev-design.png'
import {Link} from 'react-router-dom'

const Review = () => {
  return (
    <div id='main-review'>
      <div className="row">

        {/* left-review-row */}
        <div className="col-10 col-md-6 col-xl-6" id='left-review-row'>
          <div id='main-review-in=mg'>
              <img src={WebDesignPng} alt="imgError" />
          </div>
        </div>




        {/* right-review-row */}
        <div className="col-10 col-md-6 col-xl-6" id='right-review-row'>
          <div id='main-review-heading'>
              <h3>Rating & Reviews</h3>
              <h4>What Our Client Say</h4>
          </div>

          {/* REVIEW DIV */}
          <div id='reviews-div'>

            <div className='review-card' id="review-card-1">
              <div>
                  <div className='dp'>D</div>
                  <div className='review-star'>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
              </div>
              <div className='sub-review-card'>
                  <p>Exceptional service! Their team delivers top-notch websites with creativity and precision. Timely, reliable, and a pleasure to work with</p>
                  <h6>- Dipanjan</h6>
              </div>
            </div>

            <div className='review-card' id="review-card-2">
              <div>
                  <div className='dp'>S</div>
                  <div className='review-star'>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
              </div>
              <div className='sub-review-card'>
                <p>Reliable full-stack expertise! Crafted our website seamlessly, from captivating front-end design to robust back-end functionality. Exceptional service, highly recommended!</p>
                <h6>- Suma</h6>
              </div>
            </div>

            <div className=''>
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