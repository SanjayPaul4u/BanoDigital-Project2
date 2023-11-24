import React from 'react'
import "./style/All.css"
import Navbar from './components/Navbar'
import Home from './components/home-comp/Home'
import Footer from './components/Footer'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import About from './components/about-comp/About'
import MainReview from './components/review-comp/MainReview'
import Contact from './components/contact-comp/Contact'
import Error404Page from './components/Error404Page'



const App = () => {
  return (
    <>
      
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/home' element={<Home/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            <Route exact path='/mainreview' element={<MainReview/>}/>
            <Route exact path='/*' element={<Error404Page/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App