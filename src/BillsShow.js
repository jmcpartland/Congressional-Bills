import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

function BillsShow({ bills, setBills }) {
    const params = useParams() 
    const thisBill = bills.find((b) => b.bill_id === params.id);
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])
    const thisBillUrl = `http://localhost:3001/bills/${thisBill.id}`


    useEffect(() => {
        setComments([...thisBill.comments])
    }, [])

    function updateComments() {
        const c = comments.push(comment)
        setComments(() => comments)
        setBills([...bills, (thisBill.comments = [comments])])
        setComment("")
    }
    
    function submit(e) {
        e.preventDefault();
        updateComments()
        
        fetch(thisBillUrl, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'comments': comments
            })
        })
        .then(response => response.json(comments))
    }
    
    function handleChange(e) {
        setComment(e.target.value)
    }

    return (
        <div className="bill-details">
            <p className="bill-specs"><b>Bill Title:</b> {thisBill.title}</p>
            <p className="bill-specs"><b>Bill Number:</b> {thisBill.number}</p>
            <p className="bill-specs"><b>Sponsored by:</b> {thisBill.sponsor_name} ({thisBill.sponsor_party})</p>
            <p className="bill-specs"><b>Sponsor State:</b> {thisBill.sponsor_state}</p>
            <p className="bill-specs"><b>Subject:</b> {thisBill.primary_subject}</p>
            <p className="bill-specs"><b>Summary:</b> {thisBill.summary}</p>
            
            <p className="bill-specs"><b>Comments:</b> {comments.map((c) => <li key={c}>{c}</li>)}</p>
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