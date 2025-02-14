import React from "react";
import "./preloader.css";

const Preloader = () => {
  return (
    <div className="preloader"  >
    <div className="image-container">
       <img src="/src/assets/preAI.jpg" alt="Loading" /> 
    </div>
    <div className="loader"></div>
  </div>
);
};
export default Preloader;
