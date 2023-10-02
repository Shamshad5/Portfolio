import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import Intro from "./Intro";
import Services from "./Services";
import Experience from "./Experience";
import Works from "./Works";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className=""
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : ""
      }}
    >
      <div className="App">
        <Navbar />
        <Intro />
        <Services />
        <Experience />
        <Works />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
