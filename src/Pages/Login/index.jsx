import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { userLoginInitiate } from "../../redux/Actions/auth";
import { getMemoizedUserData } from "../../redux/Selectors/auth";
import "./login.css";


const Login = () => {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const history = useHistory();
  const { error, userLoginSuccess, userLogin } =
    useSelector(getMemoizedUserData);

  useEffect(() => {
    if (userLoginSuccess) {
      localStorage.setItem('userData', JSON.stringify(userLogin))
      history.push("/");
      toast.dark("Logged in successfully.")
    }
  }, [history, userLogin, userLoginSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLoginInitiate(loginDetails));
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
        {error && <p className="error">Invalid email address or password</p>}
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
