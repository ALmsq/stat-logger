import React, { useState, useEffect }  from 'react';
import { Route, Switch } from 'react-router'
import './App.css';
import CardList from './components/Card/CardList'
import Post from './components/Post/Post'
import NavBar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import { Fragment } from 'reactn';

function App() {

  const [post, setPost] = useState([])

  useEffect(() =>{
    fetch('http://localhost:4000/posts')
    .then(res => res.json())
    .then((data) =>{
      setPost(data)
    })
  },[])
  
  useEffect(() =>{

  },[])

  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => 
        <Fragment>
          <NavBar/>
          <CardList/>
          <Post post={post}/>
        </Fragment>}/>        
        <Route path='/login' render={() => 
        <Fragment>
          <Login/>
        </Fragment>}/>
      </Switch>
    </div>
  );
}

export default App;
