import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/homepage';
import './img/styles/grid.css'
import './img/styles/normalize.css'
import './img/style.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
