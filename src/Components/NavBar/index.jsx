import React from "react";
import { useState } from "react";
import { withRouter } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { clearLoginData } from "../../redux/Actions/auth";
import "./navBar.css";

const NavBar = ({ showButton, location: { pathname }, history: { push } }) => {
  const [showLogout, setShow] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("userData"));

  const handleClick = () => {
    history.push("/login");
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(clearLoginData());
    toast.dark("Logged out successfully");
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
            <button
              className={`postJobLink ${pathname.includes('post-job') ? 'postJobLinkSeleted' : ''}`}
              onClick={() => push('/console/post-job')}
            >
              Post a Job
            </button>

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

export default withRouter(NavBar);
