import React from "react";

function Team({ addPoints }) {
  const completeQuest = (rewardPoints) => {
    addPoints(rewardPoints);
    alert(`You earned ${rewardPoints} Sunny Points!`);
  };

  return (
    <div>
      <h2>Social Media Quest</h2>
      <div>
        <button onClick={() => completeQuest(30)}>Follow on Twitter (30 points)</button>
        <button onClick={() => completeQuest(40)}>Like on Instagram (40 points)</button>
        <button onClick={() => completeQuest(50)}>Subscribe on YouTube (50 points)</button>

      </div>
    </div>
  );
}

export default Team;

