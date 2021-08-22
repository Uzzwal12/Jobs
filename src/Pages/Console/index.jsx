import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import {getPostMemoizedData} from "../../redux/Selectors/post"
import PostJob from "../PostJob";
import Posts from "../Posts";
import NavBar from '../../Components/NavBar';
import Modal from '../../Components/Modal';
import './console.css'

const Console = ({ history: { push }, location: { pathname } }) => {
  const {modalShow} = useSelector(getPostMemoizedData)
  const condition = pathname.includes('post-job')

  return (
    <div className="console-container">
      <div className="console-background-contain">
        <NavBar showButton/>
        <div className="console-wrap">
          <div className="console-header">
            <div>
              <span onClick={() => push('/console/posts')}>Home</span>
              {condition && (<span><i className="fas fa-chevron-right arrow-icon"></i></span>)}
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
      {modalShow && (
        <Modal>
          kdhbvkbjvds
        </Modal>
      )}
    </div>
  );
};

export default withRouter(Console);
