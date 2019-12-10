import React from "react";
import { connect } from "react-redux";
import ReactDom from "react-dom";
import { Route } from "react-router-dom";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { history } from "../../helpers";

import "./landingSite.css";
import { createUser } from "../../actions";

class LandingSite extends React.Component {
  render() {
    return (
      <div>
        <h1 className="landing-site-title">Welcome to wisebeat</h1>
        <h3 className="landing-site-title">Please Sign up Or Log in</h3>
        <div>
          <div className="login">
            <Button
              variant="contained"
              color="primary"
              size="medium"
              button
              onClick={() => history.push("/login")}
            >
              Login
            </Button>
          </div>
          <div className="signUpFormDiv">
            <h2 className="signUpFormHeader">Sign Up</h2>
            <form className="signUpForm">
              <div>
                <TextField
                  autoFocus
                  margin="normal"
                  id="username"
                  label="Username"
                  type="text"
                  style={{ margin: 10, width: "520px" }}
                  InputProps={{
                    style: {
                      color: "white",
                      textAlign: "center",
                      border: "white"
                    }
                  }}
                  inputRef={ref => {
                    this.userNameRef = ref;
                  }}
                />
              </div>
              <div>
                <TextField
                  autoFocus
                  margin="normal"
                  id="firstname"
                  label="First Name"
                  type="text"
                  style={{ margin: 10, width: "520px" }}
                  InputProps={{
                    style: {
                      color: "white",
                      textAlign: "center",
                      border: "white"
                    }
                  }}
                  inputRef={ref => {
                    this.firstNameRef = ref;
                  }}
                />
              </div>
              <div>
                <TextField
                  autoFocus
                  margin="normal"
                  id="lastname"
                  label="Last Name"
                  type="text"
                  style={{ margin: 10, width: "520px" }}
                  InputProps={{
                    style: {
                      color: "white",
                      textAlign: "center",
                      border: "white"
                    }
                  }}
                  inputRef={ref => {
                    this.lastNameRef = ref;
                  }}
                />
              </div>
              <div>
                <TextField
                  autoFocus
                  margin="normal"
                  id="email"
                  label="Email"
                  type="email"
                  style={{ margin: 10, width: "520px" }}
                  InputProps={{
                    style: {
                      color: "white",
                      textAlign: "center",
                      border: "white"
                    }
                  }}
                  inputRef={ref => {
                    this.emailRef = ref;
                  }}
                />
              </div>
              <div>
                <TextField
                  autoFocus
                  margin="normal"
                  id="password"
                  label="Password"
                  type="password"
                  style={{ margin: 10, width: "520px" }}
                  InputProps={{
                    style: {
                      color: "white",
                      textAlign: "center",
                      border: "white"
                    }
                  }}
                  inputRef={ref => {
                    this.passRef = ref;
                  }}
                />
              </div>
            </form>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ margin: 10, width: "520px" }}
              onClick={() =>
                this.props.createUser(
                  this.userNameRef.value,
                  this.firstNameRef.value,
                  this.lastNameRef.value,
                  this.passRef.value,
                  this.emailRef.value
                )
              }
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // Configure connect to tell redux store that we wanna get
  console.log(state);
};

// connect to Provider -> ReduxStore
export default connect(mapStateToProps, {
  // Calling the action creators
  createUser: createUser
})(LandingSite);
