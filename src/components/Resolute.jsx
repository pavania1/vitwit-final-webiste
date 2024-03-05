import React, { useRef, useState, useEffect } from "react";
import "./Resolute.css";
import PlayImage from "../assets/play.png";

const Resolute = () => {
  const videoRef1 = useRef();
  const videoRef2 = useRef();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Check screen size on component mount and on resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Auto play the videos when they are loaded
  const handleVideoAutoPlay = (videoRef) => {
    if (videoRef && videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div id="resolute" className="resolute">
      <div
        className={
          isSmallScreen ? "flex flex-col items-center" : "maindevelop-resolute"
        }
      >
        {isSmallScreen ? (
          <div className="small-screen-interface py-6">
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              ref={videoRef1}
              className="background-video"
              onLoadedData={() => handleVideoAutoPlay(videoRef1)}
            >
              <source
                src={process.env.PUBLIC_URL + "/videos/background-video.mp4"}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            {/* Your small screen interface here */}
            <div className="flex flex-col content-overlay mobile-reolute pt-10 pb-10">
              <div className="resolute-h1 lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl mt-4 text-left pr-4 pl-4">
                <h1>
                  Resolute &nbsp;
                  <span className="infrastructure-services lg:text-5xl md:text-4xl sm:text-2xl xs:text-xl">
                    Interchain Interface
                  </span>
                </h1>
              </div>
              <div className="text-xs not-italic font-normal leading-[18px] text-left mt-5 pr-4 pl-4 text-[rgb(225,225,225)] mb-5">
                <p>Your Gateway to the Cosmos Ecosystem.</p>
                <br />
                <p>
                  Navigate the vast Cosmos ecosystem with ease using Resolute,
                  the all-in-one interface designed to streamline your
                  experience. From basic banking and staking to advanced
                  management of authz and multisigs, Resolute places the power
                  of the Cosmos at your fingertips.
                </p>
              </div>
              <br />
              <div className="relative">
                <video
                  playsInline
                  autoPlay={false}
                  ref={videoRef2}
                  className="myVideopsmall max-w-none"
                  onEnded={() => setIsPlaying(false)}
                >
                  <source
                    src={process.env.PUBLIC_URL + "/videos/resolute-video.mp4"}
                    type="video/mp4"
                  />
                </video>
                {isPlaying ? null : (
                  <div
                    className="video-control-overlay"
                    onClick={() => {
                      handleVideoAutoPlay(videoRef2);
                      setIsPlaying(true);
                    }}
                  >
                    <img
                      src={PlayImage}
                      alt="Play-Icon"
                      className="mx-auto mt-[30%] w-[15%]"
                    />
                  </div>
                )}
              </div>
              <br />
              <div className="text-xs not-italic font-normal leading-[18px] text-left mt-5 pr-4 pl-4 text-[rgb(225,225,225)] mb-5">
                <p className="text-bold text-sm">Key Features:</p> <br/>
                <ul className="text-left">
                  <li>
                    <input type="checkbox" id="multisig" name="multisig" />
                    &nbsp; <label for="multisig">Multisig Wallet</label>
                  </li>
                  <li>
                    <input type="checkbox" id="authz" name="authz" />
                    &nbsp; <label for="authz">Authz</label>
                  </li>
                  <li>
                    <input type="checkbox" id="multisend" name="multisend" />
                    &nbsp; <label for="multisend">Multisend</label>
                  </li>
                  <li>
                    <input type="checkbox" id="feeGrant" name="feeGrant" />
                    &nbsp; <label for="feeGrant">Fee Grant</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="transactionBuilder"
                      name="transactionBuilder"
                    />
                    &nbsp;{" "}
                    <label for="transactionBuilder">Transaction Builder</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="multiMessageTransactions"
                      name="multiMessageTransactions"
                    />
                    &nbsp;{" "}
                    <label for="multiMessageTransactions">
                      Multi-Message Transactions
                    </label>
                  </li>
                </ul>
                <br />
                <p>
                  Resolute integrates these powerful features into a
                  user-friendly interface, making it the definitive tool for
                  engaging with the Cosmos ecosystem.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <video
              autoPlay
              muted
              loop
              ref={videoRef1}
              className="myVideores"
              onLoadedData={() => handleVideoAutoPlay(videoRef1)}
            >
              <source
                src={process.env.PUBLIC_URL + "/videos/background-video.mp4"}
                type="video/mp4"
              />
            </video>
            <div className="leftdevelop-resolute flex left-bg w-full ">
              <div className=" text pl-10">
                <div className="py-10 ">
                  <span className="text-style-1 text-[35px]">Resolute</span>
                  <span className="Resolute-Interchain-Interface">
                    Interchain Interface
                  </span>
                </div>
                <div className="text-frame">
                  <p>Your Gateway to the Cosmos Ecosystem.</p>
                  <br />
                  <p>
                    Navigate the vast Cosmos ecosystem with ease using Resolute,
                    the all-in-one interface designed to streamline your
                    experience. From basic banking and staking to advanced
                    management of authz and multisigs, Resolute places the power
                    of the Cosmos at your fingertips.
                  </p>
                  <p>Key Features:</p>
                  <ul className="text-left">
                    <li>
                      <input type="checkbox" id="multisig" name="multisig" />
                      &nbsp; <label for="multisig">Multisig Wallet</label>
                    </li>
                    <li>
                      <input type="checkbox" id="authz" name="authz" />
                      &nbsp; <label for="authz">Authz</label>
                    </li>
                    <li>
                      <input type="checkbox" id="multisend" name="multisend" />
                      &nbsp; <label for="multisend">Multisend</label>
                    </li>
                    <li>
                      <input type="checkbox" id="feeGrant" name="feeGrant" />
                      &nbsp; <label for="feeGrant">Fee Grant</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="transactionBuilder"
                        name="transactionBuilder"
                      />
                      &nbsp;{" "}
                      <label for="transactionBuilder">
                        Transaction Builder
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="multiMessageTransactions"
                        name="multiMessageTransactions"
                      />
                      &nbsp;{" "}
                      <label for="multiMessageTransactions">
                        Multi-Message Transactions
                      </label>
                    </li>
                  </ul>
                  <p>
                    Resolute integrates these powerful features into a
                    user-friendly interface, making it the definitive tool for
                    engaging with the Cosmos ecosystem.
                  </p>
                </div>

                <div className="pb-10">
                  <a
                    href="https://resolute.vitwit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="get-touch-btn nav-text mt-6 cursor-pointer">
                      Connect to resolute
                    </button>
                  </a>
                </div>
              </div>
              <div className="RightDevelop-delegate">
                <video
                  autoPlay
                  muted
                  loop
                  ref={videoRef2}
                  className="myVideop"
                  onLoadedData={() => handleVideoAutoPlay(videoRef2)}
                >
                  <source
                    src={process.env.PUBLIC_URL + "/videos/resolute-video.mp4"}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Resolute;
