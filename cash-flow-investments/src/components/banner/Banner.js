import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__info">
        <h1> Get out and stretch your imagination</h1>
        <h5>
          {" "}
          Plan a different type of getaway to uncover the hidden gems near you.
        </h5>
        <button className="bannerButton"> Explore Nearby</button>
      </div>
    </div>
  );
}

export default Banner;
