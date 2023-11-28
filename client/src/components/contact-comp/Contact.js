import React, { useContext,useEffect,useState } from 'react'
import "../../style/Contact.css"
import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contactContext';
// import ContactImg from '../../images/contact.jpg'


const Contact = () => {
  // using "useContext"📌
  const auth_context = useContext(AuthContext);
  const {user} = auth_context;
  const contact_context = useContext(ContactContext);
  const {contactSubmitApiCall} = contact_context;
  
  const [contactData, setContactData] = useState({name: "", email:"", mobile: "", contactMsg:""})
  

  // Auto Name and Email Function Create📌
  const autoNameAndEmail = () =>{
    if(user.length!==0){
      setContactData({name: user[0].name, email:user[0].email, mobile: "", contactMsg:""})
    }
  }
   // VANISH NAME AND EMAIL AUTOMATE AFTER LOF OUT 📌
   const vanishAutomate = () =>{
    setContactData({name: "", email:"", mobile: "", contactMsg:""})
   }
  // USE EFFECT FUNCTIONI 📌
  useEffect(() => {
    autoNameAndEmail();
    // eslint-disable-next-line
  }, [])
  
 
  //ON CHANGE FUNCTION 📌
  const onChangeFunc = (event) =>{
    setContactData({...contactData, [event.target.name]:event.target.value})
  }
   
  // CONTACT SUBMIT FUNCTION 📌
  const contactSubmitFunc = async(event)=>{
    event.preventDefault();
    const data = await contactSubmitApiCall(contactData);
    if(data.success){
      setContactData({name: "", email:"", mobile: "", contactMsg:""})
    }else{
      console.log("In valid Contact Detail");
    }
  }

  // console.log(user);
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
                      <div className="btn btn-sm btn-primary d-none" onClick={vanishAutomate}>VanishAutomate</div>
                      <h2>Contacts</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in sit, illo illum doloremque? Ullam ipsam maxime dolores nesciunt.</p>
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
                  </div>
                  <div className="col-6 col-md-6 col-xl-6" id='content-div-header-second-row'>
                      <h5>Submit Contact Message</h5>
                      <form onSubmit={contactSubmitFunc}>

                        <div className="mb-3">
                          <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Your Name" onChange={onChangeFunc} name='name' value={contactData.name}/>
                        </div>

                        <div className="mb-3">
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={onChangeFunc} name='email' value={contactData.email}/>
                        </div>

                        <div className="mb-3">
                          <input type="number" className="form-control" id="exampleInputMobile1" aria-describedby="mobileHelp" placeholder="Mobile" onChange={onChangeFunc} name='mobile' value={contactData.mobile}/>
                        </div>

                        <div className="mb-3">
                          <input type="text" className="form-control" id="exampleInputMessage1" aria-describedby="contactMsgHelp" placeholder="Message" onChange={onChangeFunc} name='contactMsg' value={contactData.contactMsg}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>


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