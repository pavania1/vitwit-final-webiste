import React, { useState, useEffect } from "react";
import "./Delegate.css";
import Akash from "../assets/partners/akash.svg";
import Regen from "../assets/partners/regen.svg";
import Polygen from "../assets/partners/polygon.svg";
import Cosmos from "../assets/partners/cosmos.svg";
import { Alert, Space } from "antd";
import Person from "../assets/person.svg";
import Twitter from "../assets/partnerstwitter.svg";
import Favorite from "../assets/favorite.svg";
import Passage from "../assets/partners/passage.svg";
import Chainflow from "../assets/partners/chainflow.svg";
const Delegate = () => {
  const [typedText, setTypedText] = useState("");
  const [typedText2, setTypedText2] = useState("");

  const textsToType = ["Our", "Partners"];

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
      <div className="main-delegate">
        <div className="main22-delegate">
          <div className="delegate-main-head">
            <div className="subleftdevelop1-delegate">
              <h1>
                {typedText} &nbsp;
                <span className="servicesdevelop">{typedText2}</span>
              </h1>
            </div>
            <div className="delegate-text-delegate">
              We are a core tech company passionate about the research and
              development of technology solutions that transform businesses and
              people’s work <br></br>styles.We are a core tech company
              passionate about the research and development of technology
              solutions that transform.
            </div>

            <div className="">
              <div className="partners-logo-1">
                <img src={Akash} alt="Akash" />
                <img src={Regen} alt="Regen" />
                <img src={Polygen} alt="Polygen" />
                <img src={Cosmos} alt="Cosmos" />
              </div>
              <div className="partners-logo-2">
                <img src={Chainflow} alt="Chainflow" />
                <img src={Cosmos} alt="Cosmoa" />
                <img src={Passage} alt="Passage" />
              </div>
            </div>
          </div>
          <div>
            <div className="bottom-text">
              Don’t just take our word for it ! Here’s what people say about
              Vitwit
            </div>
            <div>
              <Space
                className="space-alert-dev"
                direction=""
                style={{
                  width: "100%",
                }}
              >
                <Alert
                  className="alert2001"
                  message={
                    <div className="flex justify-between">
                      <div className="flex space-x-2">
                        <img src={Person} alt="Person Image" />
                        <div className="">
                          <div className="Jack-Zampolin ">Jack-Zampolin </div>
                          <span className="Jackk_1234">@Jackk_1234</span>
                        </div>
                      </div>
                      <img src={Twitter} alt="Twitter" />
                    </div>
                  }
                  description={
                    <div className="">
                      <span className="twitter-text">
                        The @vitwit_team has been rocking it and contributing to
                        all layers of the stack: #tendermint, #cosmossdk, and
                        #ibc. Mad props, and look forward to continuing to work
                        with y'all!
                      </span>
                      <div className="flex justify-between">
                        <div className="flex">
                          <img src={Favorite} alt="Favorite-icon" />
                          <p className="date-text">12</p>
                        </div>
                        <div className="date-text">04 Dec 2023</div>
                      </div>
                    </div>
                  }
                />
                <Alert
                  className="alert2001"
                  message={
                    <div className="flex justify-between">
                      <div className="flex space-x-2">
                        <img src={Person} alt="Person Image" />
                        <div className="">
                          <div className="Jack-Zampolin ">Jack-Zampolin </div>
                          <span className="Jackk_1234">@Jackk_1234</span>
                        </div>
                      </div>
                      <img src={Twitter} alt="Twitter" />
                    </div>
                  }
                  description={
                    <div className="">
                      <span className="twitter-text">
                        The @vitwit_team has been rocking it and contributing to
                        all layers of the stack: #tendermint, #cosmossdk, and
                        #ibc. Mad props, and look forward to continuing to work
                        with y'all!
                      </span>
                      <p>
                        <span className="twitter-text">
                          The @vitwit_team has been rocking it and contributing
                          to all layers of the stack: #tendermint, #cosmossdk,
                          and #ibc. Mad props, and look forward to continuing to
                          work with y'all!
                        </span>
                      </p>

                      <div className="flex justify-between">
                        <div className="flex">
                          <img src={Favorite} alt="Favorite-icon" />
                          <p className="date-text">12</p>
                        </div>
                        <div className="date-text">04 Dec 2023</div>
                      </div>
                    </div>
                  }
                />
                <Alert
                  className="alert2001"
                  message={
                    <div className="flex justify-between">
                      <div className="flex space-x-2">
                        <img src={Person} alt="Person Image" />
                        <div className="">
                          <div className="Jack-Zampolin ">Jack-Zampolin </div>
                          <span className="Jackk_1234">@Jackk_1234</span>
                        </div>
                      </div>
                      <img src={Twitter} alt="Twitter" />
                    </div>
                  }
                  description={
                    <div className="">
                      <span className="twitter-text">
                        The @vitwit_team has been rocking it and contributing to
                        all layers of the stack: #tendermint, #cosmossdk, and
                        #ibc. Mad props, and look forward to continuing to work
                        with y'all!
                      </span>
                      <div className="flex justify-between">
                        <div className="flex">
                          <img src={Favorite} alt="Favorite-icon" />
                          <p className="date-text">12</p>
                        </div>
                        <div className="date-text">04 Dec 2023</div>
                      </div>
                    </div>
                  }
                />
              </Space>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delegate;
