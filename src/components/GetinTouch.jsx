import React from "react";
import { Dialog, DialogContent } from "@mui/material";
import GetinTouchImage from "../assets/getintouch.png";
import YoutubeLogo from "../assets/social-icons/youtube.png";
import GithubLogo from "../assets/social-icons/github.png";
import LinkedInLogo from "../assets/social-icons/linkedln.png";
import TwitterLogo from "../assets/social-icons/twitter.png";
import TelegramLogo from "../assets/social-icons/telegram.png";

const GetinTouch = ({ open, close }) => {
  return (
    <Dialog open={open} onClose={close} maxWidth="lg" PaperProps={{
        sx:{
            borderRadius: 4
        }
    }}>
      <DialogContent sx={{ padding: 0 }}>
        <div className="getintouch-grid">
          <div className="flex gap-10">
            <div>
              <img src={GetinTouchImage} alt="GetinTouch Image" />
            </div>
            <div className="flex flex-col justify-center items-center gap-6 flex-[1_0_0] self-stretch">
              <div className="text-white text-center text-[44px] not-italic font-bold leading-[54px]">
                Get in touch with us
              </div>
              <div className="text-white text-center text-base not-italic font-normal leading-6">
                If you’re a project interested in getting in touch with our team
                for a potential investment, please reach out below.
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
    <div className="flex w-full justify-between">
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
