import "./postJob.css";

const PostJob = () => {
  return (
    <div className="postJob-Wrapper">
      <form className="postBox">
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
        />
        <label htmlFor="description" className="postLabels">
          Description*
        </label>
        <input
          placeholder="Enter job description"
          type="textarea"
          className="descText"
          required
          name="description"
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
        />
        <div className="postButtonContainer">
          <button className="postButton">Post</button>
        </div>
      </form>
    </div>
  );
};

export default PostJob;
