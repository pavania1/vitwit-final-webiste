import React, { useState } from "react";
import VitwitLogo from "../assets/vitwit-logo.svg";
import HamburgerIcon from "../assets/HamburgerIcon";
import CloseIcon from "../assets/CloseIcon";
import GetinTouch from "./GetinTouch";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const [showGetInTouch, setShowGetInTouch] = useState(false);

  const handleGetInTouchClick = () => {
    setShowGetInTouch(true);
  };
  return (
    <div className="nav">
      <img className="nav__logo" src={VitwitLogo} alt="Vitwit Logo" />
      <div className="menu-list nav-text sm:hidden  xs:hidden md:flex lg:flex">
        <a href="#landing">About Us</a>
        <a href="#infrastructure">Services</a>
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
            <div
              onClick={handleClick}
              className="md:hidden lg:hidden xs:block sm:block cursor-pointer right-5 absolute"
            >
              <CloseIcon />
            </div>
            <a className="my-4" href="#landing">
              About Us
            </a>
            <a className="my-4" href="#infrastructure">
              Services
            </a>
            <a className="my-4" href="#resolute">
              Resolute
            </a>
          </div>
          {/* <div
            onClick={handleClick}
            className="md:hidden lg:hidden xs:block sm:block cursor-pointer absolute h-[70vh] z-50 top-[30vh] w-full"
          ></div> */}
        </div>
      ) : null}

      <GetinTouch
        open={showGetInTouch}
        close={() => {
          setShowGetInTouch(false);
        }}
      />
    </div>
  );
};

export default Navbar;
