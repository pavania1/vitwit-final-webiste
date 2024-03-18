import React, { useState, useMemo } from "react";
import "./Delegate.css";
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
          <div className="delegate-main-head"></div>
          <div>
            <div className="lets-text xs:hidden sm:hidden md:block  mb-[8%] lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl mt-8">
            Community &nbsp;<span className="talk-text"> ACKs</span>
            </div>
            {/* <div className="lets-text lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl hidden md:block">
              Community &nbsp;<span className="talk-text"> ACKs</span>
            </div> */}
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
                      <div className="alert2001 border-none px-6 py-6 rounded-xl">
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
                              <div className="Jack-Zampolin ">{alert.name}</div>
                              <span className="Jackk_1234">
                                {alert.username}
                              </span>
                            </div>
                          </div>
                          <img src={Twitter} alt="Twitter" />
                        </div>

                        <div className="mt-2">
                          <span className="twitter-text">{alert.message}</span>
                          <div className="flex justify-between">
                            <div className="flex">
                              <img src={Favorite} alt="Favorite-icon" />
                              <p className="date-text">{alert.likes}</p>
                            </div>
                            <div className="date-text">{alert.date}</div>
                          </div>
                        </div>
                      </div>
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
