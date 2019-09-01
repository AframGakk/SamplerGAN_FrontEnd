import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LandingSite from './components/LandingSite/LandingSite';
import NavigationBar from './components/NavigationBar/NavigationBar';

const App = () => {
  return (
    <div>
      < NavigationBar />
      <div className='container'>
        <Switch>
          <Route exact path="/" component={ LandingSite } />
        </Switch>
      </div>
    </div>
  )
}

export default App;