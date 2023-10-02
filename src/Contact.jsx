import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [input, setInput] = useState({
    Name: "",
    Email: "",
    Message: ""
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setInput({ ...input, Email: "" });
  };
  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <span>Get in touch</span>
        <span>Contact me</span>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>

      <div className="c-right">
        <form>
          <input
            onChange={handleInput}
            value={input.Name}
            type="text"
            name="name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            onChange={handleInput}
            value={input.Email}
            name="email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            onChange={handleInput}
            value={input.Message}
            className="user"
            placeholder="Message"
          ></textarea>
          <input type="submit" className="button" />
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
