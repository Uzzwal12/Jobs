import React from "react";
import Navbar from "../../Components/NavBar";

import "./resetPassword.css";

const ResetPassword = () => {
  return (
    <>
      <Navbar showButton />
      <div>
        <div className="resetPasswordContainer">
          <h1>Reset your password?</h1>
          <p>Enter your new password below.</p>
          <label htmlFor="passowrd" className="resetLabel">
            New passowrd
          </label>
          <input
            placeholder="Enter your password"
            type="password"
            className="resetPasswordInput"
            name="newPassowrd"
            required
          />
          <label htmlFor="passowrd" className="resetLabel">
            Confirm new passowrd
          </label>
          <input
            placeholder="Enter your password"
            type="password"
            className="resetPasswordInput"
            name="confirmNewPassowrd"
            required
          />
          <div className="resetButtonContainer">
            <button className="resetButton">Reset</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
