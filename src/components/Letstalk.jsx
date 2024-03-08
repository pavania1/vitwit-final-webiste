import React, { useState, useEffect } from "react";
import "./Letstalk.css";
import ContactPopup from "./ContactPopup";
import OurPartners from "./OurPartners";
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
          Feel free to conatct us by filling this form or you can even reach us
          out from the social media links below.
        </p>
        {/* <div className="v-line"></div> */}
        <div className="xs:hidden sm:hidden lg:block">
          <button className="get-touch-btn nav-text mt-5 mx-auto">
            <a href="mailto:contact@vitwit.com">Connect to us</a>
          </button>
        </div>
        <div className="lg:hidden">
          <button
            className="nav-text mt-5 get-touch-btn mx-auto"
            onClick={handleConnectClick}
          >
            Connect With Us
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
