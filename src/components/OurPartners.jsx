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
            <div className="sm:hidden xs:hidden lg:block">
              <div className="figma2001-infra">
                <div className="circles-infra ">
                  <div className="dot1  flex flex-col justify-center items-center">
                    <span className="count-text">
                      $
                      <CountUp
                        start={0}
                        end={40}
                        duration={2.5}
                        separator=","
                      />
                      M<span>+</span>{" "}
                    </span>
                    <span className="text-stats">AUM</span>
                  </div>
                  <div className="dot2  flex flex-col justify-center items-center">
                    <span className="count-text">
                      <CountUp
                        start={0}
                        end={"19"}
                        duration={2.5}
                        separator=","
                      />
                      K <span>+</span>{" "}
                    </span>

                    <span className="text-stats">Deligators</span>
                  </div>
                  <div className="dot3  flex flex-col justify-center items-center">
                    <span className="count-text">
                      <CountUp start={0} end={22} duration={3} />
                      <span>+</span>{" "}
                    </span>

                    <span className="text-stats"> Validators</span>
                  </div>
                  <div className="dot4  flex-col justify-center items-center">
                    <span className="count-text">
                      <CountUp start={0} end={5} duration={3} />
                    </span>
                    <span className="text-stats">
                      Validator <br></br>Advisors{" "}
                    </span>
                  </div>
                  <div className="dot5 flex-col flex justify-center items-center">
                    <span className="count-text">
                      <CountUp start={0} end={10} duration={3} />
                      <span>+</span>
                    </span>
                    <span className="text-stats">Relayers</span>
                  </div>
                  <span className="dot6"></span>
                  <span className="dot10"></span>
                  <span className="dot7"></span>
                  <span className="dot9"></span>
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
              <button className="infra-btn infra-icons-text">
                <a href=" https://resolute.vitwit.com/staking/validator/witval ">
                  Stake with VITWIT
                </a>
              </button>
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
