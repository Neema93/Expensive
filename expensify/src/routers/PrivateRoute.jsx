import React from "react";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = (props) => {
  const Auth = props.isAuthenticated;

  return Auth ? <Outlet /> : <Navigate to="/" />;
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(PrivateRoute);
