import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Signup from './containers/Signup';
import Login from './containers/Login';


function App() {

const [loggedIn, setLoggedIn] = useState(false)
const [user, setUser] = useState({})

useEffect( () => {
  fetch('/me')
  .then(r => {
    if (r.ok){
      r.json()
      .then(u => {
        setLoggedIn(true)
        setUser(u)
      })
    }
  })
}, [])

const loginUser = (user) => {
  setLoggedIn(true)
  setUser(user)
}

const logoutUser = () => {
  fetch('/logout', {
    method:'DELETE'
  })
  .then(() => {
    console.log("Logged out")
    setLoggedIn(false)
    setUser({})
  })
}

  return (
    <div className="App">
      <Navbar user={user} loggedIn={loggedIn} logoutUser={logoutUser}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" render={routerProps => <Signup {...routerProps} loginUser={loginUser} loggedIn={loggedIn}/>} />
        <Route exact path="/login" render={routerProps => <Login {...routerProps} loginUser={loginUser} loggedIn={loggedIn}/>} />
      </Switch>
    </div>
  );
}

export default App;
