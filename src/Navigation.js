import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {

    return (
      <div className="links">
        <NavLink
          className="button"
          to="/" exact
          activeStyle={{
            background: "darkgreen",
          }}
        >
          Home
        </NavLink>
        
        <NavLink
          className="button"
          to="/billsIndex" exact
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