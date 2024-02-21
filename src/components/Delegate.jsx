import React, { useState, useEffect } from "react";
import "./Delegate.css";
import { Alert, Space } from "antd";
import Person from "../assets/person.svg";
import Twitter from "../assets/partnerstwitter.svg";
import Favorite from "../assets/favorite.svg";
import Passage from "../assets/partners/passage.png";
import Chainflow from "../assets/partners/chainflow.svg";
import alertsData from "./alertdata";
import Akash from "../assets/partners/akash.svg";
import Regen from "../assets/partners/regen.svg";
import Polygen from "../assets/partners/polygon.svg";
import Cosmos from "../assets/partners/cosmos.svg";
import Polama from "../assets/partners/paloma final.png";

const Delegate = () => {
  const currentAlerts = alertsData.slice(0, 3);
  const [alertsToShow, setAlertsToShow] = useState(currentAlerts);
  const [fixedAlertsCount, setFixedAlertsCount] = useState(3); 

  // const textsToType = ["Our Partners", "& Clients"];

  // useEffect(() => {
  //   let textIndex = 0;
  //   let charIndex = 0;

  //   const typingInterval = setInterval(() => {
  //     if (textsToType[textIndex].length === charIndex && textIndex === 1) {
  //       clearInterval(typingInterval);
  //     } else if (textIndex === 0 && charIndex === textsToType[0].length) {
  //       charIndex = 0;
  //       textIndex++;
  //     } else if (textIndex === 1) {
  //       charIndex++;
  //       setTypedText2(textsToType[1].slice(0, charIndex));
  //     } else {
  //       charIndex++;
  //       setTypedText(textsToType[0].slice(0, charIndex));
  //     }
  //   }, 200);
  //   return () => clearInterval(typingInterval);
  // }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (fixedAlertsCount === 3) {
        index += 3;
        if (index > alertsData.length) index = 0;

        const currentAlerts = alertsData.slice(index, index + 3);

        if (currentAlerts.length > 0) {
          setAlertsToShow(currentAlerts);
          setFixedAlertsCount(0);
        }
      } else {
        setFixedAlertsCount(3);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="partners" className="main-delegate">
        <div className="main22-delegate">
          <div className="delegate-main-head">
            <div className="subleftdevelop1-delegate">
              <h1 style={{ fontFamily: "Libre Franklin" }}>
                Our Partners  &nbsp;
                <span className="servicesdevelop">& Clients</span>
              </h1>
            </div>
            <div className="delegate-text-delegate">
              Showcasing our esteemed partners and satisfied clients, whose
              collaborative spirit and trust <p> in our services have driven
              remarkable innovations and achievements.</p>
            </div>
            <div className="">
              <div className="partners-logo-1">
                <img src={Akash} alt="Akash" />
                <img src={Cosmos} alt="Cosmos" />
                <img src={Polygen} alt="Polygen" />
                <img src={Passage} alt="Passage" style={{ width: "200px" }} />
              </div>
              <div className="partners-logo-2">
                <img src={Regen} alt="Regen" />
                <img src={Chainflow} alt="Chainflow" />
                <img src={Polama} alt="Cosmoa" style={{ width: "177px" }} />
              </div>
            </div>
          </div>
          <div>
            <div className="bottom-text">
              Don’t just take our word for it! Here’s what people say about
              Vitwit
            </div>
            <div>
              <div className="grid grid-cols-3 gap-14">
                {alertsToShow.map((alert, index) => (
                  <div className="alert-animation cardsanimation" key={index}>
                    <a
                      href={alert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="alert-link"
                    >
                      <Alert
                        className="alert2001 border-none"
                        message={
                          <div className="flex justify-between">
                            <div className="flex space-x-2">
                              <img
                                src={alert.profileImage.src}
                                alt="Person Image"
                                width={alert.profileImage.width}
                                height={alert.profileImage.height}
                                style={{
                                  borderRadius: `${alert.profileImage.borderRadius}px`,
                                }}
                              />
                              <div className="">
                                <div className="Jack-Zampolin ">
                                  {alert.name}
                                </div>
                                <span className="Jackk_1234">
                                  {alert.username}
                                </span>
                              </div>
                            </div>
                            <img src={Twitter} alt="Twitter" />
                          </div>
                        }
                        description={
                          <div className="">
                            <span className="twitter-text">
                              {alert.message}
                            </span>
                            <div className="flex justify-between">
                              <div className="flex">
                                <img src={Favorite} alt="Favorite-icon" />
                                <p className="date-text">{alert.likes}</p>
                              </div>
                              <div className="date-text">{alert.date}</div>
                            </div>
                          </div>
                        }
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delegate;
