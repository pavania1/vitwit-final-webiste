import React, { useEffect, useRef, useState } from "react";
import "./Landing.css";
import { Cursor } from "react-simple-typewriter";
import Akash from "../assets/partners/akash.png";
import Regen from "../assets/partners/regen.svg";
import Polygon from "../assets/partners/polygon.png";
import Cosmos from "../assets/partners/cosmos.png";
import Paloma from "../assets/partners/paloma final.png";
import Passage from "../assets/partners/passage.png";
import Chainflow from "../assets/partners/chainflow.png";
import ContactPopup from "./ContactPopup";
import AgeFund from "../assets/partners/age.png";
import Binarybuilders from "../assets/partners/binarybuilders.png";
import Avail from "../assets/partners/avail .png";
import Cheqd from "../assets/partners/cheqd.png";
import Marquee from "react-fast-marquee";
import GetinTouch from "./GetinTouch";
import Mail from "../assets/gmail.svg";
const Landing = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  const [showGetInTouch, setShowGetInTouch] = useState(false);
  const handleGetInTouchClick = () => {
    setShowGetInTouch(true);
  };

  const [showContactPopup, setShowContactPopup] = useState(false);
  const handleConnectClick = () => {
    setShowContactPopup(true);
  };

  return (
    <div id="landing" className="main22-landing">
      <div className="mainDevelop-landing myVideo min-h-[100vh] bg-black h-[100vh] xs:min-h-[90vh] sm:min-h-[90vh] xs:h-[90vh] sm:h-[90vh]">
        <div className="landing flex relative  w-full">
          <div className="flex sm:flex-col-reverse xs:flex-col-reverse lg:flex-row justify-between w-full">
            <div className="sm:w-full lg:w-[60%] flex justify-center items-center">
              <div className="h-full">
                <div className="leftDevelop-landing mx-auto lg:p-0  sm:p-4 xs:p-4">
                  <div className="subLeftDevelop1-landing lg:text-2xl md:text-2xl sm:text-xl xs:text-xl sm:text-left xs:text-left lg:pb-5 text-[rgb(225,225,225)]">
                    <h1 className=" text-left lg:mb-7 md:mb-5 xs:mb-0 lg:text-4xl md:text-4xl">
                      Trusted partners for your{" "}
                    </h1>
                  </div>
                  <div className="relative xs:h-[40px] md:h-[50px] lg:h-[60px] overflow-hidden">
                    <div className="absolute z-10 top-0 left-0 translation-text">
                      <h1 className="servicesDevelop-landing lg:text-6xl font-semibold md:text-5xl pb-[10px] sm:text-2xl xs:text-2xl text-left">
                        Appchain Development
                      </h1>
                      <h1 className="servicesDevelop-landing lg:text-6xl font-semibold md:text-5xl pb-[10px] sm:text-2xl xs:text-2xl text-left">
                        IBC app development
                      </h1>
                      <h1 className="servicesDevelop-landing lg:text-6xl font-semibold md:text-5xl pb-[10px] sm:text-2xl xs:text-2xl text-left">
                        Road to mainnet
                      </h1>
                      <h1 className="servicesDevelop-landing lg:text-6xl font-semibold md:text-5xl pb-[10px] sm:text-2xl xs:text-2xl text-left">
                        Protocol Research
                      </h1>
                      <h1 className="servicesDevelop-landing lg:text-6xl font-semibold md:text-5xl pb-[10px] sm:text-2xl xs:text-2xl text-left">
                        Web3 Infrastructure
                      </h1>
                      <h1 className="servicesDevelop-landing lg:text-6xl font-semibold md:text-5xl pb-[10px] sm:text-2xl xs:text-2xl text-left">
                        Appchain Development
                      </h1>
                    </div>

                    <Cursor />
                  </div>

                  <div className="landing-text-main">
                    <div className="landing-text-para  lg:text-base md:text-sm sm:text-xs xs:text-[14px] xs:text-left sm:text-left xs:w-[80%] pb-8 xs:pb-5 sm:pb-5 pt-10 lg:pb-8">
                      Partner with us to harness the power of blockchain and
                      unlock new opportunities for growth and efficiency. With
                      Vitwit, you get personalized support every step of the
                      way.
                    </div>
                  </div>
                  <div className="sm:hidden xs:hidden lg:block pt-4">
                    <button
                      className="get-touch-btn nav-text "
                      onClick={handleGetInTouchClick}
                    >
                      Connect with us
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
                      Connect with us
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
            <div className="lg:w-[40%] xs:mx-auto xs:w-[70%] flex justify-center items-center ">
              <video
                autoPlay
                muted
                loop
                ref={videoRef}
                playsInline
                className=""
              >
                <source
                  src={process.env.PUBLIC_URL + "/videos/pol.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="badge  development-alert-head lg:text-base md:text-base sm:text-sm xs:text-sm fixed right-[-86px] top-[40%] rotate-[-90deg] z-50 sm:hidden xs:hidden md:hidden lg:flex">
        <img src={Mail} alt="Mail-Icon" className="w-[24px] h-[24px]" />
        <button className="" onClick={handleGetInTouchClick}>
          Connect with us
        </button>
      </div>
      <div className="absolute bottom-0  w-full bg-blue-500">
        <div className="partners-bgrnd flex flex-col md:flex-row overflow-hidden ">
          <div className="ourpartners-landing-text text-[12px] lg:hidden mx-auto w-full pt-2 ">
            Our Partners & Clients
          </div>
          <div className="max-w-[1280px] flex justify-center items-center overflow-hidden ">
            <div className="partners-logos relative">
              <div className="ourpartners-landing-text lg:text-[14px] mr-20 text-left ">
                Our Partners & Clients
              </div>

              <div className="relative">
                <div className="absolute top-0 z-10  w-full h-full partners-layer"></div>
                <Marquee autoFill className="max-w-[1100px] ">
                  <img
                    src={Akash}
                    alt="Akash"
                    className="partner-logo mx-5 lg:mx-10"
                  />
                  <img
                    src={Cosmos}
                    alt="Cosmos"
                    className="partner-logo mx-5 lg:mx-10"
                  />
                  <img
                    src={Polygon}
                    alt="Polygon"
                    className="partner-logo mx-5 lg:mx-10"
                  />

                  <img
                    src={Avail}
                    alt="Avail"
                    className="partner-logo mx-5 lg:mx-10 w-[100px] h-[30px] lg:w-[125px] lg:h-[40px]"
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
                    className="partner-logo mx-5 lg:mx-10 w-[120px] lg:w-[120px] h-[60px]"
                  />
                  <img
                    src={Regen}
                    alt="Regen"
                    className="partner-logo mx-5 lg:mx-10 w-[80px] lg:w-[120px] h-[60px]"
                  />
                  <img
                    src={Paloma}
                    alt="Paloma"
                    className="partner-logo w-[80px] lg:w-[120px] h-[60px] mx-5 lg:mx-10"
                  />
                  <img
                    src={AgeFund}
                    alt="AgeFund"
                    className="partner-logo mx-5 lg:mx-10 w-[100px] lg:w-[130px] h-[40px]"
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
