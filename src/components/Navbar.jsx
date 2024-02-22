import React, { useState } from "react";
import VitwitLogo from "../assets/vitwit-logo.png";
import HamburgerIcon from "../assets/HamburgerIcon";
import CloseIcon from "../assets/CloseIcon";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <div className="nav">
      <img className="nav__logo" src={VitwitLogo} alt="Vitwit Logo" />
      <div className="menu-list nav-text sm:hidden xs:hidden md:flex lg:flex">
        <a href="#landing">About Us</a>
        <a href="#infrastructure">Services</a>

        <a href="#partners">Partners</a>
        <a href="#resolute">Resolute</a>
        <div>
          <button className="get-touch-btn">
            <a href="#letstalk">Get in touch</a>
          </button>
        </div>
      </div>
      <div
        onClick={handleClick}
        className="md:hidden lg:hidden xs:block sm:block cursor-pointer"
      >
        <HamburgerIcon />
      </div>

      {open ? (
        <div className="mobile-list nav-text md:hidden lg:hidden xs:flex sm:flex cursor-pointer">
          <div
            onClick={handleClick}
            className="md:hidden lg:hidden xs:block sm:block cursor-pointer right-10 absolute"
          >
            <CloseIcon />
          </div>
          <a href="#landing">About Us</a>
          <a href="#infrastructure">Services</a>

          <a href="#partners">Partners</a>
          <a href="#resolute">Resolute</a>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
