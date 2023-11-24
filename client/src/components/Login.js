import React from 'react'
import '../style/Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='container' id='main-login'>
        <div id="sub-login-div">
          <div id='heading-div'>
            <h3>Login</h3>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>

            <div id='footer-div'>
              <p>Don't have account? <Link to="/signup">SignUp</Link></p>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login