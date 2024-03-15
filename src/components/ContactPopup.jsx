import React from "react";
import { Dialog, DialogContent, Slide } from "@mui/material";
import CloseIcon from "../assets/CloseIcon";
import Envelope from "../assets/envelope.svg";
import Map from "../assets/map.svg";

const ContactPopup = ({ open, close }) => {
  const mapUrl = "https://maps.app.goo.gl/J1NrYCicPwyRMGCV9";

  return (
    <Dialog
      open={open}
      TransitionComponent={Slide}
      TransitionProps={{
        direction: "up",
        timeout: { enter: 500, exit: 0 },
      }}
      PaperProps={{
        sx: {
          position: "fixed",
          bottom: 0,
          borderRadius: "8px 8px 0 0",
          width: "100%",
          margin: 0,
        },
      }}
      maxWidth="sm"
      fullWidth
    >
      <DialogContent sx={{ padding: 0 }}>
        <div className="contact-grid pt-6">
          <div onClick={close} className="cursor-pointer right-5 absolute pt-4">
            <CloseIcon height={12} width={12} />
          </div>
          <div className="flex flex-col items-start gap-4 self-stretch px-6 py-10">
            <h1 className="text-white text-[15px] not-italic font-bold leading-[18px]">
              Contact Us
            </h1>
           
            <p className="text-white text-[12px] not-italic font-light leading-[18px]">
              Premier Cosmos Development, Consulting, and Infrastructure
              Services. We help you with building, testing and launching your
              web3 applications smoothly.
            </p>
            <div className="getintouch-v-line"></div>
            <div className="flex space-x-2 justify-center items-center">
              <img
                src={Envelope}
                alt="mail-logo"
                className="w-[24px] h-[24px]"
              />
              <p className="text-white text-[14px] not-italic font-medium leading-[18px] underline">
                <a href="mailto:contact@vitwit.com">contact@vitwit.com</a>
              </p>
            </div>
            <div className="flex space-x-2 items-start">
              <img src={Map} alt="map-icon" className="w-[24px] h-[24px]" />
              <p className="text-white text-[12px] not-italic font-medium leading-[18px]">
                <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                  Vitwit Technologies Ravi Chambers, Kavuri Hills, Hyderabad,
                  Telangana 500033
                </a>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;
