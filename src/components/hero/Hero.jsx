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
    <div className="hero" id="home">
      <div className="hero-image">
        <div className="hero-content">
          <h1 className="hero-item hero-hello">Hello, World!</h1>
          <h1 className="hero-item hero-name">I'm Hamza Pasking Akhtar. 👋</h1>
          <p className="hero-item hero-desc">| Front-end React Developer |</p>
          <a href="#about">
            <div className="hero-button-container">
              <button className="hero-button">MORE ABOUT ME</button>
              <AiOutlineDown
                style={{ color: "white", fontSize: "18px" }}
              />{" "}
            </div>
          </a>
        </div>
        <div className="hero-icons">
          <div className="hero-icon">
            <a
              href="https://www.facebook.com/hamza.akhtar.31586526/"
              target="_blank"
            >
              {" "}
              <AiFillFacebook className="icon" />
            </a>
          </div>
          <div className="hero-icon">
            <a
              href="https://www.linkedin.com/in/hamza-pasking-akhtar/"
              target="_blank"
            >
              {" "}
              <AiFillLinkedin className="icon" />
            </a>
          </div>
          <div className="hero-icon">
            <a
              href="https://www.instagram.com/hamzaidreesakhtar/"
              target="_blank"
            >
              {" "}
              <AiFillInstagram className="icon" />
            </a>
          </div>
          <div className="hero-icon">
            <a href="https://github.com/hamzapaskingakhtar1999" target="_blank">
              <AiFillGithub className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
