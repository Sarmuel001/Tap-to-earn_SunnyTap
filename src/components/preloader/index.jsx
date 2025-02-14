import React from "react";
import "./preloader.css";
import preAI from './preAI.jpg'

const Preloader = () => {
  return (
    <div className="preloader"  >
    <div className="image-container">
       <img src={preAI} alt="Loading" /> 
    </div>
    <div className="loader"></div>
  </div>
);
};
export default Preloader;
