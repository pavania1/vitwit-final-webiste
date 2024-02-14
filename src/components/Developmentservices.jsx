import React, { useState, useEffect } from "react";
import "./Development.css";
import { Alert, Space } from "antd";
import CountUp from "react-countup";
const Development = () => {
  const [typedText, setTypedText] = useState("");
  const [typedText2, setTypedText2] = useState("");

  const textsToType = ["Development", "Services"];

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
      <div id="development" className="main22-infra">
        {/* maindevelop cantioner start */}
        <div className="maindevelop-infra">
          {/* leftdevelop cantioner start */}
          <div className="leftdevelop-infra">
            <div className="subleftdevelop1-infra">
              <h1>
                {typedText}
                <br></br>
                <span className="servicesdevelop-infra">{typedText2}</span>
              </h1>
            </div>

            <div className="subleftdevelop2-infra">
              <Space
                className="space-alert-dev gap-10"
                direction="vertical"
                style={{
                  width: "100%",
                }}
              >
                <Alert
                  className="alert2001-infra border-none"
                  message={
                    <span className="development-alert-head">
                      Blockchain Development Using Cosmos SDK
                    </span>
                  }
                  description={
                    <span className="development-alert-text">
                      Harness the power of the Cosmos SDK to build scalable,
                      interoperable blockchain networks. Our expertise ensures
                      your project is developed with cutting-edge technology for
                      maximum efficiency and performance.
                    </span>
                  }
                  style={{
                    padding: 15,
                    marginBottom: "10px",
                    marginTop: "15px",
                    width: "100%",
                  }}
                />
                <Alert
                  className="alert2001-infra border-none"
                  message={
                    <span className="development-alert-head">
                      IBC Apps and Rollapps Development
                    </span>
                  }
                  description={
                    <span className="development-alert-text">
                      Expand your blockchain's capabilities with IBC apps and
                      Rollapps, creating seamless connections and
                      functionalities across different chains. Our development
                      services open new pathways for interoperability and
                      innovation.
                    </span>
                  }
                  style={{ padding: 15, marginBottom: "10px", width: "100%" }}
                />
                <Alert
                  className="alert2001-infra border-none"
                  message={
                    <span className="development-alert-head">Code Audits</span>
                  }
                  description={
                    <span className="development-alert-text">
                      Elevate the security and reliability of your blockchain
                      applications with our comprehensive code audit services.
                      We scrutinize every line to identify vulnerabilities,
                      ensuring your codebase is robust and ready for deployment.
                    </span>
                  }
                  style={{ padding: 15, marginBottom: "10px", width: "100%" }}
                />
                <Alert
                  className="alert2001-infra border-none"
                  message={
                    <span className="development-alert-head">
                      CosmWasm Smart Contract Development
                    </span>
                  }
                  description={
                    <span className="development-alert-text">
                      Leverage the flexibility of CosmWasm for building
                      powerful, secure smart contracts. Our team specializes in
                      crafting custom solutions that bring your blockchain
                      functionalities to life, meeting the highest standards of
                      quality and innovation.
                    </span>
                  }
                  style={{ padding: 15, marginBottom: "10px", width: "100%" }}
                />
              </Space>
            </div>
          </div>
          {/* leftdevelop cantioner end */}

          {/* RightDevelop cantioner start */}
          <div className="RightDevelop-infra">
            <p className="development-alert-text mt-10">
              Discover unparalleled expertise in blockchain development and
              consulting. Our dedicated team guides you through the complexities
              of blockchain technology, delivering innovative solutions that
              drive your business forward
            </p>

            <div className="figma2001-infra">
              <div className="circles-infra">
                <div className="dot1-infra dot-animation flex flex-col justify-center items-center">
                  <span className="text-5xl">
                    <CountUp
                      start={0}
                      end={1000}
                      duration={2.5}
                      separator=","
                    />
                    <span className="text-[rgba(255,255,255,0.40)]">+</span>{" "}
                  </span>
                  <span className="text-base">Opensource commits</span>
                </div>

                <div className="dot2-infra dot-animation flex flex-col justify-center items-center">
                  <span className="text-3xl	">
                    <CountUp start={0} end={10} duration={2.5} separator="," />
                    <span className="text-[rgba(255,255,255,0.40)]">
                      +
                    </span>{" "}
                  </span>

                  <span className="text-sm">Projects delivered</span>
                </div>

                <div className="dot3-infra dot-animation flex flex-col justify-center items-center">
                  <span className="text-lg	">
                    <CountUp start={0} end={4} duration={3} />
                    <span className="text-[rgba(255,255,255,0.40)]">
                      +
                    </span>{" "}
                  </span>

                  <span className="text-sm">Mainnet launches</span>
                </div>

                <div className="dot4-infra dot-animationflex flex-col justify-center items-center">
                  <span className="text-2xl">
                    <CountUp start={0} end={8} duration={3} />
                    <span className="text-[rgba(255,255,255,0.40)]">
                      +
                    </span>{" "}
                  </span>
                  <span className="text-sm">Partnerships</span>
                </div>
                <div className="dot5-infra dot-animation flex flex-col justify-center items-center">
                  <span className="text-lg">
                    {" "}
                    4 <span className="text-[rgba(255,255,255,0.40)]">
                      +
                    </span>{" "}
                    <br></br>
                  </span>
                  <span className="text-xs">Total Networks</span>
                </div>
                <span className="dot6-infra"></span>
                <span className="dot7-infra"></span>
                <span className="dot8-infra"></span>
                <span className="dot9-infra"></span>
                <span className="dot10-infra"></span>
              </div>
            </div>
          </div>
          {/*RightDevelop cantioner end */}
        </div>
        {/* maindevelop cantioner end */}
      </div>
      <br></br>
    </>
  );
};

export default Development;
