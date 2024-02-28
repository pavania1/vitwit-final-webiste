import React, { useEffect, useRef } from "react";
import "./Landing.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";


const Landing = () => {
  const videoRef = useRef();
  const words = [
    "Appchain development",
    "IBC-app development",
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
        <div className="landing flex w-full ">
          <div className="h-full">
            <div className="leftdevelop-landing mx-auto lg:background-layer md:background-layer lg:w-[70%] sm:p-4 xs:p-4 ">
              <div className="subleftdevelop1-landing lg:text-4xl md:text-3xl sm:text-base xs:text-sm sm:text-left xs:text-left lg:text-center">
                <h1 className="lg:gap-20">Trusted partners for your </h1>
                <span className="servicesdevelop-landing lg:text-6xl md:text-5xl sm:text-2xl xs:text-2xl">{text}</span>
                <Cursor />
              </div>

              <div className="landing-text-main">
                <div className="landing-text-para lg:text-center lg:w-full lg:text-base md:text-sm sm:text-xs xs:text-xs xs:text-left sm:text-left xs:w-[80%] sm:w-[80%]">
                  From strategic planning to execution, our comprehensive
                  services are tailored to meet your unique needs. Partner with
                  us to harness the power of blockchain and unlock new
                  opportunities for growth and efficiency. With Vitwit, you get
                  personalized support every step of the way.
                </div>
              </div>
              <div className="sm:hidden xs:hidden lg:block">
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
