import React from "react";
import "./navBar.css";

const NavBar = ({showButton}) => {
  return (
    <nav className="navContainer">
      <span className="my">
        My<span className="jobs">Jobs</span>
      </span>
      {showButton && <button className="loginSignup">Login/Signup</button>}
    </nav>
  );
};

export default NavBar;
