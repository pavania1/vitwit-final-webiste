import React, { useState } from "react";
import VitwitLogo from "../assets/vitwit-logo.png";
import HamburgerIcon from "../assets/HamburgerIcon";
import CloseIcon from "../assets/CloseIcon";
import GetinTouch from "./GetinTouch";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const [showGetInTouch, setShowGetInTouch] = useState(false);

  const handleGetInTouchClick = () => {
    setShowGetInTouch(true);
  }
  return (
    <div className="nav">
      <img className="nav__logo px-4" src={VitwitLogo} alt="Vitwit Logo" />
      <div className="menu-list nav-text sm:hidden  xs:hidden md:flex lg:flex">
        <a href="#landing">About Us</a>
        <a href="#infrastructure">Services</a>

        <a href="#partners">Partners</a>
        <a href="#resolute">Resolute</a>
        <div>
          <button className="get-touch-btn" onClick={handleGetInTouchClick}>
            Get in touch
          </button>
        </div>
      </div>
      <div
        onClick={handleClick}
        className="md:hidden lg:hidden xs:block sm:block cursor-pointer pr-4"
      >
        <HamburgerIcon />
      </div>

      {open ? (
        <div className="w-full h-full absolute top-0">
          <div className="mobile-list nav-text md:hidden lg:hidden xs:flex sm:flex cursor-pointer">
            <a className="my-2" href="#landing">
              About Us
            </a>
            <a className="my-2" href="#infrastructure">
              Services
            </a>

            <a className="my-2" href="#partners">
              Partners
            </a>
            <a className="my-2" href="#resolute">
              Resolute
            </a>
          </div>
          <div
            onClick={handleClick}
            className="md:hidden lg:hidden xs:block sm:block cursor-pointer absolute h-[70vh] z-50 top-[30vh] w-full"
          ></div>
        </div>
      ) : null}
      {showGetInTouch && <GetinTouch open={true} />}
    </div>
  );
};

export default Navbar;
