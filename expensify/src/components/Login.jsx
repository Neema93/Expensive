import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
//   const {  error } = useSelector((state) => state);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
    // if (!error) {
        navigate("/dashboard");
  
  };

  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify</h1>
        <p>It's time to your expenses under control.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button className="login_button" type="submit">
            Login
          </button>
        </form>
        {/* {error && <p>{error}</p>} */}
      </div>
    </div>
  );
};
export default LoginPage;
