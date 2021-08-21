import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import "./login.css";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <NavBar />
      <div className="loginContainer">
        <form className="loginBox" onSubmit={handleSubmit}>
          <p className="login">Login</p>
          <label htmlFor="email" className="loginLabels">
            Email address
          </label>
          <input
            placeholder="Enter your email"
            type="email"
            className="loginInput"
            name="Email"
            value={loginDetails.email}
            required
          />
          <div className="passwordLabels">
            <label htmlFor="password" className="loginLabels">
              Password
            </label>
            <span className="forgotPassword">Forgot your password?</span>
          </div>
          <input
            placeholder="Password"
            type="password"
            className="loginInput"
            required
            minLength="6"
            name="Password"
            value={loginDetails.password}
          />
          <div className="loginButtonContainer">
            <button className="loginButton">Login</button>
          </div>
          <p className="new-here">
            New to MyJobs?{" "}
            <Link className="createAccount" to="/signUp">
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
