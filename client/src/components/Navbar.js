import React, { useState } from 'react'
import "../style/Navbar.css"
import BrandLogo from '../images/connection.png'
import OfferAlert from './alers-comp/OfferAlert'


const Navbar = () => {
  const [IsScroll, setIsScroll] = useState(false);

  
  
  // NAVBAR BACKGROUND COLOR WILL BE CHANGE WHILE SCROLL📌
  const changeBackgrond = ()=>{
    // console.log(window.scrollY)
    // console.log(window.scrollX)
    if(window.scrollY>=40){
      setIsScroll(true);
    }else{
      setIsScroll(false);
    }
  }
  window.addEventListener("scroll", changeBackgrond);
  const funcResponsive = () =>{
    setIsScroll(true)
  }
  
  
  return (
    <>
    <OfferAlert IsScroll={IsScroll}/>

    {/* MAIN NAV-BAR 📌 */}
    <nav className={` navbar navbar-expand-lg fixed-top ${!IsScroll?"my-default-navbar":"my-navbar-scroll"}`} id='main-navbar'>
        <div className={`container container-navbar`}>
            <img src={BrandLogo} alt="brandImgErr" id='brandLogo'/>
            <a className={`navbar-brand ${!IsScroll?"default-navbar-brand-style":"navbar-brand-style"}`} href="/">BanoDigital</a>

            <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={funcResponsive}>
            <span className="navbar-toggler-icon"></span>
            </button>

            {/* -----------------------------------------------------📌 */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='navbar-ul'>
                <li className="nav-item">
                <a className={`nav-link active ${!IsScroll?"default-text-color":"my-text-color"}`} aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">

                <a className={`nav-link ${!IsScroll?"default-text-color":"my-text-color"}`} aria-current="page" href="/about">About</a>
                </li>

                <li className="nav-item">
                <a className={`nav-link ${!IsScroll?"default-text-color":"my-text-color"}`} aria-current="page" href="/contact">Contact</a>
                </li>

                <li className="nav-item">
                <a className={`nav-link ${!IsScroll?"default-text-color":"my-text-color"}`} aria-current="page" href="#main-review">Review</a>
                </li>

                <li className="nav-item">
                <a className={`nav-link ${!IsScroll?"default-text-color":"my-text-color"}`} aria-current="page" href="#main-price">Price</a>
                </li>

                <li className="nav-item">
                <a className={`nav-link ${!IsScroll?"default-text-color":"my-text-color"}`} aria-current="page" href="#main-whychooseus">Why We?</a>
                </li>
            </ul>
          {/* -----------------------------------------------------  📌*/}
              {/* SEARCH ICON 📌*/}
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar