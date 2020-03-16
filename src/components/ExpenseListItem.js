import React from 'react'
import {Link} from 'react-router-dom'



const ExpenseListItem = ({  description, amount, createdAt,id}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        
        <p> {id}</p>
        <p>{amount} - {createdAt} </p>
        
       
    </div>
)




export default ExpenseListItem