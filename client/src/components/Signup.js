import React, { useContext, useState } from 'react'
import '../style/Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../context/auth/authContext'



const Signup = () => {
  const [userData, setUserData] = useState({name: "", email: "", password :"", confirmPassword:""});
   // using "useNavigate"
   const navigate = useNavigate();

  // Using Context
  const auth_context = useContext(AuthContext);
  const {singUpApiCall} = auth_context;

  // onChange FUNCTION
  const onChangeFunc = (event) =>{
    setUserData({...userData, [event.target.name]: event.target.value})
  }

  // Sign up submit Function
  const signupSubmitFunc = async (event) =>{
    event.preventDefault();
    const data = await singUpApiCall(userData);
    if(data.success){
      setUserData({name: "", email: "", password :"", confirmPassword:""});
      navigate("/");
    }else{
      console.log("Invalid Creadential");
    }
  }
  return (
    <div className='container' id='main-signup'>
        <div id="sub-signup-div">
          <div id='heading-div'>
            <h3>SignUp</h3>
            <p>Creat Account</p>
          </div>
          <form onSubmit={signupSubmitFunc}>

            <div className="mb-3">
              <label htmlFor="exampleInputName1" className="form-label">Name</label>
              <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" name='name' onChange={onChangeFunc} value={userData.name} minLength={3} maxLength={25}/>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={onChangeFunc} value={userData.email}/>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={onChangeFunc} value={userData.password} minLength={3} maxLength={20}/>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputConfirmPassword1" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="exampleInputConfirmPassword1" name='confirmPassword' onChange={onChangeFunc} value={userData.confirmPassword}  minLength={3} maxLength={20}/>
            </div>

            <button disabled={
              userData.name !== "" && userData.email !== "" && userData.password !== "" && userData.confirmPassword !== ""?false: true
              } type="submit" className="btn btn-primary">Submit</button>

            <div id='footer-div'>
              <p>Have you already account? <Link to="/login">LogIn</Link></p>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Signup