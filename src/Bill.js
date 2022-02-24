import React from 'react'
import logo from "./images/bills-icon.png"

function Bill({ bill }) {
  // console.log(bill)
  return (
      <div className="box">
          <img src={logo} className="bills-logo" />
          <p className="bill-short-title" >{bill.short_title}</p>
          <p className="bill-introduced-date" >Introduced on: {bill.introduced_date}</p>
      </div>
  )
}

export default Bill