import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import PostJob from "../PostJob";
import Posts from "../Posts";
import NavBar from '../../Components/NavBar';
import './console.css'

const Console = ({ history: { push }, location: { pathname } }) => {
  const condition = pathname.includes('post-job')

  return (
    <div className="console-container">
      <NavBar showButton/>
      <div className="console-wrap">
        <div className="console-header">
          <div>
            <span onClick={() => push('/console/posts')}>Home</span>
            {condition && (<span><i class="fas fa-chevron-right arrow-icon"></i></span>)}
            {condition && (<span>Post Job</span>)}
          </div>
          
        </div>
        <div className="console-content">
          <Switch>
            <Route path="/console/post-job" component={PostJob} />
            <Route path="/console/posts" component={Posts} />
            <Redirect from="/console" to="/console/posts" />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Console);
