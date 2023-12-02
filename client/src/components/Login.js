import React, { useContext, useEffect, useState } from 'react'
import '../style/Login.css'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import AuthContext from '../context/auth/authContext'
import GetCookie from '../hooks/getCookie'




const Login = () => { 
  // using "useLocation"📌
  const location = useLocation();

  // STATES 📌
  const [userData, setUserData] = useState({email: "", password: ""});
  const [path, setPath] = useState(location.pathname)

  // using "useNavigate"
  const navigate = useNavigate();

  // using "useContext" 📌
  const auth_context = useContext(AuthContext);
  const {logInApiCall} = auth_context;

  // LOGIN SUBMIT FUNCTION 📌
  const loginSubmitFunc = async(event) =>{
    event.preventDefault();
    const data = await logInApiCall(userData);
    if(data.success){
      setUserData({email: "", password: ""});
      navigate(-1);
    }else{
      console.log("Invalid Creadential");
    }
    
  }
  // ON CHANGE FUNCTION
  const onChangeFunc = (event) =>{
    setUserData({...userData, [event.target.name]: event.target.value})
  }

  // using "useEffect"
  useEffect(() => {
    setPath(location.pathname);
    window.scrollTo(0, 0);

    if(GetCookie("bdigital-token") && path==="/login"){
      navigate(-1);
    }
    // eslint-disable-next-line
  }, [location])
  

  return (
    <div className='container' id='main-login'>
        <div id="sub-login-div" className='col-10 col-md-6 col-xl-4'>
          <div id='heading-div'>
            <h3>Login</h3>
          </div>
          <form onSubmit={loginSubmitFunc}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={onChangeFunc} value={userData.email} minLength={2} maxLength={25}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={onChangeFunc} value={userData.password} minLength={2} maxLength={25}/>
            </div>
            <button disabled={
              userData.email!=="" && 
              userData.password!==""?false: true
            } type="submit" className="btn btn-primary">Submit</button>

            <div id='footer-div'>
              <p>Don't have account? <Link to="/signup">SignUp</Link></p>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login