import React from "react";
import AdminView from "../AdminView/AdminView";
import { connect } from "react-redux";
import { history } from "../../helpers";

const Admin = () => {
  return (
    <div>
      ADMIN
      <div>
        <AdminView />
      </div>
    </div>
  );
};

export default Admin;