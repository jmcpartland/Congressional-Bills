import React, { useState } from 'react'
import Bill from './Bill'
import logo from "./images/bills-icon.png"

function BillsList({bills}) {

  const allBills = bills.map((bill) => {
    return (
      <div className="box">
        <img src={logo} className="bills-logo" />
        <span className="bill-short-title" >{bill.short_title}</span>
        <span className="bill-introduced-date" >Introduced on: {bill.introduced_date}</span>
      </div>
    ) 
  })

  return (
    <div>
        <h1>Senate Bills Introduced In 2021</h1>
        {allBills}
    </div>
  )
}

export default BillsList