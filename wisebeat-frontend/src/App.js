import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LandingSite from './components/LandingSite/LandingSite';

const App = () => {
  return (
    <div>
      <h1 className="app"> Hello World </h1>
      <Switch>
        <Route exact path="/" component={ LandingSite } />
      </Switch>
    </div>
  )
}

export default App;