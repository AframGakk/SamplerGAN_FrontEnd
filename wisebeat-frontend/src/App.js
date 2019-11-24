import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import LandingSite from './components/LandingSite/LandingSite';
import NavigationBar from './components/NavigationBar/NavigationBar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Studio from './components/Studio/Studio';

const App_old = () => {
  return (
    <div>
      < NavigationBar />
      < Studio />
    </div>
  )
}

export default App_old;