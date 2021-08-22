import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getPostMemoizedData } from "../../redux/Selectors/post";
import { createNewPostInitiate, clearPostData } from "../../redux/Actions/post";
import "./postJob.css";
import { toast } from "react-toastify";

const PostJob = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    location: "",
  });

  const userData = JSON.parse(localStorage.getItem("userData"));
  const history = useHistory();

  const dispatch = useDispatch();
  const { error, postsData, newPostSuccess } = useSelector(getPostMemoizedData);

  useEffect(() => {
    if (newPostSuccess) {
      toast.dark("New post created successfully");
      history.push("/console/posts");
    }
  }, [history, newPostSuccess]);

  useEffect(() => () => {
    dispatch(clearPostData());
  },[]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewPostInitiate({ newPost, token: userData.token }));
  };

  return (
    <div className="postJob-Wrapper">
      <form className="postBox" onSubmit={handleSubmit}>
        <p className="post">Login</p>
        <label htmlFor="title" className="postLabels">
          Job title*
        </label>
        <input
          placeholder="Enter job title"
          type="text"
          className="postInput"
          name="title"
          required
          onChange={handleChange}
        />
        <label htmlFor="description" className="postLabels">
          Description*
        </label>
        <textarea
          placeholder="Enter job description"
          className="descText"
          required
          name="description"
          onChange={handleChange}
        />
        <label htmlFor="location" className="postLabels">
          Location*
        </label>
        <input
          placeholder="Enter location"
          type="text"
          className="postInput"
          name="location"
          required
          onChange={handleChange}
        />
        <div className="postButtonContainer">
          <button className="postButton">Post</button>
        </div>
      </form>
    </div>
  );
};

export default PostJob;
