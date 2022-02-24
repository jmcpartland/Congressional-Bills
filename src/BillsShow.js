import React from 'react'
import { useParams } from "react-router-dom"

function BillsShow({ bills }) {
    const params = useParams() 
    
    const thisBill = bills.filter((b) => b.bill_id === params.id);
    
    return (
        <div>
            <p>Title: {thisBill[0].title}</p>
            <p>Number: {thisBill[0].number}</p>
            <p>Sponsored by: {thisBill[0].sponsor.name} {thisBill[0].sponsor.party}</p>

        </div>
    )
}


export default BillsShow
