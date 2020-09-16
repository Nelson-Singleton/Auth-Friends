import React from 'react';
import './App.css';

import {Switch, Route, Link} from 'react-router-dom'

import LoginForm from './Components/login'

function App() {
  return (
    // <Router>
      <div className="App">
        <Switch>
          <Route path = '/login' component = {LoginForm} />
        </Switch>

      
    </div>
    //</Router>
  );
}

export default App;
