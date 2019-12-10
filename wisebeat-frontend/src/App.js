import React from "react";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import LandingSite from "./components/LandingSite/LandingSite";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Studio from "./components/Studio/Studio";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container">
        <Switch>
          {/* Login Or SignUp */}
          <Route exact path="/" component={LandingSite} />
          {/* Users homepage */}
          <Route exact path="/studio" component={Studio} />
          {/* About, óþarfi ?? */}
          <Route exact path="/about" component={About} />
          {/* Contact the team, óþarfi ?? */}
          <Route exact path="/contact" component={Contact} />
          {/* Login component */}
          <Route exact path="/login" component={Login} />
          {/*<Route exact path="/admin" component={Login} />*/}
        </Switch>
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
