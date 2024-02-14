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
const LOGOS = [
  {
    name: "Cosmos Hub",
    icon: Cosmos,
    size: 58,
    bgColor: "#393F68",
  },
  {
    name: "Polygen",
    icon: Polygen,
    size: 62,
    bgColor: "#9757da",
  },
  {
    name: "Osmosis",
    icon: Osmosis,
    size: 62,
    bgColor: "#a289bf",
  },
  {
    name: "Akash",
    icon: Akash,
    size: 62,
    bgColor: "#ed3524",
  },
  {
    name: "Passage",
    icon: Passage,
    size: 62,
    bgColor: "rgba(255, 255, 255, 0.2)",
  },
  {
    name: "Oasis",
    icon: Oasis,
    size: 62,
    bgColor: " #00c6eb",
  },
  {
    name: "Stargaze",
    icon: Stargaze,
    size: 58,
    bgColor: "#c8dc7c",
  },
  {
    name: "Regen",
    icon: Regen,
    size: 58,
    bgColor: "#9bd5af",
  },
  {
    name: "Umee",
    icon: Umee,
    size: 62,
    bgColor: "#e0b0ff",
  },
  {
    name: "Evmos",
    icon: Evmos,
    size: 58,
    bgColor: "#f1705b",
  },
  {
    name: "Agoric",
    icon: Agoric,
    size: 58,
    bgColor: "#7D1729",
  },
  {
    name: "10+ More",
    icon: "",
    size: 62,
    bgColor: "",
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
            
            <div className="figma2001-partners">
              
              <div className="flex mt-10">
                <div className="flex flex-col">
                  <div className="dot4  dot-animation flex flex-col justify-center items-center">
                    <span className="text-2xl">
                      4<span className="text-[rgba(255,255,255,0.40)]">+</span>{" "}
                    </span>
                    <span className="text-sm">Total Networks</span>
                  </div>
                  <div className="dot1 dot-animation flex flex-col justify-center items-center">
                    <span className="text-5xl">
                      4 <span className="text-[rgba(255,255,255,0.40)]">+</span>{" "}
                    </span>
                    <span className="text-sm">Total Networks</span>
                  </div>

                  <div className="dot5 dot-animation flex flex-col justify-center items-center">
                    <span className="text-lg">
                      {" "}
                      4 <span className="text-[rgba(255,255,255,0.40)]">
                        +
                      </span>{" "}
                      <br></br>
                    </span>
                    <span className="text-xs">Total Networks</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="dot2 dot-animation flex flex-col justify-center items-center">
                    <span className="text-3xl	">
                      {" "}
                      4<span className="text-[rgba(255,255,255,0.40)]">
                        {" "}
                        +
                      </span>{" "}
                    </span>

                    <span className="text-sm">Total Networks</span>
                  </div>
                  <div className="dot3 dot-animation flex flex-col justify-center items-center">
                    <span className="text-lg	">
                      {" "}
                      4<span className="text-[rgba(255,255,255,0.40)]">
                        {" "}
                        +
                      </span>{" "}
                    </span>

                    <span className="text-sm">Total Networks</span>
                  </div>
                </div>
              </div>

              <span className="dot6"></span>
              <span className="dot7"></span>
              <span className="dot8"></span>
              <span className="dot9"></span>
              <span className="dot10"></span>
            </div>
          </div>
          
          {/* leftdevelop cantioner end */}

          {/* RightDevelop cantioner start */}
          {/* <div className="RightDevelop-partners">
            <div className="subleftdevelop2-partners">
              <Space
                className="space-alert-dev"
                direction="vertical"
                style={{
                  width: "100%",
                }}
              >
                <div className="alert-main">
                  <div className="alert-right1-partners">
                    <Alert
                      className="alert2001 border-none"
                      message={
                        <>
                          <div className="eng-dot mb-3">
                            <img
                              className=""
                              src={Infrastructure}
                              alt="Alert Image"
                            />
                          </div>
                          <span className="head-text">Infrastructure</span>
                        </>
                      }
                      description={
                        <span className="para-text">
                          Akash Network, the world’s first decentralized and
                          open-source cloud, accelerates deployment, scaleAkash
                          Network.
                        </span>
                      }
                    />

                    <Alert
                      className="alert2002"
                      message={
                        <>
                          <div className="eng-dot4 mb-3">
                            <img
                              className=""
                              src={Enterprise}
                              alt="Alert Image"
                            />
                          </div>
                          <span className="head-text">
                            Enterprise-grade infrastructure
                          </span>
                        </>
                      }
                      description={
                        <span className="para-text">
                          Akash Network, the world’s first decentralized and
                          open-source cloud, accelerates deployment, scaleAkash
                          Network.
                        </span>
                      }
                    />
                  </div>

                  <div className="alert-right2-partners ml-6">
                    <Alert
                      className="alert2003"
                      message={
                        <>
                          <div className="eng-dot2 mb-3">
                            <img
                              className=""
                              src={Engineering}
                              alt="Alert Image"
                            />
                          </div>
                          <span className="head-text">Engineering</span>
                        </>
                      }
                      description={
                        <span className="para-text">
                          Akash Network, the world’s first decentralized and
                          open-source cloud, accelerates deployment, scaleAkash
                          Network.
                        </span>
                      }
                    />
                    <Alert
                      className="alert2004"
                      message={
                        <>
                          <div className="eng-dot3 mb-3">
                            <img
                              className=""
                              src={Security}
                              alt="Alert Image"
                            />
                          </div>
                          <span className="head-text">
                            Security, Monitoring & Alerting
                          </span>
                        </>
                      }
                      description={
                        <span className="para-text">
                          Akash Network, the world’s first decentralized and
                          open-source cloud, accelerates deployment, scaleAkash
                          Network.
                        </span>
                      }
                      // style={{ marginLeft: "30%" }}
                    />
                  </div>
                </div>
              </Space>
            </div>
          </div> */}
          <div className="RightDevelop-partners">
          <div className="ourpartners-text">
              <p>
                We are a core tech company passionate about the research and
                <br></br>
                development of technology solutions that transform businesses
                <br></br>
                and people’s work styles.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-x-6 gap-y-14">
              {LOGOS.map((logo, logoId) => (
                <div
                  key={logoId}
                  className={`${
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
                      className="cosmos infra-icons-text"
                      style={{ backgroundColor: logo.bgColor }}
                    >
                      {logo.name}
                    </button>
                  </div>
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
