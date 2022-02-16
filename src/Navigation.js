import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {

    return (
        <div>
        <NavLink
          className="links"
          to="/" exact
          activeStyle={{
            background: "darkgreen",
          }}
        >
          Home
        </NavLink>
        
        <NavLink
          className="links"
          to="/billsList" exact
          activeStyle={{
            background: "darkgreen",
          }}
        >
          Bills
        </NavLink>
      </div>
  )
}

export default Navigation