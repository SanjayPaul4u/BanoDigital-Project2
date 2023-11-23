import React from 'react'
import '../../style/WhyChooseUs.css'
import thoughtGirl from '../../images/thoughtGirl.png'
import QualityImg from '../../images/quality.png'
import TimeImg from '../../images/time.png'
import UniqueImg from '../../images/unique.png'
import TeamImg from '../../images/team.png'


const WhyChooseUs = () => {
  return (
    <div id='main-whychooseus'>
        
        <div className="row">
          {/* LEFT SIDE */}
          <div className="col-10 col-md-6 col xl-6"  id='chooseus-left-row'>

            <div id="main-whychooseus-header">
              <h3>Why Choose Us</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam ullam amet blanditiis maxime molestiae debitis natus dolores sunt officiis, libero veritatis labore quae perspiciatis.</p>
            </div>

            <div className="row">
              <div className="col-6 col-md-6 col-xl-6 why-row">
                <div className=''>
                    <img src={QualityImg} alt="imgError" />
                    <h6>Quality Assurance</h6>
                </div>
              </div>
              
              <div className="col-6 col-md-6 col-xl-6 why-row">
                <div className=''>
                    <img src={TimeImg} alt="imgError" />
                    <h6>Timly Delivery</h6>
                </div>
              </div>

              <div className="col-6 col-md-6 col-xl-6 why-row">
                <div className=''>
                    <img src={UniqueImg} alt="imgError" />
                    <h6>Unique Design</h6>
                </div>
              </div>

              <div className="col-6 col-md-6 col-xl-6 why-row">
                <div className=''>
                    <img src={TeamImg} alt="imgError" />
                    <h6>Expert Teams</h6>
                </div>
              </div>
              
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-10 col-md-6 col xl-6" id='chooseus-right-row'>
            <div id="img-div">
              <img src={thoughtGirl} alt="imgError" id="chooseus-img" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default WhyChooseUs