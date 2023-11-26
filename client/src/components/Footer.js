import React from 'react'
import '../style/Footer.css'
import linkedinImg from '../images/linkedin.png'
import whatsappImg from '../images/whatsapp.png'
import facebookImg from '../images/facebook.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='' id='main-footer'>

      {/* MAIN FOOTER - CONTENT*/}
      <div id='main-footer-content'>

        <div className="main-footer-topic">
          <ul>
            <h4>BanoDigital</h4>
            <li>We Build FullStack Website</li>
            <li>We Develop MERN WebApp</li>
          </ul>
        </div>
        <div className="main-footer-topic">
          <ul>
            <h4> Pages </h4>
            <li> <Link to="/home"> Home </Link> </li>
            <li> <Link to="/contact"> Contact </Link> </li>
            <li> <Link to="/mainreview"> Rate Us </Link> </li>
            <li> <Link to="/mainreview"> Rating And Reviews </Link> </li>
          </ul>
        </div>
        <div className="main-footer-topic">
          <ul>
            <h4>Contact</h4>
            <li><i className="fa-solid fa-phone"></i> 9064784593</li>
            <li><i className="fa-solid fa-envelope"></i> sanjoypaul655@gmail.com</li>
            <li><i className="fa-brands fa-linkedin"></i> <a href="https://www.linkedin.com/in/sanjoy-paul-001605239" rel="noreferrer" target='_blank'>LinkedIn</a> </li>
          </ul>
        </div>
        <div className="main-footer-topic">
          <ul>
            <h4>Atribute</h4>
            <li>Flaticon</li>
            <li>FontAwesome</li>
            <li>w3 school</li>
            <li>ChatGTP 3.5</li>
            <li>Nicepage</li>
            <li>Pixabay</li>
          </ul>
        </div>

      </div>

      {/* SUB MAIN FOOOTER */}
      <div id='sub-main-footer'>
        <div className='me-4'>
        <img src={facebookImg} alt="imgError" />
          {/* <a className='mx-2' href="/"><img src={facebookImg} alt="imgError" /></a> */}

          <a className='mx-2' href="https://www.linkedin.com/in/sanjoy-paul-001605239" rel="noreferrer" target='_blank'><img src={linkedinImg} alt="imgError" /></a>

          <a className='mx-2' href="https://wa.me/9064784593" rel="noreferrer" target='_blank'><img src={whatsappImg} alt="imgError" /></a>
        </div>
        <div>
            <p className='mt-3'>© 2024 BanoDigital FullStack Website Builder - All Rights Reserved</p>
        </div>
      </div>

    </div>
  )
}

export default Footer
