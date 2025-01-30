import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const developers = [
  {
    name: "John Doe",
    role: "Frontend Developer",
    bio: "Passionate about UI/UX and interactive web experiences.",
    image: "https://via.placeholder.com/150",
    social: {
      github: "https://github.com/johndoe",
      twitter: "https://twitter.com/johndoe",
    },
  },
];

export default function AboutUs() {
  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        {developers.map((dev, index) => (
          <div key={index} style={styles.card}>
            <img src={dev.image} alt={dev.name} style={styles.image} />
            <h2 style={styles.name}>{dev.name}</h2>
            <p style={styles.role}>{dev.role}</p>
            <p style={styles.bio}>{dev.bio}</p>
            <div style={styles.icons}>
              <a
                href={dev.social.github}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconLink}
              >
                <FaGithub style={styles.icon} />
              </a>
              <a
                href={dev.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconLink}
              >
                <FaLinkedin style={styles.icon} />
              </a>
              <a
                href={dev.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconLink}
              >
                <FaTwitter style={styles.icon} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "90%",
    maxheight:'600px',
    height: "40%",
    background: "#fff",
    borderRadius: "15px 15px 0 0",
    boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "center",
    color: "black",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#2575fc",
    marginBottom: "10px",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "250px",
    color: "#fff",
  },
  image: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "3px solid #fff",
    marginBottom: "10px",
  },
  name: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  role: {
    fontSize: "1rem",
    opacity: "0.9",
  },
  bio: {
    fontSize: "0.9rem",
    opacity: "0.8",
    marginBottom: "10px",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  iconLink: {
    color: "#fff",
    transition: "transform 0.3s ease",
  },
  icon: {
    fontSize: "1.5rem",
    cursor: "pointer",
  },
};