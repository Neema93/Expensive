import React from "react";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
const PrivateRoute = (props) => {
 

  return props.isAuthenticated ? (
    <>
      <Header /> {/* Render the header here */}
      <Outlet />  {/* Render the child routes */}
    </>
  ) : (
    <Navigate to="/" />
  );;
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(PrivateRoute);
