import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostMemoizedData } from "../../redux/Selectors/post";
import { showModal } from "../../redux/Actions/post";
import { withRouter } from "react-router";

import "./posts.css";

const Posts = ({ history: { push } }) => {
  const { postsData } = useSelector(getPostMemoizedData);
  const dispatch = useDispatch();

  return (
    <div className="postContainer">
      <h1 className="postContainer-header">Jobs posted by you</h1>
      <div className="postContainer-content">
        {postsData.length ? (
          <div className="all-posts-data">
            {postsData.map(({ title, description, location }) => (
              <div className="single-post-data">
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <div className="single-post-location">
                  <span>{location}</span>
                  <button
                    className="post-view-button"
                    onClick={() => dispatch(showModal(true))}
                  >
                    View Applications
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="post-container-empty-div">
            <i className="fas fa-file-alt post-icon"></i>
            <span className="empty-text">Your posted jobs will show here!</span>
            <button
              className="empty-button"
              onClick={() => push("/console/post-job")}
            >
              Post Job
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(Posts);
