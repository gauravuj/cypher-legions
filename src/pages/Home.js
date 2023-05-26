import React from "react";
import Typewriter from "typewriter-effect";
import Navbar from "./Navbar";
import { FormNextLink } from "grommet-icons";
import Banner from "../images/brand.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  function handleClick() {
    nav("/login");
  }

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container"></div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Build strong & meaningful
            <h4 className="typeText">
              <Typewriter
                options={{
                  strings: ["connections", "community"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
          </h1>
          <p className="primary-text">
            A safe and inclusive space for every individual. Share ideas,
            exchange knowledge, and collaborate on projects with those who truly
            resonate with your passions.
          </p>
          <button className="secondary-button" onClick={handleClick}>
            Sign Up <FormNextLink color="white" />
          </button>
        </div>
        <div className="home-image-section">
          <img src={Banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
