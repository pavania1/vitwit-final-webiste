import React, { useState, useEffect, useMemo } from "react";
import "./Delegate.css";
import { Alert, Space } from "antd";
import Twitter from "../assets/partnerstwitter.svg";
import Favorite from "../assets/favorite.svg";

import alertsData from "./alertdata";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Delegate = () => {
  const [leftCardIndex, setLeftCardIndex] = useState(null);
  const [rightCardIndex, setRightCardIndex] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };
  useMemo(() => {
    if (leftCardIndex === null && rightCardIndex === null) {
      setLeftCardIndex(0);
      setRightCardIndex(2);
    }
  }, []);

  return (
    <>
      <div id="partners" className="main-delegate">
        <div className="main22-delegate">
          <div className="delegate-main-head">
            {/* <div className="subleftdevelop1-delegate lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl mb-5">
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
            </div> */}
          </div>
          <div>
            <div className="bottom-text xs:hidden sm:hidden md:block  mb-[8%] lg:text-xs md:text-xs sm:text-[10px] xs:text-[10px]">
              Community ACKs
            </div>
            <div className="xs:hidden sm:hidden md:block lg:block mt-10">
              <Slider
                beforeChange={(oldIndex, newIndex) => {
                  setLeftCardIndex(oldIndex % 9);
                  setRightCardIndex((newIndex + 2) % 9);
                }}
                {...settings}
                autoplaySpeed={5000}
                autoplay
              >
                {alertsData.map((alert, index) => (
                  <div
                    className={
                      index === leftCardIndex
                        ? "fade-out-cards"
                        : index === rightCardIndex
                        ? "fade-in-cards"
                        : ""
                    }
                    key={index}
                  >
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
