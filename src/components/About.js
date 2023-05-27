import React from "react";
import AboutBackground from "../images/aboutPage.svg";

import { Play } from "grommet-icons";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        {/* <img src={AboutBackgroundImage} alt="" /> */}
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          A Social Platform based on Personality Compatibility
        </h1>
        <p className="primary-text">
          Welcome to our innovative platform where we believe in the power of
          compatibility. We take pride in matching you with individuals who
          share similar personality types and interests, creating the perfect
          environment for genuine connections to flourish.
        </p>
        <p className="primary-text">
          Here, you can freely express your thoughts, opinions, and passions,
          knowing that you are surrounded by like-minded individuals who
          appreciate and resonate with your unique perspective.
        </p>
        <div className="about-buttons-container">
          <button
            className="secondary-button"
            onclick="https://ide.geeksforgeeks.org"
          >
            Learn More
          </button>

          <button className="watch-video-button">
            <Play /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
