import React from "react";
import ReactDom from "react-dom";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import "./landingSite.css";

const LandingSite = () => {
  let history = useHistory();
  return (
    <div>
      <h1 className="landing-site-title">Landing Site</h1>
      <div>
        <div className="login">
          <Button
            variant="contained"
            color="primary"
            size="medium"
            button
            onClick={() => history.push("/login")}
          >
            > Login
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
              />
            </div>
          </form>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ margin: 10, width: "520px" }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingSite;
