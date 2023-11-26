import React from 'react'

const AddReview = () => {
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
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            
            <form>
              <div className="mb-3">
                <textarea type="text" className="form-control" id="exampleInputExperience1" aria-describedby="experienceHelp" placeholder='Describe Your Experience'/>
              </div>

              <button className="btn btn-primary">Submit</button>
              <p className='mt-1' style={{fontWeight:"600", color:"#0000005e"}}>Scroll Down to See More Review &darr;</p>
            </form>
          </div>

          {/* USER REVIEW */}
          <div id="user-review-div">
            <div className='d-flex justify-content-between'>
              <h5>Your Review</h5>
              <div style={{color:"white"}}>
                <i className="fa-solid fa-pen-to-square mx-2"></i>
                <i className="fa-solid fa-trash-can mx-2"></i>
              </div> 
            </div>

            <div id="rated-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
                           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa placeat consequuntur rerum suscipit aliquid a aspernatur tempore quisquam, quis ducimus atque ipsum, perspiciatis, optio beatae?</p>
            <h6> -You</h6>
          </div>
    </div>
  )
}

export default AddReview