import React from 'react'
import "./style/All.css"
import Navbar from './components/Navbar'
import Home from './components/home-comp/Home'
import Footer from './components/Footer'





const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App