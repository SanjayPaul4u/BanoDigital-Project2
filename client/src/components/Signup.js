import React from 'react'
import '../style/Signup.css'
import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <div className='container' id='main-signup'>
        <div id="sub-signup-div">
          <div id='heading-div'>
            <h3>SignUp</h3>
            <p>Creat Account</p>
          </div>
          <form>

            <div className="mb-3">
              <label htmlFor="exampleInputName1" className="form-label">Name</label>
              <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp"/>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputConfirmPassword1" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="exampleInputConfirmPassword1"/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>

            <div id='footer-div'>
              <p>Have you already account? <Link to="/login">LogIn</Link></p>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Signup