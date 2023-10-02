import React from "react";
import "./Intro.css";
import Github from "./img/github.png";
import LinkedIn from "./img/linkedin.png";
import Instagram from "./img/instagram.png";
import Vector1 from "./img/Vector1.png";
import Vector2 from "./img/Vector2.png";
import boy from "./img/boy.png";
import thumbup from "./img/thumbup.png";
import glassesimoji from "./img/glassesimoji.png";
import Crown from "./img/crown.png";
import FloatingDiv from "./FloatingDiv";
import { motion } from "framer-motion";

function Intro() {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Shamshad Alam</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>

        <button className="button i-button">Hire me</button>

        <div className="i-icons">
          <a href="">
            <img src={Github} alt=""></img>
          </a>
          <a target href="https://www.linkedin.com/in/shamshad-alam-6532471aa">
            <img src={LinkedIn} alt=""></img>
          </a>
          <a href="https://www.instagram.com/shamshad33039/">
            <img src={Instagram} alt=""></img>
          </a>
        </div>
      </div>

      {/* from here left side development part begins */}

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: -"4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>

        {/* this is blue div */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>

        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem"
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
