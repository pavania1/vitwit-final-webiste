import React from "react";
import "./Termsofuse.css";

const Termsofuse = () => {
  return (
    <div className=" w-full flex flex-col justify-center items-center justify-items-center">
      <div className="terms-container p-10">
        <div className="terms-head">Vitwit Terms of Use</div>
        <br />
        <div className="date">Last updated: 19th February 2024</div>
        <br />
        <hr className="divider-line" />
        <br />
        <div className="welcome-head">Welcome to Vitwit Technologies!</div>
        <br />
        <p className="term-para-text">
          These terms of use ("Terms") govern your access to and use of Vitwit
          Technologies' website, mobile applications, and other online products
          and services (collectively, the "Services"). By accessing or using the
          Services, you agree to be bound by these Terms.
        </p>
        <br />
        <ol className="space-y-6">
          <li className="term-item">
            <span className="item-text">1.Acceptance of Terms</span>
            <p className="item-para">
              By using the Services, you agree to these Terms. If you do not
              agree to these Terms, you may not use the Services.
            </p>
          </li>
          <li className="term-item">
            <span className="item-text">2.Changes to Terms</span>
            <p className="item-para">
              Vitwit Technologies reserves the right to modify, update, or
              replace these Terms at any time. We will notify you of any changes
              by posting the new Terms on this page. Your continued use of the
              Services after any such changes constitutes your acceptance of the
              new Terms.
            </p>
          </li>
          <li className="term-item">
            <span className="item-text">3.Privacy Policy</span>
            <p className="item-para">
              Your use of the Services is also governed by our Privacy Policy,
              which can be found at [link]. Please review the Privacy Policy to
              understand how we collect, use, and disclose information.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Termsofuse;
