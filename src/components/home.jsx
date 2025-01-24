import React, { useState, useEffect } from "react";
import ProgressBar from "./progressbar"; 
import Toast from "./toasts";

function Home() {
  const [points, setPoints] = useState(0);
  const [taps, setTaps] = useState(0);
  const [rank, setRank] = useState("Beginner");
  const [timeLeft, setTimeLeft] = useState(0);
  const [progress, setProgress] = useState(0);
  const [toastMessage, setToastMessage] = useState("");

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
    if (points >= 1000 && points < 2000) newRank = "Amateur";
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
      alert("You've reached the maximum taps for this hour. Please wait!");
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

  return (
    <div>
      <h1>Tap-to-Earn Game</h1>
      <h2>Points: {points}</h2>
      <h2>Rank: {rank}</h2>
      <h3>
        {taps >= 100
          ? "You've reached the maximum taps for this hour. Please wait!"
          : `Taps this hour: ${taps}/100`}
      </h3>
      {timeLeft > 0 && <h4>Time left: {formatTime(timeLeft)}</h4>}

      <ProgressBar progress={progress} />

      <button id="tapbut" onClick={handleTap} disabled={taps >= 100}>
        Tap Me!
      </button>

      {/* Toast Notification */}
      {toastMessage && <Toast message={toastMessage} />}

      {/* Motivational Messages */}
      {points === 1000 && <h3>You're on fire! Keep going to reach Amateur rank!</h3>}
      {points === 5000 && <h3>Incredible! You've become a Keeper. Aim for Senior Rank!</h3>}
      {points === 10000 && <h3>Amazing! You've reached Legendary status. You're unstoppable!</h3>}
    </div>
  );
}

export default Home;
