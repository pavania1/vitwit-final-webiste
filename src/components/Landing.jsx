import React, { useEffect, useRef } from "react";
import "./Landing.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// import LandingImage from "../assets/landing-image.png"
import LandingImage from "../assets/laning-image.png";

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
        <div className="landing flex w-full">
          <div className="h-full">
            <div className="leftdevelop-landing mx-auto bg-cover ">
              <div className="subleftdevelop1-landing">
                <h1>Trusted partners for your </h1>
                <span className="servicesdevelop-landing">{text}</span>
                <Cursor />
              </div>

              <div className="landing-text-main">
                <div className="landing-text-para">
                  From strategic planning to execution, our comprehensive
                  services are tailored to meet your unique needs. Partner with
                  us to harness the power of blockchain and unlock new
                  opportunities for growth and efficiency. With Vitwit, you get
                  personalized support every step of the way.
                </div>
              </div>
              <div>
                <button className="get-touch-btn nav-text mx-auto">
                  <a href="#development">Know More</a>
                </button>
              </div>
            </div>
          </div>
          {/* leftdevelop cantioner end */}

          {/* RightDevelop cantioner start */}
          {/* <div className="RightDevelop-landing">
              <img src={LandingImage} alt="Landing-Image" className=" h-[36rem] w-[57rem]"/>
            </div> */}
          {/*RightDevelop cantioner end */}
        </div>
      </div>
      {/* maindevelop cantioner end */}
    </div>
  );
};

export default Landing;
