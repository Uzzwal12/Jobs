import React from 'react';
import { withRouter } from 'react-router';

import "./posts.css"

const Posts = ({ history: { push } }) => {
  return ( 
    <div className="postContainer">
      <h1>Jobs posted by you</h1>
      <div className="post-container-empty-div">
        <i className="fas fa-file-alt post-icon"></i>
        <span className="empty-text">Your posted jobs will show here!</span>
        <button className="empty-button" onClick={() => push('/console/post-job')}>Post Job</button>
      </div>
    </div>
   );
}
 
export default withRouter(Posts);
