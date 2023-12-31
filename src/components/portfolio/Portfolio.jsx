import React from "react";

/* CSS File */
import "./Portfolio.css";

/* Data */
import { ProjectData } from "../../data/ProjectData";

/* React Icons */
import { AiOutlineGithub } from "react-icons/ai";
import { TfiNewWindow } from "react-icons/tfi";

import Fade from "react-reveal/Fade";

const Portfolio = () => {
  return (
    <div className="portfolio center" id="portfolio">
      <h1 className="heading portfolio-heading">Portfolio</h1>
      <p className="portfolio-description">Check Out Some of My Works. 🧩</p>
      <div className="portfolio-items">
        {ProjectData.map((item) => (
          <Fade left>
            <div className="portfolio-item">
              <div className="portfolio-left">
                <img src={item.img} className="portfolio-image" />
              </div>
              <div className="portfolio-right">
                <h3>{item.title}</h3>
                <div className="portfolio-item-description">
                  {item.description}
                  <br /> <br />
                  <p>
                    <strong>Technology Used: </strong>
                    {item.stack}
                  </p>
                </div>
                <div className="portfolio-buttons">
                  <a href={item.demo}>
                    {" "}
                    <button className="portfolio-button">
                      <span>Demo</span>{" "}
                      <AiOutlineGithub className="button-icon" />
                    </button>
                  </a>
                  <a href={item.code}>
                    {" "}
                    <button className="portfolio-button">
                      <span>Code </span>{" "}
                      <TfiNewWindow className="button-icon" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
