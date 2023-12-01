import React from 'react'
import "../../style/Home.css"
import Banner from './Banner'
import Price from './Price'
import WhyChooseUs from './WhyChooseUs'
import Review from './Review'





const Home = () => {
  return (
    <div className='container ' id='main-home'>
        {/* <h1>This is Home page</h1> */}
        <Banner/>
        <Price/>
        <WhyChooseUs/>
        <Review/>

    </div>
  )
}

export default Home