import React from 'react'
import "./style/All.css"
import Navbar from './components/Navbar'
import Home from './components/home-comp/Home'
import Footer from './components/Footer'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import MainReview from './components/review-comp/MainReview'
import Contact from './components/contact-comp/Contact'
import Error404Page from './components/Error404Page'
import MainAlert from './components/alers-comp/MainAlert'

import AuthState from './context/auth/authState'
import ContactState from './context/contact/contactState'
import AlertState from './context/alert/alertState'
import ReviewState from './context/review/reviewState'








const App = () => {
  return (
    <>
      <AlertState>
      <ReviewState>
      <ContactState>
      <AuthState>
        <BrowserRouter>
          <Navbar/>
          <MainAlert/>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/home' element={<Home/>}/>
              <Route exact path='/login' element={<Login/>}/>
              <Route exact path='/signup' element={<Signup/>}/>
              <Route exact path='/contact' element={<Contact/>}/>
              <Route exact path='/mainreview' element={<MainReview/>}/>
              <Route exact path='/*' element={<Error404Page/>}/>
            </Routes>
          <Footer/>
        </BrowserRouter>
      </AuthState>
      </ContactState>
      </ReviewState>
      </AlertState>
    </>
  )
}

export default App