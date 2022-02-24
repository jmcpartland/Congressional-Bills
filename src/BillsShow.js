import React from 'react'
import { useParams } from "react-router-dom"

function BillsShow({ bills }) {
    const params = useParams() 
    
    const thisBill = bills.filter((b) => b.bill_id === params.id);
    
    function handleChange(e) {
        e.preventDefault();
        console.log(e.target.value)
    }

    return (
        <div>
            <p><b>Title:</b> {thisBill[0].title}</p>
            <p><b>Number:</b> {thisBill[0].number}</p>
            <p><b>Sponsored by:</b> {thisBill[0].sponsor_name} ({thisBill[0].sponsor_party})</p>
            <p><b>Comments:</b> {thisBill[0].comments}</p>
            <form>    
                <textarea 
                    name="Comment" 
                    onChange={handleChange}
                    value={""}
                    rows="10"cols="80"
                />
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}


export default BillsShow
