import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';



const PostPage = ({posts,handleDelete}) => {
    const {id}=useParams();
    const post=posts.find(post=>(post.id).toString()===id);
    return (
        <main>
            <article className="m-2">
                {post&&
                <>
                    <h2 className=" text-2xl ">{post.tittle}</h2>
                    <p className="mb-2 text-sm">{post.datetime}</p>
                    <p className="mb-2 text-mono">
                    {post.body}</p>
                    <button
                    onClick={()=>handleDelete(post.id)}
                    className="p-2 border-2 rounded-xl bg-red-600">Delete </button>
                    <Link to={`/edit/${post.id}`}>
                     <button
                    className="p-2 border-2 rounded-xl bg-red-600">Edit </button>
                    </Link>
                </>
                }
                {!post&&
                    <>
                    <p>Post Not Found</p>
                    </>
                }
            </article>
            
        </main>
    )
}

export default PostPage
