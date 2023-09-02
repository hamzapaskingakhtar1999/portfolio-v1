import React from "react";

/* CSS */
import "./Footer.css";

/* React Icons */
import { PiMapPinLight } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer">
      <div className="footer-items">
        <div className="footer-item">
          <PiMapPinLight className="footer-icon" />
          <h4 className="footer-title">WHERE TO FIND ME</h4>
          <p>Islamabad, Pakistan</p>
        </div>
        <div className="footer-item">
          <AiOutlineMail className="footer-icon" />
          <h4 className="footer-title">EMAIL ME AT</h4>
          <p>hamzapaskingakhtar@gmail.com</p>
        </div>
        <div className="footer-item">
          <BsPhone className="footer-icon" />
          <h4 className="footer-title">CALL ME AT</h4>
          <p>+92-3175926565</p>
        </div>
      </div>
      <div className="copyright">
        <span>© Copyright {year} || Built by HPA</span>
      </div>
    </div>
  );
};

export default Footer;
