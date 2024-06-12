import React from 'react'
import { useParams } from 'react-router';
import  { useEffect } from 'react';

const EditPost = ({posts,handleEdit,editBody,setEditBody,editTittle,setEditTittle}) => {
    const {id}=useParams();
    const post=posts.find(post=>(post.id).toString()===id)

useEffect(() => {
    if(post){
    setEditBody(post.body);
    setEditTittle(post.tittle);
    }
}, [post,setEditBody,setEditTittle])
    return (
        <main>
            {editTittle&&
            <>
           
            <form className=" flex flex-col  items-center" onSubmit={(e)=>e.preventDefault()}>
            <h2 className="text-4xl text-mono">Edit Post</h2>
                <label className="mr-2" htmlFor="postTittle">Title:</label>
                <input
                    type="text"
                    className="border-2 rounded-xl px-4 py-2 mb-4 sm:mb-0 sm:mr-4"
                    value={editTittle}
                    onChange={(e) => setEditTittle(e.target.value)}
                    placeholder="Title"
                    required
                />
                <label htmlFor="postBody" className=" mr-2">Post:</label>
                <input
                    type="text"
                    className=" border-2 rounded-xl h-52 mb-4 sm:mb-0 sm:mr-4"
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                    placeholder="Body"
                    required
                />
                <button 
                type="submit"
                onClick={()=>handleEdit(post.id)}
                className="m-2 mx-16 border-2 rounded-xl">Submit</button>
               
            </form>
            </>
            }
            {!editTittle&&
            <h1>Post not Found</h1>
            }
        </main>
    )
}

export default EditPost
