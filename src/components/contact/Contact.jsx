import React from "react";

/* CSS */
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="center contact-container">
        <h1 className="heading">CONTACT</h1>
        <h1 className="contact-heading">I'd Love To Hear From You.</h1>
        <p className="contact-description">
          For more inquiries and details contact me below and let's get start on
          discussing your project.
        </p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone Number" />
          <textarea placeholder="Message" rows="5" cols="50" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
