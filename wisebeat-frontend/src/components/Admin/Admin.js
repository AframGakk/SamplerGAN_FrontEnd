import React from "react";
import AdminView from "../AdminView/AdminView";
import { connect } from "react-redux";
import { history } from "../../helpers";

const Admin = () => {
  return (
    <div>
      <AdminView />
    </div>
  );
};

export default Admin;
