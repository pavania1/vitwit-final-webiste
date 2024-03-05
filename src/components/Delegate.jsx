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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Delegate = () => {
  const currentAlerts = alertsData.slice(0, 3);
  const [alertsToShow, setAlertsToShow] = useState(currentAlerts);
  const [fixedAlertsCount, setFixedAlertsCount] = useState(3);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  // useEffect(() => {
  //   let index = 0;
  //   const interval = setInterval(() => {
  //     if (fixedAlertsCount === 3) {
  //       index += 3;
  //       if (index > alertsData.length) index = 0;

  //       const currentAlerts = alertsData.slice(index, index + 3);

  //       if (currentAlerts.length > 0) {
  //         setAlertsToShow(currentAlerts);
  //         setFixedAlertsCount(0);
  //       }
  //     } else {
  //       setFixedAlertsCount(3);
  //     }
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div id="partners" className="main-delegate">
        <div className="main22-delegate">
          <div className="delegate-main-head">
            <div className="subleftdevelop1-delegate lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl mb-5">
              <h1 style={{ fontFamily: "Libre Franklin" }}>
                Our Partners &nbsp;
                <span className="servicesdevelop">& Clients</span>
              </h1>
            </div>
            <div className="delegate-text-delegate  sm:hidden xs:hidden md:block">
              Meet our trusted partners, a network of leading companies and
              innovators united in driving <br /> blockchain technology forward.
              Together, we're shaping the future
            </div>
            <div className="">
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-8">
                <div className="flex">
                  <div className="logo-bgrnd lg:bg-[#ffffff0f] sm:bg-transparent w-[92px] h-[46px] lg:w-[330px] lg:h-[150px] ">
                    <img src={Akash} alt="Akash" className=" md:w-fit" />
                  </div>
                </div>
                <div className="flex ">
                  <div className="logo-bgrnd mx-auto lg:bg-[#ffffff0f] sm:bg-transparent w-[92px] h-[46px] lg:w-[330px] lg:h-[150px]">
                    <img
                      src={Cosmos}
                      alt="Cosmos"
                      className="w-[100px] md:w-fit"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="logo-bgrnd ml-auto lg:bg-[#ffffff0f] sm:bg-transparent w-[92px] h-[46px] lg:w-[330px] lg:h-[150px]">
                    <img
                      src={Polygen}
                      alt="Polygen"
                      className="w-[100px] md:w-fit "
                    />
                  </div>
                </div>
                <div className="flex  ">
                  <div className="logo-bgrnd lg:bg-[#ffffff0f] sm:bg-transparent w-[92px] h-[46px] lg:w-[330px] lg:h-[150px]">
                    <img
                      src={Passage}
                      alt="Passage"
                      className="w-[100px] md:w-[200px] "
                    />
                  </div>
                </div>
                <div className="flex ">
                  <div className="logo-bgrnd mx-auto lg:bg-[#ffffff0f] sm:bg-transparent w-[92px] h-[46px] lg:w-[330px] lg:h-[150px]">
                    <img
                      src={Regen}
                      alt="Regen"
                      className="w-[100px] md:w-fit"
                    />
                  </div>
                </div>
                <div className="flex ">
                  <div className="logo-bgrnd ml-auto lg:bg-[#ffffff0f] sm:bg-transparent w-[92px] h-[46px] lg:w-[330px] lg:h-[150px]">
                    <img
                      src={Chainflow}
                      alt="Chainflow"
                      className="w-[100px] md:w-fit"
                    />
                  </div>
                </div>
                <div className="flex col-span-3">
                  <div className="logo-bgrnd mx-auto lg:bg-[#ffffff0f] sm:bg-transparent w-[92px] h-[46px] lg:w-[330px] lg:h-[150px]">
                    <img
                      src={Polama}
                      alt="Cosmoa"
                      className="w-[100px] md:w-[177px] "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bottom-text xs:hidden sm:hidden md:block mt-10 mb-[8%] lg:text-xs md:text-xs sm:text-[10px] xs:text-[10px]">
              Don’t just take our word for it! Here’s what people say about
              Vitwit
            </div>
            <div className="xs:hidden sm:hidden md:block lg:block mt-10">
              <Slider {...settings} autoplaySpeed={5000} autoplay>
                {alertsToShow.map((alert, index) => (
                  <div className="" key={index}>
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
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delegate;
