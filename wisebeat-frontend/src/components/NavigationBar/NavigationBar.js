import React from "react";
import { connect } from "react-redux";
import { Navbar } from "react-bootstrap";
import { history } from "../../helpers";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

class NavigationBar extends React.Component {
  navbarLinks() {
    if (this.props.authenticated) {
      return (
        <Typography>
          <Link onClick={() => history.push("/studio")}>Studio</Link>
          <Link>Sign Out</Link>
        </Typography>
      );
    }
    return (
      <Typography>
        <Link onClick={() => history.push("/login")}>Log In</Link>
        <Link onClick={() => history.push("/")}>Sign Up</Link>
      </Typography>
    );
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#studio">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            onClick={() => history.push("/studio")}
          />{" "}
          Wisebeat
        </Navbar.Brand>
        <ul>{this.navbarLinks()}</ul>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  // Configure connect to tell redux store that we wanna get auth user
  console.log(state);
  return { authenticated: state.authReducer.authenticated };
};

export default connect(mapStateToProps)(NavigationBar);

/*

<nav className="navbar navbar-expand-lg  navigation-bar">

       <h1>LOGO</h1>
       <button type="button" className="btn btn-default signup-button-navbar">Sign up</button>
    </nav>

*/
