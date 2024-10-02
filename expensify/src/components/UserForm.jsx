// src/components/UserForm.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../actions/user";
import { useNavigate } from "react-router-dom";
const UserForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };
    dispatch(addUser(user));
    navigate("/");
    setUsername("");
    setPassword("");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter user name"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter user Password"
          required
        />
        <button type="submit">{"Add"} User</button>
      </form>
    </div>
  );
};

export default UserForm;
