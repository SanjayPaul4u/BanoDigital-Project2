import React from 'react'
import "../../style/Contact.css"
// import ContactImg from '../../images/contact.jpg'

const Contact = () => {
  return (
    <div className='container' id='main-contact'>
      <div id='bg-img-div'>
          {/* <img src={ContactImg} alt="ErrorImg" /> */}
      </div>

      <div id="content-div">
        <div id="blur-div">

          {/* FIRST DIV */}
          <div id="content-div-header">
              <div className="row">
                  <div className="col-6 col-md-6 col-xl-6" id='content-div-header-first-row'>
                      <h2>Contacts</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in sit, illo illum doloremque? Ullam ipsam maxime dolores nesciunt.</p>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
                  </div>
                  <div className="col-6 col-md-6 col-xl-6" id='content-div-header-second-row'>
                      <h5>Submit Contact Message</h5>
                      <form>

                        <div className="mb-3">
                          <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Your Name"/>
                        </div>

                        <div className="mb-3">
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                        </div>

                        <div className="mb-3">
                          <input type="number" className="form-control" id="exampleInputMobile1" aria-describedby="mobileHelp" placeholder="Mobile"/>
                        </div>

                        <div className="mb-3">
                          <input type="text" className="form-control" id="exampleInputMessage1" aria-describedby="messageHelp" placeholder="Message"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>


                        {/* <div id='footer-div'>
                          <p>Don't have account? <Link to="/signup">SignUp</Link></p>
                        </div> */}
                    </form>
                  </div>
              </div>
          </div>

          {/* SECOND DIV */}
          <div id="content-div-footer">
              <div className="contact-footer-topic">
                  <h5><i className="fa-solid fa-location-dot"></i> Office Location</h5>
                  <p>West Bengal, Alipurduar</p>
                  <p>Barobisha, Paulpara</p>
                  <p>736207</p>
              </div>

              <div className="contact-footer-topic">
                  <h5><i className="fa-solid fa-phone"></i> Phone</h5>
                  <p>+91 9064784593</p>
                  <p>+91 8016486592</p>
              </div>

              <div className="contact-footer-topic">
                  <h5><i className="fa-solid fa-clock"></i> Servicing Hours</h5> 
                  <p>Instant 24/7 Hours</p>
              </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact