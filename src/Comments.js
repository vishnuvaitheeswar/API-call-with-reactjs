import React from 'react'
import axios from 'axios';
import { useState } from 'react';
const Comments = () => {
    const baseURl="https://jsonplaceholder.typicode.com/comments"
    const[comments,setComments]=useState([]);
    const handleComments=async()=>{
        try{
        const response=await axios.get(baseURl)
        setComments(response.data)
        // console.log(response.data)
        }catch(err){
            console.error(err)

        }
    }
  return (
    <div>
    
    <button onClick={handleComments} className='button'>Comments</button>
    {/* //map through the array of objects and display them */}
    <ul>
    {comments.length >0 && comments.map((comment)=>(
        <li key={comment.id}>
            <div>id:{comment.id}</div>
            <div>Name:{comment.name}</div>
            <div>Email:{comment.email}</div>
            <p>body:{comment.body}</p>
        </li>
            ))}
    </ul>
    </div>

    
  )
   
  
}

export default Comments