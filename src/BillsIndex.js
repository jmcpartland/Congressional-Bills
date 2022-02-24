import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "./images/bills-icon.png";

function BillsIndex({ bills }) {

  const oneBill = bills.map((bill) => {

    return (
      <div key={bill.bill_id}>
      <Link to={`/billsIndex/${bill.bill_id}`}>
        <div className="box" >
          <img src={logo} className="bills-logo" />
          <p className="bill-short-title" >{bill.short_title}</p>
          <p className="bill-introduced-date" >Introduced on: {bill.introduced_date}</p>
        </div>
      </Link>
      </div>
    )
  });


  return (
    <>
        <h1>Senate Bills Introduced In 2021</h1>
        {oneBill}
    </>
  )
}

export default BillsIndex