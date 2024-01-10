import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const Posts = () => {
    const baseUrl="https://jsonplaceholder.typicode.com/posts"
    const[posts,setPosts]=useState([]);
    const handlePosts=async()=>{
        try{
        const response=await axios.get(baseUrl)
        setPosts(response.data)
        // console.log(response.data)
        }catch(err){
            console.error(err)

        }

    }
  return (
    <div>
    
    <button onClick={handlePosts} className='button'>Posts</button>
    {/* //map through the array of objects and display them */}
    <ul>
    {posts.length >0 && posts.map((post)=>(
        <li key={post.id}>
            <div>id:{post.id}</div>
            <div>title:{post.title}</div>
            <p>body:{post.body}</p>
            </li>
            ))}
    </ul>
    </div>

    
  )
}

export default Posts;