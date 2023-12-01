import React from 'react'
import "../../style/Price.css"
import { Link } from 'react-router-dom'



const Price = () => {
  return (
    <div id='main-price'>
      {/* MAIN PRICE HEAD */}
      <div id='main-price-header'>
        <h3>Pricing Plans</h3>
        <p>Small pricing plans for your creative business. build your <br /> website from here with best feature and design</p>
      </div>


    {/* MAIN PRICE BODY */}
      <div id='main-price-body'>
          <div className="row">


              <div className="price-list col-10 col-md-6 col-xl-3 mb-4" id='price-list-1'>
              <div className="card price-card">
                  <h5 className="card-title">Portfolio</h5>
                <div className="card-body">
                  <div className='card-body-head'>
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                    <h3> 9,999</h3>
                  </div>
                  <h6>Onwords</h6>
                  <p className="card-text">One (or 2) Page Websites<br />Photography & Portfolios <br />2 Week Included Support<br />1 Year Free Domain*</p>
                  <div>
                    <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                  </div>
                </div>
              </div>
              </div>

              <div className="price-list col-10 col-md-6 col-xl-3 mb-4" id='price-list-1'>
              <div className="card price-card">
                  <h5 className="card-title">Business</h5>
                <div className="card-body">
                  <div className='card-body-head'>
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                    <h3> 14,999</h3>
                  </div>
                  <h6>Onwords</h6>
                  <p className="card-text">Agency / School Websites<br />Single Product Store<br />1 Month Included Support<br />1 Year Free Domain*</p>
                  <div>
                  <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                  </div>
                </div>
              </div>
              </div>

              <div className="price-list col-10 col-md-6 col-xl-3 mb-4" id='price-list-1'>
              <div className="card price-card">
                  <h5 className="card-title">E-Commerce</h5>
                <div className="card-body">
                  <div className='card-body-head'>
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                    <h3> 19,999</h3>
                  </div>
                  <h6>Onwords</h6>
                  <p className="card-text">Categorized Products<br />Multi Featured Store<br />2 Month Included Support<br />2 Years Free Domain*</p>
                  <div>
                  <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                  </div>
                </div>
              </div>
              </div>

              <div className="price-list col-10 col-md-6 col-xl-3 mb-4" id='price-list-1'>
              <div className="card price-card">
                  <h5 className="card-title">Customize</h5>
                <div className="card-body">
                  <div className='card-body-head'>
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                    <h3> Quote</h3>
                  </div>
                  <h6>Quotation</h6>
                  <p className="card-text">Fully Customized<br />Web Apps & Dashboards <br />3 Month Included Support the <br />2 Years Free Domain*</p>
                  
                  <div>
                  <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                  </div>
                </div>
              </div>
              </div>



          </div>
      </div>
    </div>
  )
}

export default Price