import React, { useEffect, useRef } from "react";
import "./Landing.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Landing = () => {
  const videoRef = useRef();
  const words = [
    "Appchain development",
    "Ibc-app development",
    "Road to mainnet",
    "Protocol research",
    "Web3 infrastructure",
  ];

  const [text] = useTypewriter({
    words,
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 120,
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div id="landing" className="main22-landing">
      {/* maindevelop cantioner start */}
      <div className="maindevelop-landing">
        <video autoPlay muted loop ref={videoRef} className="myVideo">
          <source
            src={process.env.PUBLIC_URL + "/videos/background-video.mp4"}
            type="video/mp4"
          />
        </video>
        {/* leftdevelop cantioner start */}
        <div className="leftdevelop-landing">
          <div className="subleftdevelop1-landing">
            <h1>Trusted partners for your &nbsp;
            <span className="servicesdevelop-landing">{text}</span>
            <Cursor />
            </h1>
          </div>

          <div className="landing-text-main">
            <div className="landing-text-para">
              From strategic planning to execution, our comprehensive services
              are tailored to meet your unique needs.<br/> Partner with us to harness
              the power of blockchain and unlock new opportunities for growth
              and efficiency.<br></br> With Vitwit, you get personalized support every
              step of the way.
            </div>
          </div>
          <div>
            <button className="landing-btn-main mx-auto ">
            <a href="#development">Know More</a>
              
            </button>
          </div>
        </div>
        {/* leftdevelop cantioner end */}

        {/* RightDevelop cantioner start */}
        {/* <div className="RightDevelop-landing animated-image">
          <img src={LandingImage} alt="Landing-Image" />
        </div> */}
        {/*RightDevelop cantioner end */}
      </div>
      {/* maindevelop cantioner end */}
    </div>
  );
};

export default Landing;
