import React from "react";
import "./navBar.css";

const NavBar = () => {
  return (
    <nav className="navContainer">
      <span className="my">
        My<span className="jobs">Jobs</span>
      </span>
      <button className="loginSignup">Login/Signup</button>
    </nav>
  );
};

export default NavBar;
