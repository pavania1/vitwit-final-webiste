import React from "react";
import MailLogo from "../assets/social-icons/mail.png";
import YoutubeLogo from "../assets/social-icons/youtube.png";
import SkypeLogo from "../assets/social-icons/skype.png";
import GithubLogo from "../assets/social-icons/github.png";
import LinkedInLogo from "../assets/social-icons/linkedln.png";
import VitwitLogo from "../assets/vitwit-logo.png";
import TwitterLogo from "../assets/social-icons/twitter.png";
import TelegramLogo from "../assets/social-icons/telegram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-black">
      <div className="flex justify-between">
        <div className="flex flex-col items-start gap-6 sm:hidden xs:hidden md:block">
          <img className="w-[30%]" src={VitwitLogo} alt="Vitwit Logo" />
          <p className="text-white text-sm font-normal leading-6 text-left  tracking-[0.6px] mt-4">
            Premier Cosmos Development, Consulting, and Infrastructure Services.
            <br />
            We help you with building, testing and launching your web3
            applications smoothly.
          </p>
        </div>
        <div className="flex flex-col">
          <img
            className="md:hidden sm:block w-[40%] mx-auto"
            src={VitwitLogo}
            alt="Vitwit Logo"
          />
          <p className="text-white text-[12px] font-normal leading-6  tracking-[0.6px] lg:hidden ">
            Premier Cosmos Development, Consulting, and Infrastructure Services.
            We help you with building, testing and launching your web3
            applications smoothly.
          </p>
        </div>
        <div className="flex flex-col gap-6 xs:hidden sm:hidden md:block">
          <div className="text-white text-xl not-italic font-bold leading-5 text-left mb-5">
            {" "}
            Join our community
          </div>
          <SocialIcons />
        </div>
      </div>
      <div className="divider-line-footer"></div>
      <div className="lg:hidden sm:block">
        <SocialIcons />
      </div>
      <div className="flex items-center justify-center gap-6 fotter-text lg:text-base md:text-sm sm:text-sm xs:text-xs">
        <p className="cursor-pointer underline">
          <Link to="/privacy-policy">Privacy Policy</Link>
        </p>
        <p>@2024vitwit.com</p>
        <p className="cursor-pointer underline">
          <Link to="/terms-of-use">Terms of use</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;

const SocialIcons = () => {
  return (
    <div className="flex lg:gap-6 justify-between">
      <SocialLink link="https://twitter.com/vitwit_" icon={TwitterLogo} />
      <SocialLink link="https://github.com/vitwit" icon={GithubLogo} />
      <SocialLink
        link="https://www.youtube.com/@vitwit8623"
        icon={YoutubeLogo}
      />
      <SocialLink
        link="https://www.linkedin.com/company/vitwit/mycompany/"
        icon={LinkedInLogo}
      />
      <SocialLink link="https://t.me/+3bXmS6GE4HRjYmU1" icon={TelegramLogo} />
    </div>
  );
};

const SocialLink = ({ link, icon }) => {
  return (
    <div className="contact__socials items-center flex justify-center">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <img className="contact__socials__icon" src={icon} alt="Social Icon" />
      </a>
    </div>
  );
};
