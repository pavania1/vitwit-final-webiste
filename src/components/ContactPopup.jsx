import React from "react";
import { Dialog, DialogContent } from "@mui/material";
import Envelope from "../assets/envelope.svg";
import Map from "../assets/map.svg";

const ContactPopup = ({ open, close }) => {
  return (
    <Dialog
      open={open}
      onClose={close}
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: 4,
        },
      }}
    >
      <DialogContent sx={{ padding: 0 }}>
        <div className="contact-grid">
          <div className="flex flex-col items-start gap-4 self-stretch px-6 py-10">
            <h1 className="text-white text-xl not-italic font-bold leading-[18px] underline">
              Contact Us
            </h1>
            <p className="text-white text-[10px] not-italic font-light leading-[18px]">
              We are a core tech company passionate about the research and{" "}
              
              development of technology solutions.
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
