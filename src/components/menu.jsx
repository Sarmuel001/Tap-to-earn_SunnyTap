import React from "react";
import { FaWallet, FaTasks, FaQuestionCircle } from "react-icons/fa";


function MenuBar({onMenuOpen}) {
  const buttonStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    margin: "0 5px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily:'Nexa'
  };

  const buttonHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "10px",
        padding: "10px 0",
      }}
    >
      <button style={buttonStyle} onClick={() => onMenuOpen("wallet")}>
        <FaWallet size={20} />
        <span>Wallet</span>
      </button>
      <button style={buttonStyle} onClick={() => onMenuOpen("quests")}>
        <FaTasks size={20} />
        <span>Quests</span>
      </button>
      <button style={buttonStyle} onClick={() => onMenuOpen("quiz")}>
        <FaQuestionCircle size={20} />
        <span>Quiz</span>
      </button>
      <button style={buttonStyle} onClick={() => onMenuOpen("our team")}>
        <span>Dev Team</span>
      </button>
     
    </div>
  );
}

export default MenuBar;
