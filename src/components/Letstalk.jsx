import React, { useState } from "react";
import "./Letstalk.css";
import ContactPopup from "./ContactPopup";
import Delegate from "./Delegate";

const Letstalk = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const handleConnectClick = () => {
    setShowContactPopup(true);
  };
  return (
    <div id="letstalk" className="letstalk-main">
      <Delegate />
      <div className="letstalk-head">
        <div className="lets-text lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl hidden md:block">
          Let's &nbsp;<span className="talk-text">Talk</span>
        </div>
        <div className="lets-text lg:hidden lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl ">
          Get in &nbsp;
          <span className="talk-text lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl">
            Touch
          </span>
        </div>
        <p className="letstalk-para-text  sm:text-xs xs:text-xs lg:text-sm md:text-sm text-center">
          {" "}
          If you have any questions or are interested in discussing anything
          related to Web3, <br /> please don't hesitate to connect with us
          through any of the social channels or via email below. We're here to
          help and eager to engage in conversation!
        </p>
        <div className="xs:hidden sm:hidden lg:block">
          <button className="get-touch-btn nav-text mt-5 mx-auto">
            <a href="mailto:contact@vitwit.com">Email us</a>
          </button>
        </div>
        <div className="lg:hidden">
          <button className="nav-text mt-5 get-touch-btn mx-auto">
            <a href="mailto:contact@vitwit.com">Email us</a>
          </button>
        </div>
      </div>
      <ContactPopup
        open={showContactPopup}
        close={() => {
          setShowContactPopup(false);
        }}
      />
    </div>
  );
};

export default Letstalk;
