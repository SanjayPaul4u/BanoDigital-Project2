import React, { useContext, useEffect, useRef, useState } from 'react'
import "../style/Navbar.css"
import BrandLogo from '../images/connection.png'
import OfferAlert from './alers-comp/OfferAlert'
import { Link } from 'react-router-dom'
import AuthContext from '../context/auth/authContext'
import GetCookie from '../hooks/getCookie'


const Navbar = () => {
  const [IsScroll, setIsScroll] = useState(false);
  // using "useRef" 📌
  const hamburgerMenuClickRef = useRef();

  const responsiveClickFunc = () =>{
      hamburgerMenuClickRef.current.click();
  }

  // using "useContext" 📌
  const auth_context = useContext(AuthContext);
  const {user, getUserApiCall, logOutFunc} = auth_context;
  
  // USE EFFECT 📌
  useEffect(() => {
    if(GetCookie("bdigital-token")){
      getUserApiCall();
    }
    // eslint-disable-next-line
  }, [])
  
  
  // NAVBAR BACKGROUND COLOR WILL BE CHANGE WHILE SCROLL📌
  const changeBackgrond = ()=>{
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

  // console.log(user);
  return (
    <>
    <OfferAlert IsScroll={IsScroll}/>

    {/* MAIN NAV-BAR 📌  ----bg-danger*/}
    <nav className={` navbar navbar-expand-lg fixed-top ${!IsScroll?"my-default-navbar":"my-navbar-scroll"}`} id='main-navbar'>
        <div className={`container container-navbar`}>
            <img src={BrandLogo} alt="brandImgErr" id='brandLogo'/>
            <Link className={`navbar-brand ${!IsScroll?"default-navbar-brand-style":"navbar-brand-style"}`} to="/">BanoDigital</Link>

            <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" ref={hamburgerMenuClickRef} onClick={funcResponsive}>
            <span className="navbar-toggler-icon"></span>
            </button>

            {/* -----------------------------------------------------📌 */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='navbar-ul'>

                <li className="nav-item" onClick={responsiveClickFunc}>
                <Link className={`nav-link active ${!IsScroll?"default-text-color":"my-text-color"}`} aria-current="page" to="/">Home</Link>
                </li>
                
                <li className="nav-item" onClick={responsiveClickFunc}>
                <a className={`nav-link ${!IsScroll?"default-text-color":"my-text-color"}`} aria-current="page" href="/#main-whychooseus">Why We?</a>
                </li>

                <li className="nav-item" onClick={responsiveClickFunc}>
                <a className={`nav-link ${!IsScroll?"default-text-color":"my-text-color"}`} aria-current="page" href="/#main-price">Price</a>
                </li>

                <li className="nav-item" onClick={responsiveClickFunc}>
                <Link className={`nav-link ${!IsScroll?"default-text-color":"my-text-color"}`} aria-current="page" to="/mainreview">Rating & Reviews</Link>
                </li>

                <li className="nav-item" onClick={responsiveClickFunc}>
                <Link className={`nav-link ${!IsScroll?"default-text-color":"my-text-color"}`} aria-current="page" to="/contact">Contact</Link>
                </li>
                
                {!GetCookie("bdigital-token")&& <>
                <li className="nav-item" onClick={responsiveClickFunc}>
                <Link className={`nav-link ${!IsScroll?"default-text-color":"my-text-color"}`} aria-current="page" to="/login">LogIn</Link>
                </li>
                <li className="nav-item" onClick={responsiveClickFunc}>
                <Link className={`nav-link ${!IsScroll?"default-text-color":"my-text-color"}`} aria-current="page" to="/signup">SignUp</Link>
                </li>
                </>
                }
            </ul>
          {/* -----------------------------------------------------  📌*/}
              {/* SEARCH ICON 📌*/}
              <h6 className='mx-2 text-center'>{user.length===0?"user":user[0].email}</h6>
              {
                GetCookie("bdigital-token")&& 
                <div className='d-flex justify-content-center' onClick={responsiveClickFunc}>
                  <div className="btn btn-danger btn-sm me-2" onClick={logOutFunc}>LogOut</div>
                </div>
              }
               <div className='text-center' onClick={responsiveClickFunc}>
                <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar