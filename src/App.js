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
import Backtotop from "./components/Backtotop";
import Carousel from "./components/Carousel";

function App() {
  const items = [
    {
      imageUrl: 'https://example.com/image1.jpg',
      alt: 'Image 1',
      title: 'Title 1',
      description: 'Description 1'
    },
    {
      imageUrl: 'https://example.com/image2.jpg',
      alt: 'Image 2',
      title: 'Title 2',
      description: 'Description 2'
    },
    {
      imageUrl: 'https://example.com/image3.jpg',
      alt: 'Image 3',
      title: 'Title 3',
      description: 'Description 3'
    }
  ];
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
    <div className="App w-full flex flex-col justify-center items-center justify-items-center overflow-x-hidden">
      <div
        className={`${
          colorChange ? "background-nav   pt-4 pb-4  " : "pt-6 pb-6 "
        } navbar-fixed z-50`}
      >
        <div className="max-w-[1280px]  mx-auto">
          <Navbar />
        </div>
      </div>
      <div className="w-full">
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
      <div className="w-full relative">
        <Resolute />
      </div>
      <div className="w-full flex flex-col justify-center items-center justify-items-center">
        <div className=" max-w-[1280px]">
          <Letstalk />
        </div>
      </div>
      <div
        className="w-full flex flex-col justify-center items-center justify-items-center"
        style={{ background: "rgba(255, 255, 255, 0.06)" }}
      >
        <Footer />
        {/* <Carousel items={items} /> */}
      </div>
      <Backtotop />
    </div>
  );
}

export default App;
