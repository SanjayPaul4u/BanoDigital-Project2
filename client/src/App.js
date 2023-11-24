import React from 'react'
import "./style/All.css"
import Navbar from './components/Navbar'
import Home from './components/home-comp/Home'
import Footer from './components/Footer'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'






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
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App