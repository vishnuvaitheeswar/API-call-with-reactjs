import React, { useState } from 'react'
import axios from "axios"
const Users = () => {
    const baseUrl="https://jsonplaceholder.typicode.com/users"
    const[users,setUsers]=useState([]);
    const handleUsers=async()=>{
        try{
        const response=await axios.get(baseUrl)
        setUsers(response.data)
      
        }catch(err){
            console.error(err)

        }


    }
  return (
    <div>
    
    <button onClick={handleUsers} className='button'>Users</button>
    {/* //map through the array of objects and display them */}
    <ul>
    {users.length >0 && users.map((user)=>(
        <li key={user.id}>
            <p>{user.body}</p>
            <div>id:{user.id}</div>
            <div>Name:{user.name}</div>
            <div>username:{user.username}</div>
            {/* <div>Address:{user.address.street}</div> */}
            
           
        </li>
            ))}
    </ul>
    </div>
    )
    }
export default Users;




        
    

    
     
 