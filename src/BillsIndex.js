import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "./images/bills-icon.png";

function BillsIndex({ bills }) {
  
  const allBills = bills.map((bill) => {
    return (
      <div key={bill.bill_id}>
        <div className="bills-list" >
          <img src={logo} className="bills-logo" />
          <Link to={`/billsIndex/${bill.bill_id}`}>
            <div className="bill-short-title" >{bill.short_title}</div>
            <div className="bill-introduced-date" >Introduced on: {bill.introduced_date}</div>
          </Link>
        </div>
      </div>
    )
  });


  return (
    <div className="bills-index">
        <h1>Senate Bills Introduced In 2021</h1>
        {allBills}
    </div>
  )
}

export default BillsIndex