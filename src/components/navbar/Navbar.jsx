import React, { useState } from "react";

/* CSS File */
import "./Navbar.css";

/* SVG */
import HPA from "../../assets/HPA.svg";

/* React Icons */
import { FaBars } from "react-icons/fa";

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
        <li className="link-item">Home</li>
        <li className="link-item">About</li>
        <li className="link-item">Portfolio</li>
        <li className="link-item">Services</li>
        <li className="link-item">Contact</li>
      </ul>
      <div className="right hide">
        <button className="navbar-button">View Resume</button>
      </div>
      <FaBars className="toggle-navbar" onClick={toggleNavbar} />
    </div>
  );
};

export default Navbar;
