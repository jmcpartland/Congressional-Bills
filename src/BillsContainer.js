import React, { useState } from 'react'
import Bill from './Bill'

function BillsContainer({ bills }) {
  const oneBill = bills.map((bill) => <Bill bill={bill} />)

  return (
    <>
        <h1>Senate Bills Introduced In 2021</h1>
        {oneBill}
    </>
  )
}

export default BillsContainer