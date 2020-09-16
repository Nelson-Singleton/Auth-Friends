import React from 'react';
import './App.css';


import {Switch, Route, Link} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import LoginForm from './Components/login'
import PrivateRoute from './Utils/privateRoute'
import FriendsList from './Components/friendsList'

function App() {
  return (
      <Router>
      <div className="App">
        <Link to = '/login'> Login </Link> 
        <Link to = '/friends'>Friends List </Link>
        <Switch>
          <PrivateRoute path = '/friends' component = {FriendsList}/>
          <Route path = '/login' component = {LoginForm} />
        </Switch>

      
    </div>
    </Router>
  );
}

export default App;
