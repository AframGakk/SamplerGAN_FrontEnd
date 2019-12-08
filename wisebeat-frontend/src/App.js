import React from "react";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import LandingSite from "./components/LandingSite/LandingSite";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Studio from "./components/Studio/Studio";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <div>
        <Switch>
          {/* Login Or SignUp */}
          <Route exact path="/" component={LandingSite} />
          {/* Users homepage */}
          <Route exact path="/studio" component={Studio} />
          {/* About, óþarfi ?? */}
          <Route exact path="/about" component={About} />
          {/* Contact the team, óþarfi ?? */}
          <Route exact path="/contact" component={Contact} />
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
