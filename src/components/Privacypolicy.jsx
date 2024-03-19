import React from "react";
import "./Privacypolicy.css";

const Privacypolicy = () => {
  return (
    <div className=" w-full flex flex-col justify-center items-center justify-items-center">
      <div className="policy-container p-10">
        <div className="policy-head">Privacy Policy</div> <br />
        <div className="date">Last updated: 19th February 2024</div>
        <br />
        <hr className="divider-line" />
        <br />
        <div className="policy-para-text">
          Vitwit Technologies ("us", "we", or "our") operates the Vitwit
          Technologies website, mobile applications, and other online products
          and services (collectively, the "Services"). This page informs you of
          our policies regarding the collection, use, and disclosure of personal
          data when you use our Services and the choices you have associated
          with that data.
        </div>
        <ul className="space-y-6">
          <li>
            <span className="item-text">1.Information Collection and Use</span>
            <p className="para-text">
              We collect several different types of information for various
              purposes to provide and improve our Services to you.
            </p>
          </li>
          <li>
            <span className="item-text">2.Types of Data Collected</span>
            <p className="para-text">
              Personal Data: While using our Services, we may ask you to provide
              us with certain personally identifiable information that can be
              used to contact or identify you ("Personal Data"). Personally
              identifiable information may include, but is not limited to:
            </p>
            <span>
              <ul className="policy-list-text para-text">
                <li>Email Address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Cookies and Usage Data</li>
              </ul>
            </span>
          </li>
          <li>
            <span className="item-text">3.Use of Data</span>
            <p className="para-text">
              Vitwit Technologies uses the collected data for various purposes:{" "}
            </p>
            <ul className="policy-list-text para-text">
              <li>To provide and maintain our Services</li>
              <li>To notify you about changes to our Services</li>
              <li>To provide customer support</li>
              <li>
                To gather analysis or valuable information so that we can
                improve our Services
              </li>
              <li>To monitor the usage of our Services</li>
              <li>To detect, prevent, and address technical issues</li>
            </ul>
          </li>
          <li>
            <span className="item-text">4.Transfer of Data </span>
            <p className="para-text">
              Your information, including Personal Data, may be transferred to —
              and maintained on — computers located outside of your state,
              province, country, or other governmental jurisdiction where the
              data protection laws may differ from those of your jurisdiction.
              If you are located outside India and choose to provide information
              to us, please note that we transfer the data, including Personal
              Data, to India and process it there.
            </p>
          </li>
          <li>
            <span className="item-text">5.Disclosure of Data</span>
            <p className="para-text">
              We may disclose your Personal Data in the good faith belief that
              such action is necessary to:{" "}
            </p>
            <ul className="policy-list-text para-text">
              <li>To comply with a legal obligation</li>
              <li>
                To protect and defend the rights or property of Vitwit
                Technologies
              </li>
              <li>
                To prevent or investigate possible wrongdoing in connection with
                the Services
              </li>
              <li>
                To protect the personal safety of users of the Services or the
                public
              </li>
              <li>To protect against legal liability</li>
            </ul>
          </li>
          <li>
            <span className="item-text">6.Security of Data</span>
            <p className="para-text">
              The security of your data is important to us, but remember that no
              method of transmission over the Internet or method of electronic
              storage.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Privacypolicy;
