import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Signup from './containers/Signup';


function App() {

const [loggedIn, setLoggedIn] = useState(false)
const [User, setUser] = useState({})
// const history = useHistory()
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" render={routerProps => <Signup {...routerProps} onSignup={signupUser} />} />
      </Switch>
    </div>
  );
}

export default App;
