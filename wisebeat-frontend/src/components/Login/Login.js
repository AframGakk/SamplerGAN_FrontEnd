import React from "react";
import { connect } from "react-redux";
import ReactDom from "react-dom";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

import { signIn } from "../../actions";
import { withStyles } from "@material-ui/core/styles";
import "./Logis.css";

const useStyles = theme => ({
  root: {
    width: "100%"
  }
});

class Login extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Container fixed>
        <h2 className="logInFormHeader">Log In</h2>
        <form className={classes.root}>
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
                this.userRef = ref;
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
            this.props.signIn(this.userRef.value, this.passRef.value)
          }
        >
          Log in
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  // Configure connect to tell redux store that we wanna get
  // all the folders
  //console.log(state);
};

export default connect(mapStateToProps, {
  signIn: signIn
})(withStyles(useStyles)(Login));
