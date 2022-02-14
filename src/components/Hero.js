import React from "react";
import group from "../images/group.png";
const Hero = () => {
  return (
    <div className="hero">
      <img src={group} alt="groupt-images" className="hero-img" />
      <h1 className="hero-title">Online Experience</h1>
      <p className="hero-subtitle">
        Join unique interactive activities led by one-of-a-kind hosts--all
        without leaving home.
      </p>
    </div>
  );
};

export default Hero;
