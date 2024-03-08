import React, { useRef, useState, useEffect } from "react";
import "./Resolute.css";
import PlayImage from "../assets/play.png";
import checkPoint from "../assets/checkpoint.svg";

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
          <div className="small-screen-interface">
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
            <div className="flex flex-col content-overlay mobile-reolute">
              <div className="px-6 py-0">
                <div className="resolute-h1 pb-6">
                  <h1>Resolute</h1>
                </div>
                <div className="flex flex-col infra-text-para  lg:text-sm md:text-sm sm:text-xs xs:text-xs ">
                  <p>Your Gateway to the Cosmos Ecosystem.</p>
                  <br />
                  <p className="text-left">
                    Navigate the vast Cosmos ecosystem with ease using Resolute,
                    the all-in-one interface designed to streamline your
                    experience. From basic banking and staking to advanced
                    management of authz and multisigs, Resolute places the power
                    of the Cosmos at your fingertips.
                  </p>
                </div>
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

              <div className="infra-text-para  lg:text-sm md:text-sm sm:text-xs xs:text-xs text-left pr-4 pl-4">
                <p className="pb-[10%]">
                  Resolute integrates these powerful features into a
                  user-friendly interface, making it the definitive tool for
                  engaging with the Cosmos ecosystem.
                </p>
                <div className="grid grid-cols-2 text-xs gap-4">
                  <div className="flex space-x-2">
                    <img src={checkPoint} alt="Checkpoint" />
                    <label for="multisig">Multisig Wallet</label>
                  </div>

                  <div className="flex space-x-2">
                    <img src={checkPoint} alt="Checkpoint" />
                    <label for="authz">Authz</label>
                  </div>

                  <div className="flex space-x-2">
                    <img src={checkPoint} alt="Checkpoint" />
                    <label for="multisend">Multisend</label>
                  </div>

                  <div className="flex space-x-2">
                    <img src={checkPoint} alt="Checkpoint" />
                    <label for="multiMessageTransactions">
                      Multi-Message Transactions
                    </label>
                  </div>

                  <div className="flex space-x-2">
                    <img src={checkPoint} alt="Checkpoint" />
                    <label for="transactionBuilder">Transaction Builder</label>
                  </div>

                  <div className="flex space-x-2">
                    <img src={checkPoint} alt="Checkpoint" />
                    <label for="feeGrant">Fee Grant</label>
                  </div>
                </div>
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
              <div className="text flex flex-col justify-center items-start self-stretch pl-10">
                <div className=" ">
                  <span className="text-style-1 text-[54px] mb-3">
                    Resolute
                  </span>
                </div>
                <div className="infra-icons-text lg:text-base md:text-base sm:text-sm xs:text-sm mb-8">
                  <p>Your Gateway to the Cosmos Ecosystem.</p>
                </div>
                <div className="text-frame mb-5">
                  <p>
                    Navigate the vast Cosmos ecosystem with ease using Resolute,
                    the all-in-one interface designed to streamline your
                    experience. From basic banking and staking to advanced
                    management of authz and multisigs, Resolute places the power
                    of the Cosmos at your fingertips.
                  </p>
                </div>
                <div className="key-features-text mb-5">
                  {/* <p className="text-sm text-start">Key Features:</p> */}

                  <div className="grid grid-cols-2 text-xs gap-4">
                    <div className="flex space-x-2">
                      <img src={checkPoint} alt="Checkpoint" />
                      <label for="multisig">Multisig Wallet</label>
                    </div>

                    <div className="flex space-x-2">
                      <img src={checkPoint} alt="Checkpoint" />
                      <label for="authz">Authz</label>
                    </div>

                    <div className="flex space-x-2">
                      <img src={checkPoint} alt="Checkpoint" />
                      <label for="multisend">Multisend</label>
                    </div>

                    <div className="flex space-x-2">
                      <img src={checkPoint} alt="Checkpoint" />
                      <label for="multiMessageTransactions">
                        Multi-Message Transactions
                      </label>
                    </div>

                    <div className="flex space-x-2">
                      <img src={checkPoint} alt="Checkpoint" />
                      <label for="transactionBuilder">
                        Transaction Builder
                      </label>
                    </div>

                    <div className="flex space-x-2">
                      <img src={checkPoint} alt="Checkpoint" />
                      <label for="feeGrant">Fee Grant</label>
                    </div>
                  </div>
                </div>
                <div className="text-frame mb-6">
                  <p className="text-left">
                    Resolute integrates these powerful features into a
                    user-friendly interface, making it the definitive tool for
                    engaging with the Cosmos ecosystem.
                  </p>
                </div>

                <div className="">
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
