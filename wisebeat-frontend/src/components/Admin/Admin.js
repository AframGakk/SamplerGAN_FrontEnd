import React from "react";
import { connect } from "react-redux";
import { history } from "../../helpers";

class Admin extends React.Component {
  render() {
    return <div>ADMIN</div>;
  }
}

const mapStateToProps = state => {
  // Configure connect to tell redux store that we wanna get auth user
  console.log(state);
  //return { authenticated: state.authReducer.authenticated };
};

export default connect(mapStateToProps)(Admin);
