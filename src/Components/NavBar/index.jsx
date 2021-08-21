import React from "react";
import { useHistory } from "react-router";
import "./navBar.css";

const NavBar = ({ showButton }) => {
  const history = useHistory();
  const userData = JSON.parse(localStorage.getItem("userData"));

  const handleClick = () => {
    history.push("/login");
  };
  return (
    <nav className="navContainer">
      <span className="my">
        My<span className="jobs">Jobs</span>
      </span>
      {showButton &&
        (userData ? (
          <div className="loggedInUserWrapper">
            <div className="loggedInUser">{userData.name.charAt(0)}</div>
            <i className="fa fa-caret-down drop-icon" aria-hidden="true"></i>
          </div>
        ) : (
          <button onClick={handleClick} className="loginSignup">
            Login/Signup
          </button>
        ))}
    </nav>
  );
};

export default NavBar;
