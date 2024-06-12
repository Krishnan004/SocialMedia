import React from 'react'
import { Link } from "react-router-dom";

const Post = ({post}) => {
    return (
        <article className="p-2 border-2 hover:bg-slate-600">
        <Link to={`post/${post.id}`}>
            <h2 className="text-2xl ">{post.tittle}</h2>
            <p className="text-xs text-thin">{post.datetime}</p>
            </Link>
            <p className="font-serif text-block">
                {(post.body).length<=25
                ?post.body:`${(post.body).slice(0,25)}...`}
            </p>
        </article>
    )
}

export default Post
