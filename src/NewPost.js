import React from 'react';

const NewPost = ({ handleSubmit, tittle, setTittle, body, setBody }) => {
    return (
        <main>
            <form className=" flex flex-col  items-center" onSubmit={handleSubmit}>
                <label className="mr-2" htmlFor="postTittle">Title:</label>
                <input
                    type="text"
                    className="border-2 rounded-xl px-4 py-2 mb-4 sm:mb-0 sm:mr-4"
                    value={tittle}
                    onChange={(e) => setTittle(e.target.value)}
                    placeholder="Title"
                    required
                />
                <label htmlFor="postBody" className="mr-2">Post:</label>
                <input
                    type="text"
                    className=" border-2 rounded-xl h-52 mb-4 sm:mb-0 sm:mr-4"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Body"
                    required
                />
                <button className="m-2 mx-16 border-2 rounded-xl">Submit</button>
               
            </form>
        </main>
    );
};

export default NewPost;