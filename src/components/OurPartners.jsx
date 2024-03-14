import React, { useState, useEffect } from "react";
import "./Ourpartners.css";
import Cosmos from "../assets/infra-icons/cosmos.png";
import Polygen from "../assets/infra-icons/polygon.png";
import Osmosis from "../assets/infra-icons/osmosis.png";
import Akash from "../assets/infra-icons/akash.png";
import Passage from "../assets/infra-icons/passage.png";
import Stargaze from "../assets/infra-icons/stargaze.png";
import Regen from "../assets/infra-icons/regen.png";
import Umee from "../assets/infra-icons/umee.png";
import Evmos from "../assets/infra-icons/evmos.png";
import Agoric from "../assets/infra-icons/agoric.png";
import Oasis from "../assets/infra-icons/oasis.png";
import CountUp from "react-countup";
const LOGOS = [
  {
    name: "Akash",
    icon: Akash,
    size: 55,
    mobileSize: 30,
    bgColor: "#ed3524",
    hoverColor: "#7D1729",
    link: "https://akash.network/",
  },
  {
    name: "Cosmos Hub",
    icon: Cosmos,
    size: 55,
    mobileSize: 30,
    bgColor: "#393F68",
    hoverColor: "#1e2763",
    link: "https://cosmos.network/",
  },
  {
    name: "Polygon",
    icon: Polygen,
    size: 55,
    mobileSize: 30,
    bgColor: "#9757da",
    hoverColor: "#5b1b9e",
    link: "https://polygon.technology/",
  },
  {
    name: "Passage",
    icon: Passage,
    size: 55,
    mobileSize: 30,
    bgColor: "#808080",
    hoverColor: "#8a7c7c",
    link: "https://passage3d.com/",
  },
  {
    name: "Regen",
    icon: Regen,
    size: 55,
    mobileSize: 30,
    bgColor: "#9bd5af",
    hoverColor: "#5cbf7e",
    link: "https://www.regen.network/",
  },
  {
    name: "Osmosis",
    icon: Osmosis,
    size: 55,
    mobileSize: 30,
    bgColor: "#a289bf",
    hoverColor: "#6428a8",
    link: "https://osmosis.zone/",
  },

  {
    name: "Oasis",
    icon: Oasis,
    size: 55,
    mobileSize: 30,
    bgColor: "#00c6eb",
    hoverColor: "#3da0b3",
    link: "https://oasisprotocol.org/",
  },
  {
    name: "Stargaze",
    icon: Stargaze,
    size: 55,
    mobileSize: 30,
    bgColor: "#c8dc7c",
    hoverColor: "#98b52a",
    link: "https://stargaze.zone/",
  },

  {
    name: "Umee",
    icon: Umee,
    size: 55,
    mobileSize: 30,
    bgColor: "#e0b0ff",
    hoverColor: "#611d8c",
    link: "https://www.umee.cc/",
  },
  {
    name: "Evmos",
    icon: Evmos,
    size: 55,
    mobileSize: 30,
    bgColor: "#f1705b",
    hoverColor: "#ad3e2b",
    link: "https://evmos.org/",
  },
  {
    name: "Agoric",
    icon: Agoric,
    size: 55,
    mobileSize: 30,
    bgColor: "#7D1729",
    hoverColor: "#7a071c",
    link: "https://agoric.com/",
  },
  {
    name: "10+ More",
    icon: "",
    size: 55,
    mobileSize: 30,
    bgColor: "#808080",
  },
];
const OurPartners = () => {
  // const [typedText, setTypedText] = useState("");
  // const [typedText2, setTypedText2] = useState("");

  // const textsToType = ["Why Delegate", "to us ?"];

  // useEffect(() => {
  //   let textIndex = 0;
  //   let charIndex = 0;

  //   const typingInterval = setInterval(() => {
  //     if (textsToType[textIndex].length === charIndex && textIndex === 1) {
  //       clearInterval(typingInterval);
  //     } else if (textIndex === 0 && charIndex === textsToType[0].length) {
  //       charIndex = 0;
  //       textIndex++;
  //     } else if (textIndex === 1) {
  //       charIndex++;
  //       setTypedText2(textsToType[1].slice(0, charIndex));
  //     } else {
  //       charIndex++;
  //       setTypedText(textsToType[0].slice(0, charIndex));
  //     }
  //   }, 200);
  //   return () => clearInterval(typingInterval);
  // }, []);
  return (
    <>
      <div className="main22-ourpartners">
        {/* maindevelop cantioner start */}
        <div className="maindevelop-partners">
          {/* leftdevelop cantioner start */}
          <div className="leftdevelop-partners">
            <div className="subleftdevelop1-partners text-start hidden md:block">
              <h1 className="lg:text-5xl md:text-4xl">
                Why Delegate
                <br></br>
                <span className="servicesdevelop lg:text-5xl md:text-4xl">
                  to us?
                </span>
              </h1>
            </div>
            <div className="block">
              <div className="figma2001-infra  h-[58vh] ">
                <div className="relative">
                  <div className="dot1 w-[200px] h-[200px] lg:w-[275px] lg:h-[275px] relative overflow-hidden flex flex-col justify-center items-center">
                    <div className="absolute dot1-gradient h-full w-full top-0 left-0 "></div>
                    <div className="z-10 flex flex-col">
                      <div className="count-text text-[20px] lg:text-[40px]">
                        $
                        <CountUp
                          start={0}
                          end={40}
                          duration={2.5}
                          separator=","
                        />
                        M<span>+</span>{" "}
                      </div>
                      <div className="text-stats text-[14px] lg:text-[20px]">
                        AUM
                      </div>
                    </div>
                  </div>
                  <div className="dot2 relative overflow-hidden w-[140px] h-[140px] lg:w-[210px] lg:h-[210px] left-[58%] lg:left-[50%] flex flex-col justify-center items-center">
                    <div className="absolute dot2-gradient h-full w-full top-0 left-0 "></div>
                    <div className="z-10 flex flex-col">
                      <div className="count-text text-[20px] lg:text-[40px]">
                        <CountUp
                          start={0}
                          end={"19"}
                          duration={2.5}
                          separator=","
                        />
                        K <span>+</span>{" "}
                      </div>

                      <div className="text-stats text-[14px] lg:text-[20px]">
                        Deligators
                      </div>
                    </div>
                  </div>
                  <div className="dot3 relative overflow-hidden w-[134px] h-[134px] lg:w-[206px] lg:h-[206px] flex flex-col justify-center items-center">
                    <div className="absolute dot3-gradient h-full w-full top-0 left-0 "></div>
                    <div className="z-10 flex flex-col">
                      <div className="count-text text-[20px] lg:text-[40px]">
                        <CountUp start={0} end={22} duration={3} />
                        <span>+</span>{" "}
                      </div>

                      <div className="text-stats text-[14px] lg:text-[20px]">
                        {" "}
                        Validators
                      </div>
                    </div>
                  </div>
                  <div className="dot4 relative overflow-hidden w-[100px] h-[100px] lg:w-[180px] lg:h-[180px] left-[22%] lg:left-[13%] translate-y-[-363px] hover:scale-[1.2] hover:translate-y-[-363px]  lg:translate-y-[-546px] lg:hover:translate-y-[-530px]  flex-col justify-center items-center">
                    <div className="absolute dot4-gradient h-full w-full top-0 left-0 "></div>
                    <div className="z-10 flex flex-col">
                      <div className="count-text text text-[20px] lg:text-[40px]">
                        <CountUp start={0} end={5} duration={3} />
                      </div>
                      <div className="text-stats text-[14px] lg:text-[20px]">
                        Validator <br></br>Advisors{" "}
                      </div>
                    </div>
                  </div>
                  <div className="dot5 relative overflow-hidden w-[90px] h-[90px] lg:w-[155px] lg:h-[155px] left-[65%] lg:left-[53%] flex-col flex justify-center items-center">
                    <div className="absolute dot5-gradient h-full w-full top-0 left-0 "></div>
                    <div className="z-10 flex flex-col">
                      <div className="count-text text-[20px] lg:text-[40px]">
                        <CountUp start={0} end={10} duration={3} />
                        <span>+</span>
                      </div>
                      <div className="text-stats text-[14px] lg:text-[20px]">
                        Relayers
                      </div>
                    </div>
                  </div>
                  <div className="dot6 w-[40px] h-[40px] lg:h-[50px] lg:w-[50px] translate-y-[-64vh] lg:translate-y-[-95vh]"></div>
                  <span className="dot10 h-[40px] w-[40px] lg:w-[58px] lg:h-[58px] translate-y-[-1364%] lg:translate-y-[-1516%] left-[56%] lg:left-[52%]"></span>
                  <span className="dot7 w-[40px] h-[40px] lg:h-[54px] lg:w-[54px] translate-y-[-36vh] lg:translate-y-[-56vh]"></span>
                  <span className="dot9 w-[40px] h-[40px] lg:h-[54px] lg:w-[54px] translate-y-[-50vh] lg:translate-y-[-65vh] left-[7%] lg:left-[14%]"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="RightDevelop-partners">
            <div className="ourpartners-text hidden  lg:text-sm md:text-sm sm:text-xs xs:text-xs md:block">
              <p>
                We are one of the builders of Cosmos-SDK and we know how it
                works best.
              </p>
            </div>

            <div className="subleftdevelop1-delegate lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl mb-12 md:hidden">
              <h1 style={{ fontFamily: "Libre Franklin" }}>
                Networks &nbsp;
                <span className="servicesdevelop">We Support</span>
              </h1>
            </div>
            <div className="grid grid-cols-3  gap-y-14 gap-x-6">
              {LOGOS.map((logo, logoId) => (
                <div key={logoId} className="grid-item ">
                  <a href={logo.link} target="_blank" rel="noopener noreferrer">
                    <div
                      className={`icon-container ${
                        logo.bgColor.length === 0
                          ? "cursor-pointer"
                          : "cursor-default"
                      }`}
                    >
                      <div className="comsos-logo-style">
                        {logo.icon && (
                          <img
                            src={logo.icon}
                            alt={`${logo.name}-logo`}
                            // className={`w-[${logo.mobileSize}px] h-[${logo.mobileSize}px] lg:w-[${logo.size}px] lg:h-[${logo.size}px]`}
                            className="sm:w-[30px] xs:w-[40px] lg:w-[55px]"
                          />
                        )}
                      </div>
                      <div>
                        <button
                          className="cosmos text-[10px] md:text-xs lg:text-[16px] h-[55px] lg:h-[70px]"
                          style={{ backgroundColor: logo.bgColor }}
                          onMouseOver={(e) =>
                            (e.target.style.backgroundColor = logo.hoverColor)
                          }
                          onMouseOut={(e) =>
                            (e.target.style.backgroundColor = logo.bgColor)
                          }
                        >
                          {logo.name}
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            <div className="hidden md:block">
              <a
                href=" https://resolute.vitwit.com/staking/validator/witval"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="infra-btn infra-icons-text">
                  {" "}
                  Stake with VITWIT
                </button>
              </a>
            </div>
          </div>

          {/*RightDevelop cantioner end */}
        </div>
        {/* maindevelop cantioner end */}
      </div>
    </>
  );
};

export default OurPartners;
