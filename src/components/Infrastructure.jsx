import React, { useState, useEffect } from "react";
import "./Infrastructure.css";
import { Alert } from "antd";

import Advisory from "../assets/infra-icons/advisory.svg"
import Genesis from "../assets/infra-icons/genesis.svg";
import Relayer from "../assets/infra-icons/relayer.svg";
import Testing from "../assets/infra-icons/testing.png";
import Validator from "../assets/infra-icons/validator.svg";
import WhiteLabel from "../assets/infra-icons/whitelabel.svg";

const Infrastructure = () => {
  const [typedText, setTypedText] = useState("");
  const [typedText2, setTypedText2] = useState("");

  const textsToType = ["Infrastructure", "Services"];

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
      <div id="infrastructure" className="infrastructure">
        <div className="infrastructure-main-head">
          <div className="infrastructure-services-h1">
            <h1>
              {typedText} &nbsp;
              <span className="infrastructure-services">{typedText2}</span>
            </h1>
          </div>

          <div className="infrastructure-text">
            we specialize in providing robust and scalable infrastructure
            solutions tailored to the unique needs of your blockchain projects.
          </div>
        </div>
        <div className="bottom-infrastructure flex-col">
          <div className="infrastructure-left">
            <div className="alert-right2-infra">
              <Alert
                className="alert3003 border-none"
                message={
                  <div>
                    <div className="validator-dot mb-3">
                      <img src={Validator} alt="Validator-icon" />
                    </div>
                    <span className="infra-icons-text">Validator</span>
                  </div>
                }
                description={
                  <span className="infra-text-para">
                    Akash Network, the world’s first decentralized and
                    open-source cloud, accelerates deployment, scaleAkash
                    Network.
                  </span>
                }
                style={{
                  marginBottom: "10%",
                  // width: "70%",
                  // height: "55%",
                  marginLeft: 30,
                  // marginLeft: "-30%",
                }}
              />
            </div>
            <div className="alert-right2-infra">
              <Alert
                className="alert3003 border-none"
                message={
                  <div>
                    <div className="relayer-dot mb-3">
                      <img src={Relayer} alt="Relayer-icon" />
                    </div>
                    <span className="infra-icons-text">Relayer</span>
                  </div>
                }
                description={
                  <span className="infra-text-para">
                    Akash Network, the world’s first decentralized and
                    open-source cloud, accelerates deployment, scaleAkash
                    Network.
                  </span>
                }
                style={{
                  marginBottom: "10%",
                  // width: "70%",
                  // height: "55%",
                  marginLeft: 30,
                  // marginLeft: "-30%",
                }}
              />
            </div>
            <div className="alert-right2-infra">
              <Alert
                className="alert3003 border-none"
                message={
                  <div>
                    <div className="advisory-dot mb-3">
                      <img src={Advisory} alt="validatoradvisory-icon" />
                    </div>
                    <span className="infra-icons-text">Validator advisory</span>
                  </div>
                }
                description={
                  <span className="infra-text-para">
                    Akash Network, the world’s first decentralized and
                    open-source cloud, accelerates deployment, scaleAkash
                    Network.
                  </span>
                }
                style={{
                  marginBottom: "10%",
                  // width: "70%",
                  // height: "55%",
                  marginLeft: 30,
                  // marginLeft: "-30%",
                }}
              />
            </div>
          </div>
          <div className="infrastructure-left">
            <div className="alert-right2-infra">
              <Alert
                className="alert3003 border-none"
                message={
                  <div>
                    <div className="testing-dot mb-3">
                      <img src={Testing} alt="testing-icon" />
                    </div>
                    <span className="infra-icons-text">E2E testing</span>
                  </div>
                }
                description={
                  <span className="infra-text-para">
                    Akash Network, the world’s first decentralized and
                    open-source cloud, accelerates deployment, scaleAkash
                    Network.
                  </span>
                }
                style={{
                  marginBottom: "10%",
                  // width: "70%",
                  // height: "55%",
                  marginLeft: 30,
                  // marginLeft: "-30%",
                }}
              />
            </div>
            <div className="alert-right2-infra">
              <Alert
                className="alert3003 border-none"
                message={
                  <div>
                    <div className="white-label mb-3">
                      <img src={WhiteLabel} alt="whitelabel-icon" />
                    </div>
                    <span className="infra-icons-text">
                      White-label services
                    </span>
                  </div>
                }
                description={
                  <span className="infra-text-para">
                    Akash Network, the world’s first decentralized and
                    open-source cloud, accelerates deployment, scaleAkash
                    Network.
                  </span>
                }
                style={{
                  marginBottom: "10%",
                  // width: "70%",
                  // height: "55%",
                  marginLeft: 30,
                  // marginLeft: "-30%",
                }}
              />
            </div>
            <div className="alert-right2-infra">
              <Alert
                className="alert3003 border-none"
                message={
                  <div>
                    <div className="genesis-dot mb-3">
                      <img src={Genesis} alt="genesis-icon" />
                    </div>
                    <span className="infra-icons-text">Genesis Launch</span>
                  </div>
                }
                description={
                  <span className="infra-text-para">
                    Akash Network, the world’s first decentralized and
                    open-source cloud, accelerates deployment, scaleAkash
                    Network.
                  </span>
                }
                style={{
                  marginBottom: "10%",
                  // width: "70%",
                  // height: "55%",
                  marginLeft: 30,
                  // marginLeft: "-30%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infrastructure;
