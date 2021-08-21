import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import {userLoginInitiate} from "../../redux/Actions/auth"
import "./login.css";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userLoginInitiate(loginDetails))
  };

  return (
    <div className="loginContainer">
      <NavBar />
      <form className="loginBox" onSubmit={handleSubmit}>
        <p className="login">Login</p>
        <label htmlFor="email" className="loginLabels">
          Email address
        </label>
        <input
          placeholder="Enter your email"
          type="email"
          className="loginInput"
          name="email"
          onChange={handleChange}
          value={loginDetails.email}
          required
        />
        <div className="passwordLabels">
          <label htmlFor="password" className="loginLabels">
            Password
          </label>
          <Link to="/forgotPassword" className="forgotPassword">
            Forgot your password?
          </Link>
        </div>
        <input
          placeholder="Password"
          type="password"
          className="loginInput"
          required
          minLength="6"
          name="password"
          onChange={handleChange}
          value={loginDetails.password}
        />
        <div className="loginButtonContainer">
          <button className="loginButton">Login</button>
        </div>
        <p className="new-here">
          New to MyJobs?
          <Link className="createAccount" to="/signUp">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
