import React from "react";
import "./Development.css";
import { Alert, Space } from "antd";
import CountUp from "react-countup";
const Development = () => {
  return (
    <>
      <div id="development" className="main22-infra">
        {/* maindevelop cantioner start */}
        <div className="flex m-auto flex-col">
          {/* leftdevelop cantioner start */}
          <div className="justify-between xs:hidden sm:hidden lg:flex">
            <div className="subleftdevelop1-infra lg:text-left mb-4">
              <h1 className="lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl m-0 p-0">
                Development
                <br></br>
                <span className="servicesdevelop-infra lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl">
                  Services
                </span>
              </h1>
            </div>
            <div className="development-alert-text w-[50%]  lg:text-xs md:text-xs sm:text-[10px] xs:text-[10px] text-left">
              Discover unparalleled expertise in blockchain development and
              consulting. Our dedicated team guides you through the complexities
              of blockchain technology, delivering innovative solutions that
              drive your business forward.
            </div>
          </div>
          <div className="flex-col xs:block lg:hidden">
            <div className="subleftdevelop1-infra">
              <h1 className="lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl m-0 p-0">
                Development &nbsp;
                <span className="servicesdevelop-infra lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl">
                  Services
                </span>
              </h1>
            </div>
            <div className="development-alert-text lg:text-xs md:text-xs sm:text-[10px] xs:text-[10px] mb-4">
              Discover unparalleled expertise in blockchain development and
              consulting. Our dedicated team guides you through the complexities
              of blockchain technology, delivering innovative solutions that
              drive your business forward.
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row">
            <div className="leftdevelop-infra md:w-[45%]">
              <Space
                className="space-alert-dev gap-8"
                direction="vertical"
                style={{
                  width: "100%",
                }}
              >
                <Alert
                  className="w-full text-start p-[30px] rounded-2xl border-none bg-[#ffffff14] lg:develop-alert-background  md:develop-alert-background hover:bg-[#372752]"
                  message={
                    <span className="development-alert-head lg:text-sm md:text-sm sm:text-xs xs:text-xs ">
                      Blockchain Development Using Cosmos SDK
                    </span>
                  }
                  description={
                    <span className="development-alert-text lg:text-xs md:text-xs sm:text-[10px] xs:text-[10px]">
                      Harness the power of the Cosmos SDK to build scalable,
                      interoperable blockchain networks. Our expertise ensures
                      your project is developed with cutting-edge technology for
                      maximum efficiency and performance.
                    </span>
                  }
                  style={{
                    padding: 30,
                    marginBottom: "10px",
                    marginTop: "15px",
                    width: "100%",
                  }}
                />
                <Alert
                  className="w-full text-start p-[30px] rounded-2xl border-none bg-[#ffffff14] lg:develop-alert-background  md:develop-alert-background hover:bg-[#372752]"
                  message={
                    <span className="development-alert-head lg:text-sm md:text-sm sm:text-xs xs:text-xs">
                      IBC Apps and Rollapps Development
                    </span>
                  }
                  description={
                    <span className="development-alert-text lg:text-xs md:text-xs sm:text-[10px] xs:text-[10px]">
                      Expand your blockchain's capabilities with IBC apps and
                      Rollapps, creating seamless connections and
                      functionalities across different chains. Our development
                      services open new pathways for interoperability and
                      innovation.
                    </span>
                  }
                  style={{ padding: 30, marginBottom: "10px", width: "100%" }}
                />
                {/* <Alert
                  className="w-full text-start p-[30px] rounded-2xl border-none bg-[#ffffff14] lg:develop-alert-background  md:develop-alert-background"
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
                  style={{ padding: 30, marginBottom: "10px", width: "100%" }}
                /> */}
                <Alert
                  className="w-full text-start p-[30px] rounded-2xl border-none bg-[#ffffff14] lg:develop-alert-background  md:develop-alert-background hover:bg-[#372752]"
                  message={
                    <span className="development-alert-head lg:text-sm md:text-sm sm:text-xs xs:text-xs">
                      CosmWasm Smart Contract Development
                    </span>
                  }
                  description={
                    <span className="development-alert-text lg:text-xs md:text-xs sm:text-[10px] xs:text-[10px]">
                      Leverage the flexibility of CosmWasm for building
                      powerful, secure smart contracts. Our team specializes in
                      crafting custom solutions that bring your blockchain
                      functionalities to life, meeting the highest standards of
                      quality and innovation.
                    </span>
                  }
                  style={{ padding: 30, marginBottom: "10px", width: "100%" }}
                />
              </Space>
            </div>
            {/* leftdevelop cantioner end */}

            {/* RightDevelop cantioner start */}
            <div className="RightDevelop-infra sm:hidden xs:hidden lg:block">
              <div className="figma2001-infra relative">
                <div className="dot1-infra  dot-animation flex flex-col justify-center items-center">
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
                <div className="dot2-infra dot-animation flex flex-col justify-center items-center">
                  <span className="count-text">
                    <CountUp start={0} end={10} duration={2.5} separator="," />
                    <span>+</span>{" "}
                  </span>

                  <span className="text-stats">Projects Delivered</span>
                </div>
                <div className="dot3-infra dot-animation flex flex-col justify-center items-center">
                  <span className="count-text">
                    <CountUp start={0} end={8} duration={3} />
                    <span>+</span>{" "}
                  </span>

                  <span className="text-stats"> Partnerships</span>
                </div>
                <div className="dot4-infra dot-animation flex-col justify-center items-center">
                  <span className="count-text">
                    <CountUp start={0} end={4} duration={3} />
                    <span>+</span>{" "}
                  </span>
                  <span className="text-stats">
                    Mainnet <br></br>Launches{" "}
                  </span>
                </div>
                <span className="dot6-infra"></span>
                <span className="dot10-infra"></span>
                <span className="dot7-infra"></span>
                <span className="dot9-infra"></span>
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
