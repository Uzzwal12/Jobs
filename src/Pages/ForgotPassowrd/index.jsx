import React from 'react';
import Navbar from "../../Components/NavBar"
import "./forgotPassword.css";

const ForgotPassowrd = () => {
  return (
    <>
    <Navbar showButton/>
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
        name="Email"
        required
      />
      <div className="forgotButtonContainer">
          <button className="forgotButton">Submit</button>
        </div>
    </div>
    </>
  );
};

export default ForgotPassowrd;
