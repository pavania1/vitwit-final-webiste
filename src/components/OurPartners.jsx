import React, { useState, useEffect } from "react";
import "./Ourpartners.css";
import { Alert, Space } from "antd";
import Engineering from "../assets/delegateus/engineering.svg";
import Enterprise from "../assets/delegateus/enterprise.svg";
import Security from "../assets/delegateus/security.svg";
import Infrastructure from "../assets/delegateus/infrastructure.svg";
import Cosmos from "../assets/infra-icons/comos-infra.png";
import Polygen from "../assets/infra-icons/polygon-infra.png";
import Osmosis from "../assets/infra-icons/osmosis-infra.png";
import Akash from "../assets/infra-icons/akash-infra.png";
import Passage from "../assets/infra-icons/passage-infra.png";
import Stargaze from "../assets/infra-icons/stargaze-infra.png";
import Regen from "../assets/infra-icons/regen-infra.png";
import Umee from "../assets/infra-icons/umee-infra.png";
import Evmos from "../assets/infra-icons/evmos-infra.png";
import Agoric from "../assets/infra-icons/agoric-infra.png";
import Oasis from "../assets/infra-icons/oasis-infra.png";
import CountUp from "react-countup";
const LOGOS = [
  {
    name: "Akash",
    icon: Akash,
    size: 62,
    bgColor: "#ed3524",
    hoverColor: "#7D1729",
    link: "https://akash.network/",
  },
  {
    name: "Cosmos Hub",
    icon: Cosmos,
    size: 58,
    bgColor: "#393F68",
    hoverColor: "black",
    link: "https://cosmos.network/",
  },
  {
    name: "Polygon",
    icon: Polygen,
    size: 62,
    bgColor: "#9757da",
    hoverColor: "#11208a",
    link: "https://polygon.technology/",
  },
  {
    name: "Passage",
    icon: Passage,
    size: 62,
    bgColor: "#808080",
    hoverColor: "",
    link: "https://passage3d.com/",
  },
  {
    name: "Regen",
    icon: Regen,
    size: 58,
    bgColor: "#9bd5af",
    hoverColor: "",
    link: "https://www.regen.network/",
  },
  {
    name: "Osmosis",
    icon: Osmosis,
    size: 62,
    bgColor: "#a289bf",
    hoverColor: "",
    link: "https://osmosis.zone/",
  },

  {
    name: "Oasis",
    icon: Oasis,
    size: 62,
    bgColor: "#00c6eb",
    hoverColor: "",
    link: "https://oasisprotocol.org/",
  },
  {
    name: "Stargaze",
    icon: Stargaze,
    size: 58,
    bgColor: "#c8dc7c",
    hoverColor: "",
    link: "https://stargaze.zone/",
  },

  {
    name: "Umee",
    icon: Umee,
    size: 62,
    bgColor: "#e0b0ff",
    hoverColor: "",
    link: "https://www.umee.cc/",
  },
  {
    name: "Evmos",
    icon: Evmos,
    size: 58,
    bgColor: "#f1705b",
    hoverColor: "",
    link: "https://evmos.org/",
  },
  {
    name: "Agoric",
    icon: Agoric,
    size: 58,
    bgColor: "#7D1729",
    hoverColor: "",
    link: "https://agoric.com/",
  },
  {
    name: "10+ More",
    icon: "",
    size: 62,
    bgColor: "#376151",
  },
];
const OurPartners = () => {
  const [typedText, setTypedText] = useState("");
  const [typedText2, setTypedText2] = useState("");

  const textsToType = ["Why Delegate", "to us ?"];

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
    <>
      <div className="main22-ourpartners">
        {/* maindevelop cantioner start */}
        <div className="maindevelop-partners">
          {/* leftdevelop cantioner start */}
          <div className="leftdevelop-partners">
            <div className="subleftdevelop1-partners">
              <h1>
                {typedText}
                <br></br>
                <span className="servicesdevelop">{typedText2}</span>
              </h1>
            </div>

            <div className="figma2001-infra">
              <div className="circles-infra">
                <div className="dot1 flex flex-col justify-center items-center">
                  <span className="count-text">
                    <CountUp
                      start={0}
                      end={1000}
                      duration={2.5}
                      separator=","
                    />
                    <span>+</span>{" "}
                  </span>
                  <span className="text-stats">Open Source Commits</span>
                </div>
                <div className="dot2 flex flex-col justify-center items-center">
                  <span className="count-text">
                    <CountUp start={0} end={10} duration={2.5} separator="," />
                    <span>+</span>{" "}
                  </span>

                  <span className="text-stats">Projects Delivered</span>
                </div>
                <div className="dot3 flex flex-col justify-center items-center">
                  <span className="count-text">
                    <CountUp start={0} end={8} duration={3} />
                    <span>+</span>{" "}
                  </span>

                  <span className="text-stats"> Partnerships</span>
                </div>
                <div className="dot4 dot-animationflex flex-col justify-center items-center">
                  <span className="count-text">
                    <CountUp start={0} end={4} duration={3} />
                    <span>+</span>{" "}
                  </span>
                  <span className="text-stats">
                    Mainnet <br></br>Launches{" "}
                  </span>
                </div>
                <span className="dot6"></span>
                <span className="dot10"></span>
                <span className="dot7"></span>
                <span className="dot9"></span>
              </div>
            </div>
          </div>
          <div className="RightDevelop-partners">
            <div className="ourpartners-text">
              <p>
                Discover unparalleled expertise in blockchain development and
                consulting. Our dedicated team guides you through the
                complexities of blockchain technology, delivering innovative
                solutions that drive your business forward.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-x-6 gap-y-14">
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
                            height={logo.size}
                            width={logo.size}
                          />
                        )}
                      </div>
                      <div>
                        <button
                          className="cosmos"
                          style={{ backgroundColor: logo.bgColor }}
                        >
                          {logo.name}
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            <div className="">
              <button className="infra-btn infra-icons-text">
                Stake with VITWIT
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
