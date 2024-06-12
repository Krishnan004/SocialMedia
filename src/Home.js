import React from 'react'
import Feed from './Feed'

const Home = ({posts}) => {
    return (
        <main>
            {posts.length ?(
            <Feed posts={posts}/>
            ):(
                <p>No post to Display</p>
            )}
        </main>
    )
}

export default Home
