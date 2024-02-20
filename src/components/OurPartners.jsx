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
    size: 58,
    bgColor: "#ed3524",
    hoverColor: "#7D1729",
    link: "https://akash.network/",
  },
  {
    name: "Cosmos Hub",
    icon: Cosmos,
    size: 58,
    bgColor: "#393F68",
    hoverColor: "#1e2763",
    link: "https://cosmos.network/",
  },
  {
    name: "Polygon",
    icon: Polygen,
    size: 62,
    bgColor: "#9757da",
    hoverColor: "#5b1b9e",
    link: "https://polygon.technology/",
  },
  {
    name: "Passage",
    icon: Passage,
    size: 62,
    bgColor: "#808080",
    hoverColor: "#8a7c7c",
    link: "https://passage3d.com/",
  },
  {
    name: "Regen",
    icon: Regen,
    size: 58,
    bgColor: "#9bd5af",
    hoverColor: "#5cbf7e",
    link: "https://www.regen.network/",
  },
  {
    name: "Osmosis",
    icon: Osmosis,
    size: 62,
    bgColor: "#a289bf",
    hoverColor: "#6428a8",
    link: "https://osmosis.zone/",
  },

  {
    name: "Oasis",
    icon: Oasis,
    size: 62,
    bgColor: "#00c6eb",
    hoverColor: "#3da0b3",
    link: "https://oasisprotocol.org/",
  },
  {
    name: "Stargaze",
    icon: Stargaze,
    size: 58,
    bgColor: "#c8dc7c",
    hoverColor: "#98b52a",
    link: "https://stargaze.zone/",
  },

  {
    name: "Umee",
    icon: Umee,
    size: 62,
    bgColor: "#e0b0ff",
    hoverColor: "#611d8c",
    link: "https://www.umee.cc/",
  },
  {
    name: "Evmos",
    icon: Evmos,
    size: 58,
    bgColor: "#f1705b",
    hoverColor: "#ad3e2b",
    link: "https://evmos.org/",
  },
  {
    name: "Agoric",
    icon: Agoric,
    size: 58,
    bgColor: "#7D1729",
    hoverColor: "#7a071c",
    link: "https://agoric.com/",
  },
  {
    name: "10+ More",
    icon: "",
    size: 62,
    bgColor: "#808080",
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
                <div className="dot1 dot-animationflex flex flex-col justify-center items-center">
                  <span className="count-text">
                    $<CountUp start={0} end={40} duration={2.5} separator="," />
                    M<span>+</span>{" "}
                  </span>
                  <span className="text-stats">AUM</span>
                </div>
                <div className="dot2 dot-animationflex flex flex-col justify-center items-center">
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
                <div className="dot3 dot-animationflex flex flex-col justify-center items-center">
                  <span className="count-text">
                    <CountUp start={0} end={22} duration={3} />
                    <span>+</span>{" "}
                  </span>

                  <span className="text-stats"> Validators</span>
                </div>
                <div className="dot4 dot-animationflex flex-col justify-center items-center">
                  <span className="count-text">
                    <CountUp start={0} end={5} duration={3} />
                  </span>
                  <span className="text-stats">
                    Validator <br></br>Advisors{" "}
                  </span>
                </div>
                <div className="dot5 dot-animationflex flex-col flex justify-center items-center">
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
