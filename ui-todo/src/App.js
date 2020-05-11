import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import login from './pages/login';
import signup from './pages/signup';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path='/login' component={login}/>
            <Route exact path='/signup' component={signup}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
