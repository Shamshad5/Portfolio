import React from "react";
import "./Footer.css";
import {BsInstagram} from "react-icons/bs";
import {AiFillFacebook} from "react-icons/ai";
import {BsGithub} from "react-icons/bs";
import Wave from "./img/wave.png";

function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Shamshad77744@gmail.com</span>
        <div className="f-icons">
          <BsInstagram />
          <AiFillFacebook />
          <BsGithub />
        </div>
      </div>
    </div>
  );
}

export default Footer;
