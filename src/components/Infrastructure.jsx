import React from "react";
import "./Infrastructure.css";
import Advisory from "../assets/infra-icons/advisory.svg";
import Genesis from "../assets/infra-icons/genesis.svg";
import Relayer from "../assets/infra-icons/relayer.svg";
import Testing from "../assets/infra-icons/testing.png";
import Validator from "../assets/infra-icons/validator.svg";
import WhiteLabel from "../assets/infra-icons/whitelabel.svg";

const Infrastructure = () => {
  return (
    <>
      <div id="infrastructure" className="infrastructure">
        <div className="infrastructure-main-head">
          <div className="infrastructure-services-h1 lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl">
            <h1>
              Infrastructure &nbsp;
              <span className="infrastructure-services lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl">
                Services
              </span>
            </h1>
          </div>

          <div className="infrastructure-text  lg:text-sm md:text-sm sm:text-xs xs:text-xs">
            We specialize in providing robust and scalable infrastructure
            solutions tailored to the unique needs of your blockchain projects.
          </div>
        </div>
        <div className="bottom-infrastructure flex-col">
          <div className="grid grid-cols-1 gap-10 lg:gap-20 md:grid-cols-2 lg:grid-cols-3">
            <div className="">
              <div className="infra-bg infra-left md:infra border-none hover:bg-[#372752] p-6">
                <div>
                  <div className="validator-dot mb-3">
                    <img src={Validator} alt="Validator-icon" />
                  </div>
                  <span className="infra-icons-text lg:text-base md:text-base sm:text-sm xs:text-sm">
                    Validator
                  </span>
                </div>

                <span className="infra-text-para  lg:text-sm md:text-sm sm:text-xs xs:text-xs">
                  Our validator ops are fine-tuned to ensure maximum security
                  and performance, optimizing your network's efficiency and
                  reliability.
                </span>
              </div>
            </div>
            <div className="infra-right-parent">
              <div className="infra-bg infra-right md:infra border-none hover:bg-[#372752] p-6">
                <div>
                  <div className="relayer-dot mb-3">
                    <img src={Relayer} alt="Relayer-icon" />
                  </div>
                  <span className="infra-icons-text lg:text-base md:text-base sm:text-sm xs:text-sm">
                    Relayer
                  </span>
                </div>

                <span className="infra-text-para  lg:text-sm md:text-sm sm:text-xs xs:text-xs">
                  Operating highly available IBC-Relayers, we elevate your
                  appchain experience. Scale seamlessly with our dedicated
                  relayer service.
                </span>
              </div>
            </div>
            <div className="">
              <div className="infra-bg infra-left md:infra border-none hover:bg-[#372752] p-6">
                <div>
                  <div className="advisory-dot mb-3">
                    <img src={Advisory} alt="validatoradvisory-icon" />
                  </div>
                  <span className="infra-icons-text lg:text-base md:text-base sm:text-sm xs:text-sm">
                    Validator advisory
                  </span>
                </div>

                <span className="infra-text-para  lg:text-sm md:text-sm sm:text-xs xs:text-xs">
                  Expertise in all things validation. Enhance your governance,
                  validator community management and foundation delegation
                  processes with our comprehensive advisory service.
                </span>
              </div>
            </div>
            <div className="infra-right-parent">
              <div className="infra-bg infra-right md:infra border-none hover:bg-[#372752] p-6">
                <div>
                  <div className="testing-dot mb-3">
                    <img src={Testing} alt="testing-icon" />
                  </div>
                  <span className="infra-icons-text lg:text-base md:text-base sm:text-sm xs:text-sm">
                    Software Upgrades and Testing
                  </span>
                </div>

                <span className="infra-text-para  lg:text-sm md:text-sm sm:text-xs xs:text-xs ">
                  Supporting teams with network, IBC, and software upgrades
                  testing, our services guarantee that every update is
                  implemented smoothly and precisely
                </span>
              </div>
            </div>
            <div className="">
              <div className="infra-bg infra-left md:infra border-none hover:bg-[#372752] p-6">
                <div>
                  <div className="white-label mb-3">
                    <img src={WhiteLabel} alt="whitelabel-icon" />
                  </div>
                  <span className="infra-icons-text lg:text-base md:text-base sm:text-sm xs:text-sm">
                    White-label services
                  </span>
                </div>

                <span className="infra-text-para  lg:text-sm md:text-sm sm:text-xs xs:text-xs">
                  Launch and expand your validator business with our white-label
                  services, backed by highly secure infrastructure operated for
                  our clients.
                </span>
              </div>
            </div>
            <div className="infra-right-parent">
              <div className="infra-bg infra-right md:infra border-none lg:text-xs md:text-xs sm:text-[10px] xs:text-[10px] alert3003 p-6">
                <div>
                  <div className="genesis-dot mb-3">
                    <img src={Genesis} alt="genesis-icon" />
                  </div>
                  <span className="infra-icons-text lg:text-base md:text-base sm:text-sm xs:text-sm">
                    Genesis Launch
                  </span>
                </div>

                <span className="infra-text-para  lg:text-sm md:text-sm sm:text-xs xs:text-xs">
                  Collaborating with teams for a worry-free network launch, we
                  provide specialized tooling for testing and ensuring an
                  accurate Genesis launch.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infrastructure;
