import React from 'react'
import '../style/Footer.css'
import linkedinImg from '../images/linkedin.png'
import whatsappImg from '../images/whatsapp.png'
import facebookImg from '../images/facebook.png'

const Footer = () => {
  return (
    <div className='' id='main-footer'>
      <div>
        This is Main Footer page <br />
        attribute<br />
        flaticon<br />
        fontawesome<br />
        w3 school<br />
        chatGTP 3.5<br />
        nicepage<br />
        pixabay
      </div>

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