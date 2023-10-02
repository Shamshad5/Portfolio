import React from "react";
import "./Navbar.css";
import Toggle from "./Toggle";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Shamshad</div>
          <Toggle />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <Link spy={true} smooth={true} to="Home" activeClass="activClass">
                <li>Home</li>
              </Link>

              <Link spy={true} smooth={true} to="Services">
                <li>Services</li>
              </Link>

              <Link spy={true} smooth={true} to="Experience">
                <li>Experience</li>
              </Link>

              <Link spy={true} smooth={true} to="Portfolio">
                <li>Portfolio</li>
              </Link>

              <Link spy={true} smooth={true} to="Testimonials">
                <li>Testimonials</li>
              </Link>
            </ul>
          </div>
          <Link syp={true} smooth={true} to="Contact">
            <button className="button n-button">Contact Us</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
