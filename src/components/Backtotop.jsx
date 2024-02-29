import React, { useState, useEffect } from "react";

const Backtotop = () => {
  const [backtoTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      {backtoTopButton && (
        <button className="contact__socials-bg"
          style={{
            position: "fixed",
            bottom: "10px",
            right: "5px",
            height: "45px",
            width: "40px",
            fontSize: "30px",
            color: "white",
            
          }}
          title="BacktoTop" 
          onClick={scrollUp}
        >
          ^
        </button>
      )}
    </div>
  );
};

export default Backtotop;
