import React from 'react'
import "../../style/Home.css"
import Banner from './Banner'


const Home = () => {
  return (
    <div className='container ' id='main-home'>
        {/* <h1>This is Home page</h1> */}
        <Banner/>
    </div>
  )
}

export default Home