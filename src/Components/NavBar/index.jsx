import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import "./navBar.css";

const NavBar = ({ showButton }) => {
  const [showLogout, setShow] = useState(false);
  const history = useHistory();
  const userData = JSON.parse(localStorage.getItem("userData"));

  const handleClick = () => {
    history.push("/login");
  };

  const handleLogout = () => {
    localStorage.clear();
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
            <div className="loggedInUser">
              {userData.name.charAt(0).toUpperCase()}
            </div>
            <i
              className="fa fa-caret-down drop-icon"
              aria-hidden="true"
              onClick={() => setShow(!showLogout)}
            ></i>

            {showLogout && (
              <div className="logout" onClick={handleLogout}>
                <div className="triangle-up"></div>
              </div>
            )}
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
