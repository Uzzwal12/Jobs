import React from "react";
import { useHistory } from "react-router";
import "./navBar.css";

const NavBar = ({ showButton }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/login");
  };
  return (
    <nav className="navContainer">
      <span className="my">
        My<span className="jobs">Jobs</span>
      </span>
      {showButton && (
        <button onClick={handleClick} className="loginSignup">
          Login/Signup
        </button>
      )}
    </nav>
  );
};

export default NavBar;
