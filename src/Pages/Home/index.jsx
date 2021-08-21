import NavBar from "../../Components/NavBar";
import "./home.css";
import Image from "../../images/home-image.jpg";

const Home = () => {
  return (
    <div className="home-wrapper">
      <NavBar showButton />
      <div className="wrap-content">
        <div className="column-1">
          <div className="column-1-text">
            Welcome to <br /> My<span>Jobs</span>
          </div>
          <button className="column-1-button">Get Started</button>
        </div>
        <div className="column-2">
          <img src={Image} className="image-main" />
        </div>
      </div>
      <div className="section">
        <div className="sec-title">Why Us</div>
        <div className="sec-content">
          <div className="section-box margin-right">
            <div className="section-box-title">
              Get more <br /> visibility
            </div>
            <div className="section-box-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              impedit eum ipsa officia ab facere maxime quaerat, facilis
              reiciendis eius?
            </div>
          </div>
          <div className="section-box margin-right">
            <div className="section-box-title">
              Organize your <br /> candidates
            </div>
            <div className="section-box-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="section-box">
            <div className="section-box-title">
              Verify their <br /> abilities
            </div>
            <div className="section-box-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="sec-title">Companies Who Trust Us</div>
        <div className="sec-content-2">
          <div className="row logo-row-1">
            <img src={Image} style={{ width: "100px" }} alt="logo" />
            <img src={Image} style={{ width: "100px" }} alt="logo" />
            <img src={Image} style={{ width: "100px" }} alt="logo" />
            <img src={Image} style={{ width: "100px" }} alt="logo" />
            <img src={Image} style={{ width: "100px" }} alt="logo" />
          </div>
          <div className="row logo-row-2">
            <img src={Image} style={{ width: "100px" }} alt="logo" />
            <img src={Image} style={{ width: "100px" }} alt="logo" />
            <img src={Image} style={{ width: "100px" }} alt="logo" />
            <img src={Image} style={{ width: "100px" }} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
