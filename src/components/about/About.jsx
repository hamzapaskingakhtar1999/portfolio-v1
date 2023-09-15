import React from "react";

/* CSS File */
import "./About.css";

/* SVG */
import HTML from "../../assets/html5.svg";
import JS from "../../assets/javascript.svg";
import CSS from "../../assets/css3.svg";
import REACTJS from "../../assets/reactjs.svg";
import SOCKET from "../../assets/socket.svg";
import GIT from "../../assets/git.svg";
import FIRE from "../../assets/fire.svg";
import WORDPRESS from "../../assets/wordpress.svg";

import Circle from "../../assets/Circle.svg";

/* PNG */
import water from "../../assets/water.jpeg";

import { Rotate } from "react-reveal";

const About = () => {
  return (
    <>
      <div className="about center" id="about">
        <div className="about-container ">
          <div className="about-content">
            <img src={Circle} id="loading" />
            <img src={water} className="about-image" />
            <div className="about-right">
              <h1 className="about-heading">About me</h1>
              <p className="about-description">
                As a Junior Front-End Developer, I possess an arsenal of skills
                in HTML, CSS, JavaScript, React, Firebase, and SCSS. I excel in
                converting designs to pixel perfect functional site and maintain
                responsive websites that offer a smooth user experience. My
                expertise lies in crafting dynamic, engaging interfaces through
                writing clean and optimized code and utilizing good programming
                practices.
              </p>
              <div className="skill">
                <h1 className="skill-heading">Tech Stack</h1>
                <div className="skill-items">
                  <Rotate top left>
                    <div className="skill-item">
                      <img src={HTML} className="skill-icon" />
                    </div>
                  </Rotate>

                  <Rotate top right>
                    {" "}
                    <div className="skill-item">
                      <img src={CSS} className="skill-icon" />
                    </div>
                  </Rotate>

                  <Rotate top left>
                    {" "}
                    <div className="skill-item">
                      <img src={JS} className="skill-icon" />
                    </div>
                  </Rotate>

                  <Rotate top right>
                    {" "}
                    <div className="skill-item">
                      <img src={REACTJS} className="skill-icon" />
                    </div>
                  </Rotate>

                  <Rotate top left>
                    {" "}
                    <div className="skill-item">
                      <img src={SOCKET} className="skill-icon" />
                    </div>
                  </Rotate>

                  <Rotate top right>
                    {" "}
                    <div className="skill-item">
                      <img src={GIT} className="skill-icon" />
                    </div>
                  </Rotate>

                  <Rotate top left>
                    {" "}
                    <div className="skill-item">
                      <img src={FIRE} className="skill-icon" />
                    </div>
                  </Rotate>

                  <Rotate top right>
                    {" "}
                    <div className="skill-item">
                      <img src={WORDPRESS} className="skill-icon" />
                    </div>
                  </Rotate>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
