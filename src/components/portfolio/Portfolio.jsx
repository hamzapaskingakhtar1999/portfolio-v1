import React from "react";

/* CSS File */
import "./Portfolio.css";

/* Data */
import { ProjectData } from "../../data/ProjectData";

/* React Icons */
import { AiOutlineGithub } from "react-icons/ai";
import { TfiNewWindow } from "react-icons/tfi";

const Portfolio = () => {
  return (
    <div className="portfolio center">
      <h1 className="heading portfolio-heading">Portfolio</h1>
      <p className="portfolio-description">Check Out Some of My Works. 🧩</p>
      <div className="portfolio-items">
        {ProjectData.map((item) => (
          <div className="portfolio-item">
            <div className="portfolio-left">
              <img src={item.img} className="portfolio-image" />
            </div>
            <div className="portfolio-right">
              <h3>{item.title}</h3>
              <div className="portfolio-item-description">
                {item.description}
              </div>
              <div className="portfolio-buttons">
                <button className="portfolio-button">
                  <span>Demo</span> <AiOutlineGithub className="button-icon" />
                </button>
                <button className="portfolio-button">
                  <span>Code </span> <TfiNewWindow className="button-icon" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
