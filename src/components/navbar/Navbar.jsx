import React, { useState } from "react";

/* CSS File */
import "./Navbar.css";

/* SVG */
import HPA from "../../assets/HPA.svg";

/* React Icons */
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

/* DOM */
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleNavbar = () => {
    setActive(!active);
  };
  return (
    <div className="navbar">
      <div className="left">
        <img src={HPA} className="logo" />
      </div>
      <ul className={`link-items ${active ? "active" : ""}`}>
        <a href="#home">
          {" "}
          <li className="link-item">Home</li>
        </a>
        <a href="#about">
          <li className="link-item">About</li>
        </a>
        <a href="#portfolio">
          {" "}
          <li className="link-item">Portfolio</li>
        </a>
        <a href="#contact">
          {" "}
          <li className="link-item">Contact</li>
        </a>

        {/*         <li className="link-item">Services</li> */}
      </ul>
      <div className="right hide">
        <button className="navbar-button">View Resume</button>
      </div>
      {active ? (
        <AiOutlineClose className="toggle-navbar" onClick={toggleNavbar} />
      ) : (
        <FaBars className="toggle-navbar" onClick={toggleNavbar} />
      )}
    </div>
  );
};

export default Navbar;
