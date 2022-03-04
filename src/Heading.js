import React from 'react'
import logo from "./images/US-Flag-waving(sm).png"
import Navigation from './Navigation'


function Heading() {

  return (
    <div className="heading" >
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="title">
        <h1>United States Congressional Bills</h1>
      </div>
        <Navigation />
    </div>
  )
}

export default Heading