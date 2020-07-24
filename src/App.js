import React, { useState, useEffect }  from 'react';
import './App.css';
import CardList from './components/Card/CardList'
import Post from './components/Post/Post'

function App() {

  const [post, setPost] = useState([])

  useEffect(() =>{
    fetch('http://localhost:4000/posts')
    .then(res => res.json())
    .then((data) =>{
      setPost(data)
    })
  },[])
  

  return (
    <>
      <CardList/>
      <Post post={post}/>
    </>
  );
}

export default App;
