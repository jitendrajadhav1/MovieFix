import React from "react";
import "./style.css";
import welcomeImg from "../../../assets/Images/welcome-img.png";

const Welcome = () => {
  return (
    <>
      {/* <div style={{position: 'relative'}}> */}
      <div className="wc-section">
        <div className="wc-left"></div>
        <div className="wc-right">
          <img src={welcomeImg} alt="welcome image" />
        </div>
      </div>
      <div style={{position: 'absolute', width: '100%'}}>
        <div className="wc-form">
          <input type="search" className="wc-search" />
          <input type="submit" className="wc-submit" />
        </div>
        <div className="wc-welcome">
          <h1 className="wc-heading">Welcome</h1>
          <h2 className="wc-sub-heading">
            Popular movies, TV shows and people to discover. Explore now.
          </h2>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Welcome;
