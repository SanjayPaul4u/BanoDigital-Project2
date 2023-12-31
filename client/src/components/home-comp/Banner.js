import React from 'react'
import "../../style/Banner.css"
import img1 from "../../images/img1.png"
import img2 from "../../images/img2.png"
import img3 from "../../images/img3.png"
import img4 from "../../images/img4.png"
import { Link } from 'react-router-dom'


const Banner = () => {
  return (
    <div id='main-banner'>
        <div className="row">
            {/* left banner row (left -HEAD)-------------------------------------------------- */}
                <div className='col-12 col-md-6 col-xl-6' id="left-banner-raw">
                    <h3>Empower Your Brand and Success with </h3>
                    <h1>Affordable Excellence <span>Websites!</span> </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, unde, hic doloribus pariatur modi mollitia ex culpa ad iure exercitationem excepturi maxime rerum impedit natus quis nesciunt dicta magni voluptate?</p>
                    <h5>Product Rate</h5>
                    <div id='five-star'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>

                    <div className='mt-4'>
                        {/* button todo */}
                        <Link to='/contact' id='banner-btn' className="btn btn-primary">Order Now</Link>
                    </div>
                    
                    <div className='textForUnderstandUser1'>
                        <h6>Scroll down to see other content &darr;</h6>
                    </div>
                </div>
            {/* right banner row (right-CAROUSEL) --------------------------------------------------*/}
                <div className='col-12 col-md-6 col-xl-6' id="right-banner-row">
                    <div className="row">



                    {/* LEFT -  CARAUSEL1  */}
                    <div className="col-12 col-md-12 col-xl-8" id='left-carausel-row-1'>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>

                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="imgErr"/>
                            </div>
                            <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="imgErr"/>
                            </div>
                            <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="imgErr"/>
                            </div>
                            <div className="carousel-item">
                            <img src={img4} className="d-block w-100" alt="imgErr"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor:"#b7b7b7"}}></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" >
                            <span className="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:"#b7b7b7"}}></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    </div>

                    {/* RIGHT - CARAUSEL2  */}
                    <div className="col-xl-4 position-relative" id='right-carausel-row-2' style={{overflow:"hidden"}}>
                        <div id="carouselExampleControls" className="carousel slide position-absolute" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="imgErr"/>
                            </div>
                            <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="imgErr"/>
                            </div>
                            <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="imgErr"/>
                            </div>
                            <div className="carousel-item">
                            <img src={img4} className="d-block w-100" alt="imgErr"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev d-none" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next d-none" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>




                        <div className='textForUnderstandUser2'>
                            <h6 >Some demo websites</h6>
                        </div>
                    </div>
                </div>
             {/* right banner end--------------------------------------------*/}
        </div>           
    </div>
    
  )
}

export default Banner