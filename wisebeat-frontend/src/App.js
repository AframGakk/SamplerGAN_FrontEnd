import React from "react";
import logo from "./logo.svg";
import { Switch, Route, Router } from "react-router-dom";
import "./App.css";
import LandingSite from "./components/LandingSite/LandingSite";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Studio from "./components/Studio/Studio";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";
import { history } from "./helpers";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={LandingSite} />
            <Route exact path="/studio" component={Studio} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/home" component={User} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;

/*const App_old = () => {
  return (
    <div>
      < NavigationBar />
      < Studio />
    </div>
  )
} */
