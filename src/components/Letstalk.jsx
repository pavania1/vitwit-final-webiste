import React, { useState, useEffect } from "react";
import GithubLogo from "../assets/social-icons/github.png";
import LinkedInLogo from "../assets/social-icons/linkedln.png";
import TelegramLogo from "../assets/social-icons/telegram.png";
import TwitterLogo from "../assets/social-icons/twitter.png";
import PersonIcon from "../assets/person-icon.svg";
import EmailIcon from "../assets/gmail.svg";
import "./Letstalk.css";

const Letstalk = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [typedText, setTypedText] = useState("");
  const [typedText2, setTypedText2] = useState("");

  const textsToType = ["Let's", "Talk"];

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (textsToType[textIndex].length === charIndex && textIndex === 1) {
        clearInterval(typingInterval);
      } else if (textIndex === 0 && charIndex === textsToType[0].length) {
        charIndex = 0;
        textIndex++;
      } else if (textIndex === 1) {
        charIndex++;
        setTypedText2(textsToType[1].slice(0, charIndex));
      } else {
        charIndex++;
        setTypedText(textsToType[0].slice(0, charIndex));
      }
    }, 200);
    return () => clearInterval(typingInterval);
  }, []);
  return (
    <div id="letstalk" className="letstalk-main">
      <div className="letstalk-head">
        <div className="lets-text">
          {typedText} <span className="talk-text">{typedText2}</span>
        </div>
        <p className="letstalk-para-text">
          {" "}
          Feel free to conatct us by filling this form or you can even reach us
          out from the social media links below.
        </p>
        <div className="v-line"></div>

        <button className="get-touch-btn nav-text mt-5 mx-auto">
          <a href="mailto:contact@vitwit.com">Connect to us</a>
        </button>
      </div>
    </div>
  );
};

export default Letstalk;
