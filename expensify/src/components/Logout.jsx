import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/auth";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());

    navigate("/dashboard");
  };

  return (
    <button className="logout_button" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
