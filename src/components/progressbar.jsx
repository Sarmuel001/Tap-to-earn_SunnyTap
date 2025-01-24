import React from "react";

function ProgressBar({ progress }) {
  return (
    <div style={{ border: "1px solid #fff", width: "100%", height: "20px", marginBottom: "20px" }}>
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: "white",
          height: "100%",
      
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
