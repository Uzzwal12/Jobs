import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {toast} from "react-toastify"
import { changePasswordInitiate } from "../../redux/Actions/auth";
import { getMemoizedUserData } from "../../redux/Selectors/auth";
import Navbar from "../../Components/NavBar";

import "./resetPassword.css";


const ResetPassword = () => {
  const [passwords, setPasswords] = useState({
    newPassowrd: "",
    confirmNewPassowrd: "",
  });
  const dispatch = useDispatch();
  const history = useHistory()
  const { forgotPasswordValidUserData, passwordChangeSuccess } = useSelector(getMemoizedUserData);

  useEffect(()=>{
    if(passwordChangeSuccess){
      toast.dark("Password changed successfuly")
      history.push("/login")
    }
  },[passwordChangeSuccess, history])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPasswords({ ...passwords, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      changePasswordInitiate({
        password: passwords.newPassowrd,
        confirmPassword: passwords.confirmNewPassowrd,
        token: forgotPasswordValidUserData.token,
      })
    );
  };

  return (
    <div className="resetPassword-wrapper">
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
            value={passwords.newPassowrd}
            onChange={handleChange}
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
            value={passwords.confirmNewPassowrd}
            onChange={handleChange}
            required
          />
          <div className="resetButtonContainer">
            <button className="resetButton" onClick={handleSubmit}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
