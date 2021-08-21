import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/NavBar";
import { forgotPasswordInitiate } from "../../redux/Actions/auth";
import { getMemoizedUserData } from "../../redux/Selectors/auth";
import "./forgotPassword.css";

const ForgotPassowrd = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { validEmail, error } = useSelector(getMemoizedUserData);
  const history = useHistory();

  console.log(error)

  useEffect(() => {
    if (validEmail) {
      history.push("/resetPassword");
    }
  }, [history, validEmail]);

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPasswordInitiate(email));
  };
  return (
    <div className="wrapper">
      <Navbar showButton />
      <div className="forgotPasswordContainer">
        <h1>Forgot your password?</h1>
        <p>
          Enter the email associated with your account and we will send you
          instructions to reset your password
        </p>
        <label htmlFor="email" className="forgotLabel">
          Email address
        </label>
        <input
          placeholder="Enter your email"
          type="email"
          className="forgotPasswordInput"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />
        {error && <p className="invalidEmail">No user found with this email.</p>}
        <div className="forgotButtonContainer">
          <button className="forgotButton" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassowrd;
