import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

class User extends React.Component {
  render() {
    return (
      <Container la>
        <h1>{localStorage.getItem("username")} HOMEPAGE</h1>
        <div className="signUpFormDiv">
          <h2 className="signUpFormHeader">User infomation</h2>
          <form className="signUpForm">
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
              this.props.updateUser(
                this.firstNameRef.value,
                this.lastNameRef.value,
                this.passRef.value,
                this.emailRef.value
              )
            }
          >
            Update
          </Button>
        </div>
      </Container>
    );
  }
}

export default User;
