import React, { useState } from 'react'
import Bill from './Bill'

function BillsList({bills}) {

  const allBills = bills.map((bill) => {
    return <Bill bill={bill} /> 
  })

  console.log(allBills)

  return (
    <div>
        <h1>Bills Introduced Since </h1>
        {allBills}
    </div>
  )
}

export default BillsList