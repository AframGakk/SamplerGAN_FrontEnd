import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Studio from "./components/Studio/Studio";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import { history } from "./helpers";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Studio} />
            <Route exact path="/admin" component={Login} />
            <Route exact path="/panel" component={Admin} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
