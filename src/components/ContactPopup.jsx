import React from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "../assets/CloseIcon";
import Envelope from "../assets/envelope.svg";
import Map from "../assets/map.svg";

const ContactPopup = ({ open, close }) => {
  return (
    <Dialog
      open={open}
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: 4,
        },
      }}
    >
      <DialogContent sx={{ padding: 0 }}>
        <div className="contact-grid">
          <div
            onClick={close}
            className=" cursor-pointer right-5 absolute pt-4"
          >
            <CloseIcon height={12} width={12} />
          </div>
          <div className="flex flex-col items-start gap-4 self-stretch px-6 py-10">
            <h1 className="text-white text-[15px] not-italic font-bold leading-[18px]">
              Contact Us
            </h1>
            <div className="getintouch-v-line"></div>
            <p className="text-white text-[10px] not-italic font-light leading-[18px]">
              Premier Cosmos Development, Consulting, and Infrastructure
              Services. We help you with building, testing and launching your
              web3 applications smoothly.
            </p>

            <div className="flex space-x-2 items-start">
              <img src={Envelope} alt="mail-logo" />
              <p className="text-white text-xs not-italic font-medium leading-[18px] mt-2">
                contact@vitwit.com
              </p>
            </div>
            <div className="flex space-x-2 items-start">
              <img src={Map} alt="map-icon" />
              <p className="text-white text-xs not-italic font-medium leading-[18px]">
                Vitwit Technologies Ravi Chambers, Kavuri Hills, Hyderabad,
                Telangana 500033{" "}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;
