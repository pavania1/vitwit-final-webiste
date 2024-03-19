import React from "react";
import "./Ourpartners.css";
import Cosmos from "../assets/infra-icons/cosmos.png";
import Polygon from "../assets/infra-icons/polygon.png";
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
    icon: Polygon,
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
    bgColor: "#80808060",
  },
];
const OurPartners = () => {
  return (
    <>
      <div className="main22-ourPartners">
        <div className="mainDevelop-partners">
          <div className="leftDevelop-partners">
            <div className="subLeftDevelop1-partners text-start hidden md:block">
              <h1 className="lg:text-5xl md:text-4xl">
                Why Delegate
                <br></br>
                <span className="servicesDevelop lg:text-5xl md:text-4xl">
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
                    <div className="z-10 flex flex-col items-center">
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
                  <div className="dot6 w-[40px] h-[40px] lg:h-[50px] lg:w-[50px] translate-y-[-64vh] lg:translate-y-[-95vh] hidden lg:flex "></div>
                  <span className="dot10 h-[40px] w-[40px] lg:w-[58px] lg:h-[58px] translate-y-[-1364%] lg:translate-y-[-1516%] left-[56%] lg:left-[52%] hidden lg:flex"></span>
                  <span className="dot7 w-[40px] h-[40px] lg:h-[54px] lg:w-[54px] translate-y-[-36vh] lg:translate-y-[-56vh] hidden lg:flex"></span>
                  <span className="dot9 w-[40px] h-[40px] lg:h-[54px] lg:w-[54px] translate-y-[-50vh] lg:translate-y-[-65vh] left-[7%] lg:left-[14%] hidden lg:flex"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="RightDevelop-partners">
            <div className="ourPartners-text hidden  lg:text-sm md:text-sm sm:text-xs xs:text-xs md:block">
              <p>
                We are one of the builders of Cosmos-SDK and we know how it
                works best. Our secure infrastructure and automated monitoring
                helps us to operate high-scale validators.
              </p>
              <div className="hidden md:block mb-28">
                <a
                  href="https://resolute.vitwit.com/validator/vitwit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="get-touch-btn nav-text w-full mt-5">
                    {" "}
                    Stake with Vitwit
                  </button>
                </a>
              </div>
            </div>

            <div className="subLeftDevelop1-delegate lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl mb-12 md:hidden">
              <h1 style={{ fontFamily: "Libre Franklin" }}>
                Networks &nbsp;
                <span className="servicesDevelop">We Support</span>
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
                      <div className="cosmos-logo-style">
                        {logo.icon && (
                          <img
                            src={logo.icon}
                            alt={`${logo.name}-logo`}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPartners;
