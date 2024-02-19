import React, { useState, useEffect } from "react";
import "./Infrastructure.css";
import { Alert } from "antd";

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
import Devops from "../assets/devops.svg";



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
      <div id='infrastructure' className="infrastructure">
        <div className="infrastructure-main-head">
          <div className="infrastructure-services-h1">
            <h1>
              {typedText} &nbsp;
              <span className="infrastructure-services">{typedText2}</span>
            </h1>
          </div>

          <div className="infrastructure-text">
            We are a core tech company passionate about the research and
            development of technology solutions that transform businesses and
            people’s work <br></br>styles.We are a core tech company passionate about the
            research and development of technology solutions that transform
            businesses and people’s<br></br> work styles.
          </div>
        </div>
        <div className="bottom-infrastructure flex-col">
          <div className="infrastructure-left">
           
            <div className="alert-right2-infra">
              <Alert
                className="alert3003 border-none"
                message={
                  <div>
                    <div className="enterprise-dot mb-3">
                      <img src={Devops} alt="Alert Image" />
                    </div>
                    <span className="infra-icons-text">
                      Enterprise-grade infrastructure
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
                    <div className="mainnet-dot mb-3">
                      <img src={Devops} alt="Alert Image" />
                    </div>
                    <span className="infra-icons-text">
                      Enterprise-grade infrastructure
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
                    <div className="whitelabel-dot mb-3">
                      <img src={Devops} alt="Alert Image" />
                    </div>
                    <span className="infra-icons-text">
                      Enterprise-grade infrastructure
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
          </div>
          <div className="infrastructure-left">
           
           <div className="alert-right2-infra">
             <Alert
               className="alert3003 border-none"
               message={
                 <div>
                   <div className="eng-dot2 mb-3">
                     <img src={Devops} alt="Alert Image" />
                   </div>
                   <span className="infra-icons-text">
                     Enterprise-grade infrastructure
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
                   <div className="eng-dot4 mb-3">
                     <img src={Devops} alt="Alert Image" />
                   </div>
                   <span className="infra-icons-text">
                     Enterprise-grade infrastructure
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
                   <div className="enterprise-dot mb-3">
                     <img src={Devops} alt="Alert Image" />
                   </div>
                   <span className="infra-icons-text">
                     Enterprise-grade infrastructure
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
         </div>
          
        </div>
      </div>
    </>
  );
};

export default Infrastructure;
