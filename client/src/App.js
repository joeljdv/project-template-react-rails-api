import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'


function App() {

const [loggedIn, setLoggedIn] = useState(false)
const [User, setUser] = useState({})
// const history = useHistory()
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
