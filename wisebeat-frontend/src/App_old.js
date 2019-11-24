import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LandingSite from './components/LandingSite/LandingSite';
import NavigationBar from './components/NavigationBar/NavigationBar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const App_old = () => {
  return (
    <div>
      < NavigationBar />
        <div className='container'>
          <Switch>
            <Route exact path="/" component={ LandingSite } />
            <Route exact path='/about' component={ About } />
            <Route exact path='/contact' component={ Contact } />
          </Switch>
        </div>
    </div>
  )
}

export default App_old;