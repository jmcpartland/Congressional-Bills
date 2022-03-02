import React from 'react'
import logo from "./images/US-Flag-waving.png"
import Navigation from './Navigation'


function Heading() {

  return (
    <div className="heading" >
      <div>
        <img className="logo" src={logo} className="us-flag" />
      </div>
      <div className="title">
        <h1>United States Bills</h1>
      </div>
        <Navigation />
    </div>
  )
}

export default Heading