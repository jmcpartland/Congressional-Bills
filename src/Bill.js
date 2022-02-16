import React from 'react'

function Bill({ bill }) {
  console.log(bill)
  return (
    <div>
        <p>{bill.short_title}</p>
    </div>
  )
}

export default Bill