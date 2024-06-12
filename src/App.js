import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Routes,Route, useNavigate } from "react-router-dom";
import React, { useState,useEffect } from 'react';
import { format } from "date-fns";
import api from "./api/posts"
import EditPost from "./EditPost";



function App() {

  
  const navigate=useNavigate();
  const [searchResult,setSearchResult]=useState([])
  const [serach,setSearch]=useState('')
  const [postTittle,setPostTittle]=useState('')
  const [postBody,setPostBody]=useState('')
  const [editTittle,setEditTittle]=useState('')
  const [editBody,setEditBody]=useState('')
  const [posts,setPosts]=useState([])

  useEffect(()=>{
      const fetchPosts=async()=>{
        try {
          const response=await api.get('/posts')
          setPosts(response.data)
        } catch (error) {
          if(error.response)
            {console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.header)}
          else{
            console.log(`Error:${error.message}`)
          }
        }
         
      }
      fetchPosts();
  },[])

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const id=posts.length ?(posts[posts.length-1].id+1):1;
    const datetime=format(new Date(),'mmmm dd,yyyy pp');
    const newPost={id,tittle:postTittle,datetime,body:postBody}
    try{
    const response=await api.post('/posts',newPost)
    const allPost=[...posts,response.data]
    setPosts(allPost);
    setPostTittle('')
    setPostBody('')
    navigate('/');
    }catch (error) {
        console.log(`Error:${error.message}`)
    }
  }

  const handleEdit=async(id)=>{
    const datetime=format(new Date(),'mmmm dd,yyyy pp');
    const newPost={id,tittle:editTittle,datetime,body:editBody}
    try {
      const response=await api.put(`/posts/${id}`,newPost)
      setPosts(posts.map((post)=>post.id===id?{...response.data}:post))
      setEditTittle('')
      setEditBody('')
      navigate('/');
    } catch (error) {
      console.log(`Error:${error.message}`)
  }
    
  }

  const handleDelete=async(id)=>{
    try
    {
      await api.delete(`posts/${id}`)
      const filteredItems=posts.filter((post)=>post.id!==id)
      setPosts(filteredItems)
      navigate('/');}
      catch (error) {
          console.log(`Error:${error.message}`)
      }
  }

  useEffect(() => {
    const filteredResults=posts.filter((post)=>
    ((post.body).toLowerCase()).includes((serach).toLowerCase())||
    (post.tittle).toLowerCase().includes((serach).toLowerCase()));
    setSearchResult(filteredResults.reverse());
  }, [posts,serach])

  


 
    
  return (
    <div className="mx-16 border-2 border-black h-screen">
      


      <Header Tittle={"Social Media"} />
      <Nav 
      serach={serach}
      setSearch={setSearch}
      />
       <Routes>
            <Route  path="/"  element={<Home posts={searchResult} />} />
            <Route path="/post" >
            <Route index element={<NewPost handleSubmit={handleSubmit} tittle={postTittle} setTittle={setPostTittle} body={postBody} setBody={setPostBody} />} />
            <Route path=":id" element={<PostPage posts={posts} handleDelete={handleDelete}/>}/>
            </Route>
            <Route path="/edit/:id" element={<EditPost handleEdit={handleEdit} editBody={editBody} setEditBody={setEditBody} editTittle={editTittle} setEditTittle={setEditTittle} posts={posts}/>}/>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Missing />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
