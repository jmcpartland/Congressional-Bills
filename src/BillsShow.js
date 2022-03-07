import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

function BillsShow({ bills, updateBill }) {
    const params = useParams() 
    const thisBill = bills.find((b) => b.bill_id === params.id);
    const [comment, setComment] = useState("")
    const thisBillUrl = `http://localhost:3001/bills/${thisBill.id}`

    
    function submit(e) {
        e.preventDefault();
        const c = [...thisBill.comments, comment]

        fetch(thisBillUrl, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'comments': c
            })
        })
        .then(response => response.json())
        .then(bill => {
            updateBill(bill)
            setComment("")
        })
    }
    
    function handleChange(e) {
        setComment(e.target.value)
    }

    return (
            <div className="bill-details">
                <p className="subject">subject: </p>
                <p className="subject-title">{thisBill.primary_subject.toUpperCase()}</p>
                <p className="bill-specs"><b>Bill Title:</b> {thisBill.title}</p>
                <p className="bill-specs"><b>Bill Number:</b> {thisBill.number}</p>
                <p className="bill-specs"><b>Sponsored by:</b> {thisBill.sponsor_name} ({thisBill.sponsor_party})</p>
                <p className="bill-specs"><b>Sponsor State:</b> {thisBill.sponsor_state}</p>
                <p className="bill-specs"><b>Summary:</b> {thisBill.summary}</p>
                
                <p className="bill-specs"><b>Comments:</b> {thisBill.comments.map((c) => <li key={c}>{c}</li>)}</p>
                <br></br>
                <form onSubmit={submit}>
                    <label><b>Add Comments:</b> </label><br></br>
                    <textarea 
                        name="Comment" 
                        onChange={handleChange}
                        value={comment}
                        rows="10"cols="80"
                    />
                    <br></br>
                    <input  className="button" type="submit" value="Submit" />
                </form>
            </div>
    )
}

export default BillsShow