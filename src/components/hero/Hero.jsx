import React from "react";

/* CSS File */
import "./Hero.css";

/* React Icons */
import {
  AiOutlineDown,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-image">
        <div className="hero-content">
          <h1 className="hero-item hero-hello">Hello, World!</h1>
          <h1 className="hero-item hero-name">I'm Hamza Pasking Akhtar. 👋</h1>
          <p className="hero-item hero-desc">| Front-end React Developer |</p>
          <div className="hero-button-container">
            <button className="hero-button">MORE ABOUT ME</button>
            <AiOutlineDown style={{ color: "white", fontSize: "18px" }} />
          </div>
        </div>
        <div className="hero-icons">
          <div className="hero-icon">
            <AiFillFacebook className="icon" />
          </div>
          <div className="hero-icon">
            <AiFillLinkedin className="icon" />
          </div>
          <div className="hero-icon">
            <AiFillInstagram className="icon" />
          </div>
          <div className="hero-icon">
            <AiFillGithub className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
