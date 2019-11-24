import React from 'react';
import { Navbar } from 'react-bootstrap';
//import NavLinks from '../NavLinks/NavLinks';

const NavigationBar = () => {
  return (
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Wisebeat
          </Navbar.Brand>
      </Navbar>
  )
};

export default NavigationBar;


/*

<nav className="navbar navbar-expand-lg  navigation-bar">

       <h1>LOGO</h1>
       <button type="button" className="btn btn-default signup-button-navbar">Sign up</button>
    </nav>

*/