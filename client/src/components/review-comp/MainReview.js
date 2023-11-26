import React from 'react'
import "../../style/MainReview.css"
import DisplayReview from './DisplayReview'
import AddReview from './AddReview'


const MainReview = () => {
  return (
    <div className='container' id='main-mainReview'>

      <div className="row">
        
        <div className="col-10 col-md-6 col-xl-6" id='addReview-Row'>
            <AddReview/>
        </div>
        <div className="col-10 col-md-6 col-xl-6" id='displayReview-Row'>
            <DisplayReview/>
        </div>
        
      </div>

    </div>
  )
}

export default MainReview