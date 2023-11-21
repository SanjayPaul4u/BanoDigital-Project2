import React from 'react'

const OfferAlert = (props) => {
    const {IsScroll} = props

    // MY STYLE OBJECT CREATE📌
    const myStyle ={
        backgroundColor:"#9dacb6",
    }
  return (
<div className={`fixed-top`} >
    <div className="alert alert-warning alert-dismissible fade show text-center" role="alert" style={IsScroll?myStyle:{}}>
        <i className="fa-solid fa-circle-exclamation fa-rotate-180"></i><strong> Diwali Offer Going on </strong>| UP TO 75% | <strong><i class="fa-solid fa-phone"></i>9064784593 | <i class="fa-solid fa-envelope"></i> sanjoypaul655@gmail.com</strong>
        
    </div>
</div>
  )
}

export default OfferAlert