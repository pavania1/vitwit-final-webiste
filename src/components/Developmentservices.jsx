import React from "react";
import "./Development.css";
import CountUp from "react-countup";
const Development = () => {
  return (
    <>
      <div id="development" className="main22-infra">
        <div className="flex m-auto flex-col">
          <div className="justify-between xs:hidden sm:hidden lg:flex">
            <div className="subLeftDevelop1-infra lg:text-left mb-10">
              <h1 className="lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl m-0 p-0 ">
                Development
                <br></br>
                <span className="servicesDevelop-infra lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl">
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
            <div className="subLeftDevelop1-infra mb-4">
              <h1 className="lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl m-0 p-0">
                Development &nbsp;
                <span className="servicesDevelop-infra lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl">
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
            <div className="leftDevelop-infra md:w-[45%]">
              <div
                className="space-alert-dev gap-8"
                direction="vertical"
                style={{
                  width: "100%",
                }}
              >
                <div className="w-full text-start p-[30px] rounded-2xl border-none bg-[#ffffff14] lg:develop-alert-background  md:develop-alert-background hover:bg-[#372752]">
                  <div>
                    <span className="development-alert-head lg:text-base md:text-base sm:text-sm xs:text-sm ">
                      Blockchain Development Using Cosmos SDK
                    </span>
                  </div>
                  <div>
                    <span className="development-alert-text lg:text-sm md:text-sm sm:text-xs xs:text-xs">
                      Harness the power of the Cosmos SDK to build scalable,
                      interoperable blockchain networks. Our expertise ensures
                      your project is developed with cutting-edge technology for
                      maximum efficiency and performance.
                    </span>
                  </div>
                </div>
                <div className="w-full my-10 text-start p-[30px] rounded-2xl border-none bg-[#ffffff14] lg:develop-alert-background  md:develop-alert-background hover:bg-[#372752]">
                  <div>
                    <span className="development-alert-head lg:text-base md:text-base sm:text-sm xs:text-sm">
                      IBC Apps and Rollapps Development
                    </span>
                  </div>
                  <div>
                    <span className="development-alert-text lg:text-sm md:text-sm sm:text-xs xs:text-xs">
                      Expand your blockchain's capabilities with IBC apps and
                      Rollapps, creating seamless connections and
                      functionalities across different chains. Our development
                      services open new pathways for interoperability and
                      innovation.
                    </span>
                  </div>
                </div>

                <div className="w-full text-start p-[30px] rounded-2xl border-none bg-[#ffffff14] lg:develop-alert-background  md:develop-alert-background hover:bg-[#372752]">
                  <div>
                    <span className="development-alert-head lg:text-base md:text-base sm:text-sm xs:text-sm">
                      CosmWasm Smart Contract Development
                    </span>
                  </div>
                  <div>
                    <span className="development-alert-text lg:text-sm md:text-sm sm:text-xs xs:text-xs">
                      Leverage the flexibility of CosmWasm for building
                      powerful, secure smart contracts. Our team specializes in
                      crafting custom solutions that bring your blockchain
                      functionalities to life, meeting the highest standards of
                      quality and innovation.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="RightDevelop-infra h-[50vh]">
              <div className="figma2001-infra relative">
                <div className="dot1-infra w-[180px] h-[180px] relative overflow-hidden lg:w-[320px] lg:h-[320px] top-[7rem] left-[43%] lg:left-[30%] lg:top-[10rem] flex flex-col justify-center items-center">
                  <div className="absolute dot1-infra-gradient h-full w-full top-0 left-0 "></div>
                  <div className="z-10 flex flex-col">
                    <div className="count-text text-[20px] lg:text-[40px]">
                      <CountUp
                        start={0}
                        end={1000}
                        duration={2.5}
                        separator=","
                      />
                      <span>+</span>{" "}
                    </div>
                    <div className="text-stats text-[14px] lg:text-[20px] xs:hidden lg:flex">
                      Open Source Commits
                    </div>
                    <div className="text-stats text-[14px] lg:text-[20px] lg:hidden">
                      Open Source <br /> Commits
                    </div>
                  </div>
                </div>
                <div className="dot2-infra w-[120px] h-[120px] lg:w-[240px] lg:h-[240px] top-[5rem] right-[-155px] lg:right-0  lg:top-[5rem] flex flex-col justify-center items-center relative overflow-hidden">
                  <div className="absolute dot2-infra-gradient h-full w-full top-0 left-0 "></div>
                  <div className="z-10 flex flex-col">
                    <div className="count-text text-[20px] lg:text-[40px]">
                      <CountUp
                        start={0}
                        end={10}
                        duration={2.5}
                        separator=","
                      />
                      <span>+</span>{" "}
                    </div>

                    <div className="text-stats text-[14px] lg:text-[20px]">
                      Projects Delivered
                    </div>
                  </div>
                </div>
                <div className="dot3-infra  w-[120px] h-[120px] lg:w-[240px] lg:h-[240px] left-[-7%] top-[9rem] lg:left-[1%] lg:top-[12rem] flex flex-col justify-center items-center relative overflow-hidden">
                  <div className="absolute dot3-infra-gradient h-full w-full top-0 left-0"></div>
                  <div className="z-10 flex flex-col">
                    <div className="count-text text-[20px] lg:text-[40px]">
                      <CountUp start={0} end={11} duration={3} />
                      <span>+</span>{" "}
                    </div>

                    <div className="text-stats text-[14px] lg:text-[20px]">
                      {" "}
                      Partnerships
                    </div>
                  </div>
                </div>
                <div className="dot4-infra w-[120px] h-[120px] lg:w-[240px] relative overflow-hidden lg:h-[240px] left-[10%] top-[4rem] lg:left-[16%] lg:top-[3rem] flex-col justify-center items-center">
                  <div className="absolute dot4-infra-gradient h-full w-full top-0 left-0 "></div>
                  <div className="z-10 flex flex-col">
                    <div className="count-text text-[20px] lg:text-[40px]">
                      <CountUp start={0} end={4} duration={3} />
                      <span>+</span>{" "}
                    </div>
                    <div className="text-stats text-[14px] lg:text-[20px]">
                      Mainnet Launches{" "}
                    </div>
                  </div>
                </div>
                <span className="dot6-infra h-[50px] w-[50px] lg:w-[67px] lg:h-[67px] left-[100%] top-[16%] lg:left-[10%] lg:top-[35%]"></span>
                <span className="dot10-infra w-[50px] h-[50px] lg:h-[67px] lg:w-[67px] right-[-129px] top-[17rem] lg:right-[60px] lg:top-[23rem]"></span>
                <span className="dot7-infra lg:h-[70px] lg:w-[70px] left-[117%] lg:left-[56%]"></span>
                <span className="dot9-infra w-[50px] h-[50px] lg:h-[67px] lg:w-[67px] left-[28%] bottom-[-10rem] lg:left-[26%] lg:bottom-[-12rem]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default Development;
