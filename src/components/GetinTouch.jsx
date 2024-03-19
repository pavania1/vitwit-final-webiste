import React from "react";
import { Dialog, DialogContent } from "@mui/material";
import GetinTouchImage from "../assets/getintouch.png";
import YoutubeLogo from "../assets/social-icons/youtube.png";
import GithubLogo from "../assets/social-icons/github.png";
import LinkedInLogo from "../assets/social-icons/linkedln.png";
import TwitterLogo from "../assets/social-icons/twitter.png";
import TelegramLogo from "../assets/social-icons/telegram.png";
import CloseIcon from "../assets/CloseIcon";

const GetinTouch = ({ open, close }) => {
  return (
    <Dialog
      open={open}
      maxWidth="lg"
      PaperProps={{
        sx: {
          borderRadius: 4,
        },
      }}
    >
      <DialogContent sx={{ padding: 0 }}>
        <div className="getintouch-grid">
          <div
            onClick={close}
            className="cursor-pointer flex justify-end items-center "
          >
            <CloseIcon />
          </div>
          <div className="flex gap-10 justify-center items-center">
            <div>
              <img src={GetinTouchImage} alt="GetinTouch Image" />
            </div>
            <div className="flex flex-col justify-center items-center gap-6 flex-[1_0_0] self-stretch">
              <div className="text-white text-center text-[36px] not-italic font-bold leading-[54px]">
                Get in touch with us
              </div>
              <div className="text-white text-center text-base not-italic font-normal leading-6">
                If you have any questions or are interested in discussing
                anything related to Web3, please don't hesitate to connect with
                us through any of the social channels below or via email :
                contact@vitwit.com
              </div>
              <div className="getintouch-v-line"></div>
              <SocialIcons />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GetinTouch;

const SocialIcons = () => {
  return (
    <div className="flex gap-10">
      <SocialLink link="https://twitter.com/vitwit_" icon={TwitterLogo} />
      <SocialLink link="https://t.me/+3bXmS6GE4HRjYmU1" icon={TelegramLogo} />
      <SocialLink link="https://github.com/vitwit" icon={GithubLogo} />
      <SocialLink
        link="https://www.linkedin.com/company/vitwit/mycompany/"
        icon={LinkedInLogo}
      />
      <SocialLink
        link="https://www.youtube.com/@vitwit8623"
        icon={YoutubeLogo}
      />
    </div>
  );
};

const SocialLink = ({ link, icon }) => {
  return (
    <div className="contact__socials__popup items-center flex justify-center">
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
