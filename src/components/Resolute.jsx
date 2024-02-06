import React from "react";
import LoginIn from "../assets/login-icon.png";
import "./Resolute.css";


const Resolute = () => {
  return (
    <div className="resolute">
      <div className="maindevelop-resolute">
        <div className="leftdevelop-resolute">
          <div className="">
            <span className="text-style-1">Resolute</span>
            <span className="Resolute-Interchain-Interface">
              Interchain Interface
            </span>
          </div>
          <div className="text-frame">
            <p>
              We are a core tech company passionate about the research and
              development of techn`ology solutions that transform
              businesses.chnology solutions that transaction. We are a core tech
              company passionate about the research and development of
              technology solutions that transform businesses.chnology solutions
              that transaction.
            </p>
            <br></br>
            <p>
              We are a core tech company passionate about the research and
              development of technology solutions that transform
              businesses.chnology solutions that transaction.
            </p>
            <br></br>

            <p>
              {" "}
              We are a core tech company passionate about the research and
              development of technology solutions that transform
              businesses.chnology solutions that transaction.
            </p>
            <br></br>
          </div>

          <div className="">
            <button className="resolute-btn cursor-pointer">
              Connect to resolute
              <img src={LoginIn} alt="Connect resolute" />
            </button>
          </div>
        </div>
        <div className="RightDevelop-delegate">
          <video width="840" height="500" controls>
            {/* Use the imported video file path */}
            <source
              src={process.env.PUBLIC_URL + "/videos/resolute-video.mp4"}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Resolute;
