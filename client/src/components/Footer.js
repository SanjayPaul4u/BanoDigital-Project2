import React from 'react'
import '../style/Footer.css'
import linkedinImg from '../images/linkedin.png'
import whatsappImg from '../images/whatsapp.png'
import facebookImg from '../images/facebook.png'

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
            <li> <a href="/home"> Home </a> </li>
            <li> <a href="/about"> About </a> </li>
            <li> <a href="/contact"> Contact </a> </li>
            <li> <a href="/review"> Review </a> </li>
            <li> <a href="/price"> Price </a> </li>
          </ul>
        </div>
        <div className="main-footer-topic">
          <ul>
            <h4>Contact</h4>
            <li><i className="fa-solid fa-phone"></i> 9064784593</li>
            <li><i className="fa-solid fa-envelope"></i> sanjoypaul655@gmail.com</li>
            <li><i className="fa-brands fa-linkedin"></i> <a href="https://www.linkedin.com/in/sanjoy-paul-001605239">LinkedIn</a> </li>
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
          <a className='mx-2' href="/"><img src={facebookImg} alt="imgError" /></a>
          <a className='mx-2' href="/"><img src={linkedinImg} alt="imgError" /></a>
          <a className='mx-2' href="/"><img src={whatsappImg} alt="imgError" /></a>
        </div>
        <div>
            <p className='mt-3'>© 2024 BanoDigital FullStack Website Builder - All Rights Reserved</p>
        </div>
      </div>

    </div>
  )
}

export default Footer


// This is Main Footer page <br />
// attribute<br />
// flaticon<br />
// fontawesome<br />
// w3 school<br />
// chatGTP 3.5<br />
// nicepage<br />
// pixabay