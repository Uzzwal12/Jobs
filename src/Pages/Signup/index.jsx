import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signUp.css";

const SignUp = () => {
  const [signUpDetails, setLoginDetails] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signUpContainer">
      <form className="signUpBox" onSubmit={handleSubmit}>
        <p className="signUp">Signup</p>
        <label className="userLabel">I'm a</label>
        <div className="userContainer">
          <button className="recruiter">Recruiter</button>
          <button><i class="fa fa-users"></i> Candidate</button>
        </div>
        <label htmlFor="text" className="signUpLabels">
          Full Name*
        </label>
        <input
          placeholder="Enter your full name"
          type="text"
          className="signUpInput"
          name="FullName"
          value={signUpDetails.fullName}
          required
        />
        <label htmlFor="email" className="signUpLabels">
          Email address*
        </label>
        <input
          placeholder="Enter your email"
          type="email"
          className="signUpInput"
          name="Email"
          value={signUpDetails.email}
          required
        />
        <div className="passwordContainer">
          <div className="createPassowrd">
            <label htmlFor="password" className="passwordLabel">
              Create Password*
            </label>
            <input
              placeholder="Enter your password"
              type="password"
              className="createPassword"
              required
              minLength="6"
              name="createPassword"
              value={signUpDetails.createPassword}
            />
          </div>
          <div className="confirmPassowrd">
            <label htmlFor="password" className="passwordLabel">
              Confirm Password*
            </label>
            <input
              placeholder="Enter your password"
              type="password"
              className="confirmPassword"
              required
              minLength="6"
              name="confirmPassword"
              value={signUpDetails.confirmPassword}
            />
          </div>
        </div>
        <label htmlFor="skills" className="signUpLabels">
          Skills
        </label>
        <input
          placeholder="Enter comma saperated skills"
          type="text"
          className="signUpInput"
          name="skills"
          value={signUpDetails.skills}
          required
        />

        <div className="signUpButtonContainer">
          <button className="signUpButton">Signup</button>
        </div>
        <p className="have-account">
          Have an account?
          <Link className="logintext" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
