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
              <h1 className="lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl m-0 p-0 ">
                Development
                <br></br>
                <span className="servicesdevelop-infra lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl">
                  Services
                </span>
              </h1>
            </div>
            <div className="development-alert-text w-[50%]  lg:text-sm md:text-sm sm:text-xs xs:text-xs text-left xs:mt-5">
              Discover unparalleled expertise in blockchain development and
              consulting. Our dedicated team guides you through the complexities
              of blockchain technology, delivering innovative solutions that
              drive your business forward.
            </div>
          </div>
          <div className="flex-col xs:block lg:hidden">
            <div className="subleftdevelop1-infra mb-4">
              <h1 className="lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl m-0 p-0">
                Development &nbsp;
                <span className="servicesdevelop-infra lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl">
                  Services
                </span>
              </h1>
            </div>
            <div className="development-alert-text lg:text-sm md:text-sm sm:text-xs xs:text-xs mb-4">
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
                    <span className="development-alert-head lg:text-base md:text-base sm:text-sm xs:text-sm ">
                      Blockchain Development Using Cosmos SDK
                    </span>
                  }
                  description={
                    <span className="development-alert-text lg:text-sm md:text-sm sm:text-xs xs:text-xs">
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
                    <span className="development-alert-head lg:text-base md:text-base sm:text-sm xs:text-sm">
                      IBC Apps and Rollapps Development
                    </span>
                  }
                  description={
                    <span className="development-alert-text lg:text-sm md:text-sm sm:text-xs xs:text-xs">
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
                    <span className="development-alert-head lg:text-base md:text-base sm:text-sm xs:text-sm">
                      CosmWasm Smart Contract Development
                    </span>
                  }
                  description={
                    <span className="development-alert-text lg:text-sm md:text-sm sm:text-xs xs:text-xs">
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
            <div className="RightDevelop-infra h-[50vh]">
              <div className="figma2001-infra relative">
                <div className="dot1-infra w-[200px] h-[200px] lg:w-[320px] lg:h-[320px] top-[7rem] lg:top-[10rem] flex flex-col justify-center items-center">
                  <span className="count-text text-[20px] lg:text-[40px]">
                    <CountUp
                      start={0}
                      end={1000}
                      duration={2.5}
                      separator=","
                    />
                    <span>+</span>{" "}
                  </span>
                  <span className="text-stats text-[14px] lg:text-[20px]">Open Source Commits</span>
                </div>
                <div className="dot2-infra w-[140px] h-[140px] lg:w-[240px] lg:h-[240px] top-[5rem] right-[-145px] lg:right-0  lg:top-[5rem] flex flex-col justify-center items-center">
                  <span className="count-text text-[20px] lg:text-[40px]">
                    <CountUp start={0} end={10} duration={2.5} separator="," />
                    <span>+</span>{" "}
                  </span>

                  <span className="text-stats text-[14px] lg:text-[20px]">Projects Delivered</span>
                </div>
                <div className="dot3-infra  w-[140px] h-[140px] lg:w-[240px] lg:h-[240px] left-[44%] top-[16rem] lg:left-[1%] lg:top-[12rem] flex flex-col justify-center items-center">
                  <span className="count-text text-[20px] lg:text-[40px]">
                    <CountUp start={0} end={11} duration={3} />
                    <span>+</span>{" "}
                  </span>

                  <span className="text-stats text-[14px] lg:text-[20px]"> Partnerships</span>
                </div>
                <div className="dot4-infra w-[140px] h-[140px] lg:w-[240px] lg:h-[240px] left-[-4%] top-[5rem] lg:left-[16%] lg:top-[3rem] flex-col justify-center items-center">
                  <span className="count-text text-[20px] lg:text-[40px]">
                    <CountUp start={0} end={4} duration={3} />
                    <span>+</span>{" "}
                  </span>
                  <span className="text-stats text-[14px] lg:text-[20px]">
                    Mainnet <br></br>Launches{" "}
                  </span>
                </div>
                <span className="dot6-infra left-[54%] top-[9%] lg:left-[10%] lg:top-[35%]"></span>
                <span className="dot10-infra right-[-129px] top-[19rem] lg:right-[60px] lg:top-[23rem]"></span>
                <span className="dot7-infra left-[117%] lg:left-[68%]"></span>
                <span className="dot9-infra left-[-3%] bottom-[-10rem] lg:left-[26%] lg:bottom-[-12rem]"></span>
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
