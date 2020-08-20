import React, { useState, useEffect }  from 'react';
import { Route, Switch } from 'react-router'
import './App.css';
import CardList from './components/Card/CardList'
import Post from './components/Post/Post'
import NavBar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import Register from './components/Login/Register'
import { Fragment } from 'reactn';
import store from './store'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser } from './Redux/Actions/authActions'
// import PrivateRoute from './components/PrivateRoute/PrivateRoute'

//check for token to stay logged in
if(localStorage.jwtToken){
  //set auth token as header auth
  const token = localStorage.jwtToken
  setAuthToken(token)
  //decode token and get user info and token expiration
  const decoded = jwt_decode(token)
  //set user and isauthenticated
  store.dispatch(setCurrentUser(decoded))

  //check for expired token
  const currentTime = Date.now() / 1000 //in ms
  if(decoded.exp < currentTime) {
    //logout if expired
    store.dispatch(logoutUser())
    //redirect to login
    window.location.href = './login'
  }
}

function App() {


  const [post, setPost] = useState([])



  useEffect(() =>{
    fetch('https://stat-tracker-backend.herokuapp.com/posts')
    .then(res => res.json())
    .then((data) =>{
      setPost(data)
    })
    
  },[])
  



  return (
    
    
      
      <Switch>
        <Route exact path='/' render={() => 
        <Fragment>
          <NavBar/>
          <CardList/>
          <Post post={post}/>
        </Fragment>}/>        
        <Route path='/login' render={() => 
        <Fragment>
          <Login />
        </Fragment>}/>
        <Route path='/register' render={() => 
        <Fragment>
          <Register />
        </Fragment>}/>
      </Switch>
    
    
  );
}

export default App;
