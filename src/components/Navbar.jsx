import React from "react";
import VitwitLogo from "../assets/vitwit-logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <img className="nav__logo" src={VitwitLogo} alt="Vitwit Logo" />
      <div className="menu-list nav-text">
        <a href="#landing">About Us</a>
        <a href="#infrastructure">Services</a>
       
        <a href="#partners">Partners</a>
        <a href="#resolute">Resolute</a>
        {/* <div>Ventures</div> */}
        <div>
          <button className="get-touch-btn">
            <a href="#letstalk">Get in touch</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
