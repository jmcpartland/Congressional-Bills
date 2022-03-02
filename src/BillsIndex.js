import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "./images/bills-icon.png";

function BillsIndex({ bills }) {
  
  const allBills = bills.map((bill) => {
    return (
      <div key={bill.bill_id}>
        <div className="billsindex" >
          <img src={logo} className="bills-logo" />
          <Link to={`/billsIndex/${bill.bill_id}`}>
            <p className="bill-short-title" >{bill.short_title}</p>
            <p className="bill-introduced-date" >Introduced on: {bill.introduced_date}</p>
          </Link>
        </div>
      </div>
    )
  });


  return (
    <>
        <h1>Senate Bills Introduced In 2021</h1>
        {allBills}
    </>
  )
}

export default BillsIndex