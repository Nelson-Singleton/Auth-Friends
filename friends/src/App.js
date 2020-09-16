import React from 'react';
import './App.css';


import {Switch, Route, Link, Router} from 'react-router-dom'

import LoginForm from './Components/login'
import PrivateRoute from './Utils/privateRoute'
import FriendsList from './Components/friendsList'

function App() {
  return (
    //  <Router>
      <div className="App">
        <Link to = '/login'> Login </Link> 
        <Switch>
          <PrivateRoute path = '/protected' component = {FriendsList}/>
          <Route path = '/login' component = {LoginForm} />
        </Switch>

      
    </div>
    //</Router>
  );
}

export default App;
