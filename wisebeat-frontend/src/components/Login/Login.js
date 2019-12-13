import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

import { signIn } from "../../actions";
import { withStyles } from "@material-ui/core/styles";
import "./Login.css";
import { fetchJobs } from "../../actions";

const useStyles = theme => ({
  root: {
    width: "100%"
},
  login: {
        marginTop: 50,
        background: "#999999",
        width: "590px"
  }
});

class Login extends React.Component {
  componentDidMount() {
    this.props.fetchJobs();
  }
  render() {
    const { classes } = this.props;
    return (
      <Container fixed className={classes.login}>
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
                  textAlign: "center"
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
                  textAlign: "center"
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
};

export default connect(mapStateToProps, {
  signIn: signIn,
  fetchJobs: fetchJobs
})(withStyles(useStyles)(Login));
