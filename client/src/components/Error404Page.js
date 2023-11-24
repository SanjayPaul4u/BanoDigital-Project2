import React from 'react'
import "../style/Error404Page.css"
import {Link} from 'react-router-dom'

const Error404Page = () => {
  return (
    <div className='container' id='main-404page'>
      <div id="heading">
        <h2>404</h2>
      </div>

        <div id="sub-404page">
          <h2>Sorry Page Not Found</h2>
          <p>The page you requested could not be found</p>
          <Link className="btn btn-primary" to="/home">Go Back to Home</Link>
        </div>
    </div>

  )
}

export default Error404Page