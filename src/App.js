import React, { useState } from "react";
import "./App.css";
import Delegate from "./components/Delegate";
import Development from "./components/Developmentservices";
import Footer from "./components/Footer";
import Infrastructure from "./components/Infrastructure";
import Landing from "./components/Landing";
import Letstalk from "./components/Letstalk";
import Navbar from "./components/Navbar";
import OurPartners from "./components/OurPartners";
import Resolute from "./components/Resolute";

function App() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className="App w-full flex flex-col justify-center items-center justify-items-center">
      <div className={`${colorChange ? "bg-[#000000]":""} navbar-fixed z-50`}>
        <div className="max-w-[1280px]  mx-auto">
          <Navbar />
        </div>
      </div>
      <div className="w-full  ">
        <Landing />
      </div>
      <div className="max-w-[1280px] ">
        <Development />
      </div>
      <div
        className="w-full flex flex-col justify-center items-center justify-items-center"
        style={{ background: "rgba(255, 255, 255, 0.06)" }}
      >
        <div className="max-w-[1280px]">
          <Infrastructure />
          <OurPartners />
        </div>
      </div>
      <div className="max-w-[1280px] ">
        <Delegate />
      </div>
      <div
        className="w-full flex flex-col justify-center items-center justify-items-center"
        style={{
          background: "linear-gradient(180deg, #2f50da 0%, #a562f7 100%)",
        }}
      >
        <div className="max-w-[1280px]">
          <Resolute />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center justify-items-center">
        <div className="w-[1280px] max-w-[1280px]">
          <Letstalk />
        </div>
      </div>
      <div
        className="w-full flex flex-col justify-center items-center justify-items-center"
        style={{ background: "rgba(255, 255, 255, 0.06)" }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default App;
