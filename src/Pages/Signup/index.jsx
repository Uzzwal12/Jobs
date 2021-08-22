import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { userSignUpInitiate } from "../../redux/Actions/auth";
import "./signUp.css";

const SignUp = () => {
  const [signUpDetails, setLoginDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    skills: "",
    userRole: 0,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginDetails({ ...signUpDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userSignUpInitiate(signUpDetails));
  };

  return (
    <div className="signUpContainer">
      <NavBar />
      <form className="signUpBox" onSubmit={handleSubmit}>
        <p className="signUp">Signup</p>
        <label className="userLabel">I'm a</label>
        <div className="userContainer">
          <button
            className={`recruiter ${
              signUpDetails.userRole === 0 ? "active" : ""
            }`}
            type="button"
            onClick={()=>setLoginDetails({ ...signUpDetails, userRole: 0 })}
          >
            <i className="fas fa-user-plus recruiter-icon"></i> Recruiter
          </button>
          <button
            className={`candidate ${
              signUpDetails.userRole === 1 ? "active" : ""
            }`}
            type="button"
            onClick={()=>setLoginDetails({ ...signUpDetails, userRole: 1 })}
          >
            <i class="fa fa-users candidate-icon" aria-hidden="true"></i>
            Candidate
          </button>
        </div>
        <label htmlFor="text" className="signUpLabels">
          Full Name*
        </label>
        <input
          placeholder="Enter your full name"
          type="text"
          className="signUpInput"
          name="name"
          value={signUpDetails.name}
          required
          onChange={handleChange}
        />
        <label htmlFor="email" className="signUpLabels">
          Email address*
        </label>
        <input
          placeholder="Enter your email"
          type="email"
          className="signUpInput"
          name="email"
          value={signUpDetails.email}
          required
          onChange={handleChange}
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
              onChange={handleChange}
              name="password"
              value={signUpDetails.password}
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
              onChange={handleChange}
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
          onChange={handleChange}
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
