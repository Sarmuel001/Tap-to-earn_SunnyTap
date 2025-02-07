import React, { useState, useEffect } from "react";
import AboutUs from './MenuContent/OurTeam';
import ProgressBar from "./progressbar"; 
import Toast from "./toasts";
import MenuBar from "./menu";
import Quests from "./MenuContent/Socialquests";
import DailyQuiz from "./MenuContent/Quiz";

export function Home({}) {
  const [points, setPoints] = useState(0);
  const [taps, setTaps] = useState(0);
  const [rank, setRank] = useState("Beginner");
  const [timeLeft, setTimeLeft] = useState(0);
  const [progress, setProgress] = useState(0);
  const [toastMessage, setToastMessage] = useState("");
  const [activeMenu, setActiveMenu] = useState(null); 

  useEffect(() => {
    const savedPoints = localStorage.getItem("points");
    const savedTaps = localStorage.getItem("taps");
    const savedRank = localStorage.getItem("rank");
    const resetTime = localStorage.getItem("resetTime");

    if (savedPoints) setPoints(Number(savedPoints));
    if (savedTaps) setTaps(Number(savedTaps));
    if (savedRank) setRank(savedRank);
    if (resetTime) calculateTimeLeft(resetTime);


    const timer = setInterval(() => {
      if (resetTime) calculateTimeLeft(resetTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    localStorage.setItem("points", points);
  }, [points]);

  const addPoints = (newPoints) => {
    setPoints((prevPoints) => prevPoints + newPoints);
  };

  useEffect(() => {
    localStorage.setItem("points", points);
    localStorage.setItem("taps", taps);
    localStorage.setItem("rank", rank);
    updateRank(points);
    calculateProgress(points);
  }, [points, taps]);

  const calculateTimeLeft = (resetTime) => {
    const now = new Date().getTime();
    const timeLeftInMs = resetTime - now;

    if (timeLeftInMs <= 0) {
      setTaps(0);
      localStorage.removeItem("resetTime");
      setTimeLeft(0);
    } else {
      setTimeLeft(timeLeftInMs);
    }
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}m ${seconds}s`;
  };

  const updateRank = (points) => {
    let newRank = "Beginner";
    if (points >= 200 && points < 2000) newRank = "Amateur";
    else if (points >= 2000 && points < 3000) newRank = "Intermediate";
    else if (points >= 3000 && points < 5000) newRank = "Chief";
    else if (points >= 5000 && points < 8000) newRank = "Keeper";
    else if (points >= 8000 && points < 10000) newRank = "Senior Rank";
    else if (points >= 10000) newRank = "Legendary";

    if (newRank !== rank) {
      setToastMessage(`Congratulations! You've advanced to ${newRank}! 🎉`);
      setTimeout(() => setToastMessage(""), 5000);
    }

    setRank(newRank);
  };

  const calculateProgress = (points) => {
    let lowerBound = 0;
    let upperBound = 1000;

    if (points >= 1000 && points < 2000) {
      lowerBound = 1000;
      upperBound = 2000;
    } else if (points >= 2000 && points < 3000) {
      lowerBound = 2000;
      upperBound = 3000;
    } else if (points >= 3000 && points < 5000) {
      lowerBound = 3000;
      upperBound = 5000;
    } else if (points >= 5000 && points < 8000) {
      lowerBound = 5000;
      upperBound = 8000;
    } else if (points >= 8000 && points < 10000) {
      lowerBound = 8000;
      upperBound = 10000;
    }

    const percentage = ((points - lowerBound) / (upperBound - lowerBound)) * 100;
    setProgress(percentage);
  };

  const handleTap = () => {
    if (taps >= 100) {
      // alert("You've reached the maximum taps for this hour. Please wait!");
      return;
    }

    const newPoints = points + 1;
    const newTaps = taps + 1;

    setPoints(newPoints);
    setTaps(newTaps);

    if (newTaps === 1) {
      const resetTime = new Date().getTime() + 60 * 60 * 1000;
      localStorage.setItem("resetTime", resetTime);
      calculateTimeLeft(resetTime);
    }
  };

  const header ={
    width:'70%',
    height:'20px',
    padding: "06px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    color: "#fff",
    fontWeight: "bold",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily:'Nexa',
    fontSize:'.8rem'
  }

  const handleMenuOpen = (menu) => {
    setActiveMenu(menu);
  };

  const handleMenuClose = () => {
    setActiveMenu(null);
  };

  return (
    <div >
      <div style={{display:'flex', justifyContent:'space-around', gap:'20px'}}>
      <h4 style={header}>$SUNNY - {points}</h4>
      <h4 style={header}>Rank: {rank}</h4>
      </div>
      <h4>
        {taps >= 100
          ? "You've reached the maximum taps for this hour. Please wait!"
          : `Taps this hour: ${taps}/100`}
      </h4>
      {timeLeft > 0 && <h4>Time left until next tap: {formatTime(timeLeft)}</h4>}

          
      <button className='tapbut' onClick={handleTap} disabled={taps >= 100}>
            <h4>Tap!</h4>
      </button>
      
      <ProgressBar progress={progress} />
          <MenuBar onMenuOpen={handleMenuOpen}/>

      {/* Toast Notification */}
      {toastMessage && <Toast message={toastMessage} />}

      {/* Motivational Messages */}
      {points === 1000 && <h3>You're on fire! Keep going to reach Amateur rank!</h3>}
      {points === 5000 && <h3>Incredible! You've become a Keeper. Aim for Senior Rank!</h3>}
      {points === 10000 && <h3>Amazing! You've reached Legendary status. You're unstoppable!</h3>}
 
      {activeMenu && (
        <div style={styles.overlay}>
          <div style={styles.menuContainer}>
            <button style={styles.closeButton} onClick={handleMenuClose}>
              Close
            </button>
            {activeMenu === "wallet" && <div>
               <img src="https://png.pngtree.com/png-vector/20220725/ourmid/pngtree-server-maintenance-png-image_6059383.png" alt="walletConnect" style={{width:'90px',height:'90px'}} /> <br /> Under Development... <br /> Come back!</div>}
            {activeMenu === "quests" && <div><Quests points={points} setPoints={setPoints} /></div>}
            {activeMenu === "quiz" && <div><DailyQuiz points={points} setPoints={setPoints} /></div>}
            {activeMenu === "our team" && <div><AboutUs /></div>}
          </div>
        </div>
      )}

    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    zIndex: 1000,
  },
  menuContainer: {
    width: "100%",
    maxWidth: "600px",
    height:'210px',
    background: "#fff",
    borderRadius: "15px 15px 0 0",
    boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
    padding: "50px",
    textAlign: "center",
    animation: "slideUp 0.3s ease-out",
    color:'black',
  },
  closeButton: {
    position: "absolute",
    top: "230px",
    right: "20px",
    border: "none",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    color:'#fff',
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    fontFamily:'Nexa'
  },
};
export default Home;
