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
      <h1> Create New user </h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter user name"
          required
        />
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter user Password"
          required
        />
        <button className='form_button'type="submit">{"Add"} User</button>
      </form>
    </div>
  );
};

export default UserForm;
