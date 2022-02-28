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
        setComments([...comments, comment])
        // setBills([...bills, thisBill.comments])
    }
    
    function submit(e) {
        e.preventDefault();
        updateComments()

        console.log(comments)
        fetch(thisBillUrl, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({"comments": comments})
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
    
    
    function handleChange(e) {
        setComment(e.target.value)
    }

    return (
        <div>
            <p><b>Title:</b> {thisBill.title}</p>
            <p><b>Number:</b> {thisBill.number}</p>
            <p><b>Sponsored by:</b> {thisBill.sponsor_name} ({thisBill.sponsor_party})</p>
            <ul><b>Comments:</b> {comments.map((c) => <li key={c}>{c}</li>)}</ul>
            <br></br>
            <form onSubmit={submit}>
                <label>Add Comments: </label><br></br>
                <textarea 
                    name="Comment" 
                    onChange={handleChange}
                    value={comment}
                    rows="10"cols="80"
                />
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default BillsShow