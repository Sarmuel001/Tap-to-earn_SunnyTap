import React, { useState } from "react";

function Quests({ points, setPoints }) {
  const [completedQuests, setCompletedQuests] = useState([]);

  const quests = [
    { id: 1, name: "Follow our Twitter/X", link: "https://twitter.com/sarmuel001", reward: 30 },
    { id: 2, name: "Follow @TechLord on Twitter/X", link: "https://twitter.com/_Techlord", reward: 40 },
    { id: 3, name: "Subscribe to our YouTube Channel", link: "https://youtube.com/adebayosunday51", reward: 50 },
  ];

  const handleQuestClick = (quest) => {
    if (!completedQuests.includes(quest.id)) {
      // alert(`You earned ${quest.reward} points for completing this quest!`);
      setPoints(points + quest.reward);
      setCompletedQuests([...completedQuests, quest.id]);
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.header}>Social Media Quests</h3>
      <ul style={styles.list}>
        {quests.map((quest) => (
          <li key={quest.id} style={styles.listItem}>
            <a
              href={quest.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleQuestClick(quest)}
              style={{
                ...styles.link,
                ...(completedQuests.includes(quest.id) ? styles.completedLink : {}),
              }}
              disabled={completedQuests.includes(quest.id)} 
            >
              {completedQuests.includes(quest.id) ? "Completed" : `${quest.name} (+${quest.reward} points)`}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  header: {
    color: "#333",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0, 
  },
  listItem: {
    margin: "10px 0",
  },
  link: {
    textDecoration: "none",
    color: "#2575fc",
    fontWeight: "bold",
    cursor: "pointer",
  },
  completedLink: {
    color: "gray",
    textDecoration: "line-through",
    cursor: "not-allowed",
  },
};

export default Quests;
