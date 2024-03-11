import React, { useEffect, useRef, useState } from "react";
import "./Landing.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Akash from "../assets/partners/akash.png";
import Regen from "../assets/partners/regen.svg";
import Polygen from "../assets/partners/polygon.png";
import Cosmos from "../assets/partners/cosmos.png";
import Polama from "../assets/partners/paloma final.png";
import Passage from "../assets/partners/passage.png";
import Chainflow from "../assets/partners/chainflow.png";
import ContactPopup from "./ContactPopup";
import AgeFund from "../assets/partners/age.png";
import Binarybuilders from "../assets/partners/binarybuilders.png";
import Avail from "../assets/partners/avail .png";
import Cheqd from "../assets/partners/cheqd.png";
import Marquee from "react-fast-marquee";
import GetinTouch from "./GetinTouch";
const Landing = () => {
  const words = [
    "Appchain Development",
    "IBC-App Development",
    "Roadto mainnet",
    "Protocol Research",
    "Web3 Infrastructure",
  ];

  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState(["", ""]);
  const [showGetInTouch, setShowGetInTouch] = useState(false);
  const handleGetInTouchClick = () => {
    setShowGetInTouch(true);
  };
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout;

    if (typing) {
      timeout = setTimeout(() => {
        if (displayedText[0].length < currentWord.split(" ")[0].length) {
          setDisplayedText([
            currentWord.split(" ")[0].substring(0, displayedText[0].length + 1),
            displayedText[1],
          ]);
        } else if (displayedText[1].length < currentWord.split(" ")[1].length) {
          setDisplayedText([
            displayedText[0],
            currentWord.split(" ")[1].substring(0, displayedText[1].length + 1),
          ]);
        }
      }, 200); // Adjust typing speed here
    } else {
      timeout = setTimeout(() => {
        if (displayedText[1].length > 0) {
          setDisplayedText([
            displayedText[0],
            currentWord.split(" ")[1].substring(0, displayedText[1].length - 1),
          ]);
        } else if (displayedText[0].length > 0) {
          setDisplayedText([
            displayedText[0].substring(0, displayedText[0].length - 1),
            displayedText[1],
          ]);
        }
      }, 100); // Adjust erasing speed here
    }

    if (
      typing &&
      displayedText[0] === currentWord.split(" ")[0] &&
      displayedText[1] === currentWord.split(" ")[1]
    ) {
      setTyping(false);
      setTimeout(() => {
        setTyping(true);
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
        setDisplayedText(["", ""]);
      }, 1000); // Delay before erasing next word
    }

    return () => clearTimeout(timeout);
  }, [typing, displayedText, currentWordIndex, words]);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const handleConnectClick = () => {
    setShowContactPopup(true);
  };

  return (
    <div id="landing" className="main22-landing">
      {/* maindevelop cantioner start */}
      <div className="maindevelop-landing myVideo bg-black">
        <div className="landing flex relative  w-full">
          <div className="flex sm:flex-col-reverse xs:flex-col-reverse lg:flex-row justify-between w-full">
            <div className="sm:w-full lg:w-[50%]">
              <div className="h-full">
                <div className="leftdevelop-landing mx-auto  sm:p-4 xs:p-4 ">
                  <div className="subleftdevelop1-landing lg:text-2xl md:text-2xl sm:text-xl xs:text-xl sm:text-left xs:text-left lg:hidden xs:block sm:block">
                    <h1 className="text-left  ">
                      Trusted partners for your{" "}
                    </h1>
                    <span className="servicesdevelop-landing lg:text-6xl md:text-5xl sm:text-4xl xs:text-4xl text-left">
                      {displayedText[0]}
                    </span>{" "}
                    <br />
                    <span className="servicesdevelop-landing lg:text-6xl md:text-5xl sm:text-4xl xs:text-4xl">
                      {displayedText[1]}
                    </span>
                    <Cursor />
                  </div>
                  <div className="subleftdevelop1-landing lg:text-2xl md:text-2xl sm:text-xl xs:text-xl sm:text-left xs:text-left   lg:block xs:hidden sm:hidden">
                    <h1 className=" text-left mb-5 lg:text-4xl md:text-4xl">
                      Trusted partners for your{" "}
                    </h1>
                    <span className="servicesdevelop-landing lg:text-6xl md:text-5xl sm:text-5xl xs:text-5xl text-left">
                      {displayedText[0]}
                    </span>
                    <br/>
                    <span className="servicesdevelop-landing lg:text-6xl md:text-5xl sm:text-5xl xs:text-5xl text-left">
                      {displayedText[1]}
                    </span>
                    <Cursor />
                  </div>

                  <div className="landing-text-main">
                    <div className="landing-text-para  lg:text-base md:text-sm sm:text-xs xs:text-[14px] xs:text-left sm:text-left xs:w-[80%] ">
                      Partner with us to harness the power of blockchain and
                      unlock new opportunities for growth and efficiency. With
                      Vitwit, you get personalized support every step of the
                      way.
                    </div>
                  </div>
                  <div className="sm:hidden xs:hidden lg:block">
                    <button
                      className="get-touch-btn nav-text "
                      onClick={handleGetInTouchClick}
                    >
                      Connect With Us
                    </button>
                  </div>
                  <GetinTouch
                    open={showGetInTouch}
                    close={() => {
                      setShowGetInTouch(false);
                    }}
                  />
                  <div className="sm:hidden xs:block lg:hidden mb-10">
                    <button
                      className="get-touch-btn nav-text"
                      onClick={handleConnectClick}
                    >
                      Connect With Us
                    </button>
                  </div>
                  <ContactPopup
                    open={showContactPopup}
                    close={() => {
                      setShowContactPopup(false);
                    }}
                  />
                  <br />
                </div>
              </div>
            </div>
            <div className="w-[50%] xs:mx-auto xs:w-[70%] flex justify-center items-center ">
              <video autoPlay muted loop ref={videoRef} className="">
                <source
                  src={process.env.PUBLIC_URL + "/videos/output.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0  w-full">
        <div className="partners-bgrnd flex flex-col md:flex-row overflow-hidden ">
          <div className="ourpartners-landing-text text-[12px] lg:hidden mx-auto w-full pt-2">
            Our Partners
          </div>
          <div className="max-w-[1280px] flex justify-center items-center overflow-hidden ">
            <div className="partners-logos relative">
              <div className="ourpartners-landing-text lg:text-[14px] mr-20 text-left">
                Our Partners
              </div>

              <div className="relative">
                <div className="absolute top-0 z-10  w-full h-full partners-layer"></div>
                <Marquee autoFill className="max-w-[1130px] ">
                  <img src={Akash} alt="Akash" className="partner-logo mx-5 lg:mx-10"/>
                  <img
                    src={Cosmos}
                    alt="Cosmos"
                    className="partner-logo mx-5 lg:mx-10"
                  />
                  <img
                    src={Polygen}
                    alt="Polygen"
                    className="partner-logo mx-5 lg:mx-10"
                  />

                  <img
                    src={Avail}
                    alt="Avail"
                    className="partner-logo mx-5 lg:mx-10 w-[100px] h-[30px] lg:w-[120px] lg:h-[40px]"
                  />
                  <img
                    src={Passage}
                    alt="Passage"
                    className="partner-logo mx-5 lg:mx-10"
                  />
                  <img
                    src={Binarybuilders}
                    alt="BinaryBuilders"
                    className="partner-logo mx-5 lg:mx-10 h-[40px]"
                  />
                  <img
                    src={Chainflow}
                    alt="Chainflow"
                    className="partner-logo mx-5 lg:mx-10 w-[80px] lg:w-[120px] h-[60px]"
                  />
                  <img
                    src={Regen}
                    alt="Regen"
                    className="partner-logo mx-5 lg:mx-10 w-[80px] lg:w-[120px] h-[60px]"
                  />
                  <img
                    src={Polama}
                    alt="Paloma"
                    className="partner-logo w-[80px] lg:w-[120px] h-[60px] mx-5 lg:mx-10"
                  />
                  <img
                    src={AgeFund}
                    alt="AgeFund"
                    className="partner-logo mx-5 lg:mx-10 w-[80px] lg:w-[140px] h-[40px]"
                  />
                  <img
                    src={Cheqd}
                    alt="Cheqd"
                    className="partner-logo mx-5 lg:mx-10 w-[100px] h-[30px] lg:w-[120px] lg:h-[40px] "
                  />
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
