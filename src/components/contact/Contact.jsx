import React, { useState } from "react";

/* CSS */
import "./Contact.css";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    setMessage("Unable to send message. Please try again later");
    e.preventDefault();
  };

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
          <button
            type="submit"
            style={{
              textAlign: "center",
              padding: "10px",
              fontSize: "20px",
              cursor: "pointer",
              backgroundColor: "#00A8C5",
              border: "none",
              color: "white",
            }}
            onClick={handleSubmit}
          >
            Submit
          </button>
          <p style={{ color: "white" }}>{message}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
