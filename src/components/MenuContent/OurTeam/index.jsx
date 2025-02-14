// import React from "react";
// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// const developers = [
//   {
//     name: "Sam Adebayo",
//     role: "(Web Developer)",
//     bio: "A member of CapacityBay Inc Cohort4. Passionate about UI/UX and interactive web experiences.",
//     image: "https://avatars.githubusercontent.com/u/89652234?s=400&u=c96b37c74520261cd5d82424035437519ff171c6&v=4",
//     social: {
//       github: "https://github.com/sarmuel001",
//       twitter: "https://twitter.com/sarmuel001",
//       linkedin:"https://www.linkedin.com/in/adebayo-sunday-samuel-6494038b/"
//     },
//   },
// ];

// export default function AboutUs() {
//   return (
//     <div style={styles.container}>
//       <div style={styles.grid}>
//         {developers.map((dev, index) => (
//           <div key={index} style={styles.card}>
//             <img src={dev.image} alt={dev.name} style={styles.image} />
//             <h2 style={styles.name}>{dev.name}</h2>
//             <p style={styles.role}>{dev.role}</p>
//             <p style={styles.bio}>{dev.bio}</p>
//             <div style={styles.icons}>
//               <a
//                 href={dev.social.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={styles.iconLink}
//               >
//                 <FaGithub style={styles.icon} />
//               </a>
//               <a
//                 href={dev.social.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={styles.iconLink}
//               >
//                 <FaLinkedin style={styles.icon} />
//               </a>
//               <a
//                 href={dev.social.twitter}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={styles.iconLink}
//               >
//                 <FaTwitter style={styles.icon} />
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const styles = {
  
//   grid: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//     flexWrap: "wrap",
//   },
//   card: {
//     background: "linear-gradient(135deg, #6a11cb, #2575fc)",
//     borderRadius: "15px",
//     padding: "0px",
//     boxShadow: "10px 41px 8px rgba(0,0,0,0.1)",
//     textAlign: "center",
//     width: "260px",
//     color: "#fff",
//     lineHeight:'20px'
//   },
//   image: {
//     width: "80px",
//     height: "80px",
//     borderRadius: "50%",
//     border: "3px solid #fff",
//     marginTop:'-30px'
//   },
//   name: {
//     fontSize: "1.2rem",
//     fontWeight: "bold",
//   },
//   role: {
//     fontSize: ".8rem",
//     opacity: "0.9",
//     marginTop:"-10px",
//   },
//   bio: {
//     fontSize: "0.9rem",
//     opacity: "0.8",
//   },
//   icons: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "10px",
//   },
//   iconLink: {
//     color: "#fff",
//     transition: "transform 0.3s ease",
//   },
//   icon: {
//     fontSize: "1.5rem",
//     cursor: "pointer",
//   },
// };

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const developers = [
  {
    name: "Sam Adebayo",
    role: "(Web Developer)",
    bio: "A member of CapacityBay Inc Cohort4. Passionate about UI/UX and interactive web experiences.",
    image: "https://avatars.githubusercontent.com/u/89652234?s=400&u=c96b37c74520261cd5d82424035437519ff171c6&v=4",
    social: {
      github: "https://github.com/sarmuel001",
      twitter: "https://twitter.com/sarmuel001",
      linkedin:"https://www.linkedin.com/in/adebayo-sunday-samuel-6494038b/"
    },
  },
];

export default function AboutUs() {
  const [pageIndex, setPageIndex] = useState(0); // 0 for first section, 1 for second section

  const togglePage = () => {
    setPageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0)); // Toggle between 0 and 1
  };

  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        {/* First Section (Developer Info) */}
        <div
          style={{
            ...styles.card,
            display: pageIndex === 0 ? "block" : "none", // Only show if pageIndex is 0
          }}
          onClick={togglePage}
        >
          <img src={developers[0].image} alt={developers[0].name} style={styles.image} />
          <h2 style={styles.name}>{developers[0].name}</h2>
          <p style={styles.role}>{developers[0].role}</p>
          <p style={styles.bio}>{developers[0].bio}</p>
          <div style={styles.icons}>
            <a href={developers[0].social.github} target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <FaGithub style={styles.icon} />
            </a>
            <a href={developers[0].social.linkedin} target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <FaLinkedin style={styles.icon} />
            </a>
            <a href={developers[0].social.twitter} target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <FaTwitter style={styles.icon} />
            </a>
          </div>
        </div>

        {/* Pagination Control Button */}
        <div style={styles.paginationButtonContainer}>
          <button style={styles.paginationButton} onClick={togglePage}>
            {pageIndex === 0 ? "About $SUNNY" : " Developer Info"}
          </button>
        </div>

        {/* Second Section (Random Text) */}
        <div
          style={{
            ...styles.card,
            display: pageIndex === 1 ? "block" : "none", // Only show if pageIndex is 1
          }}
          onClick={togglePage}
        >
          <p style={styles.sun}>
          Sunny Tap & Earn is a reward-based web app where users earn points by tapping, completing social media quests, and progressing through ranks. It features a tapping limit, a ranking system, progress tracking, and local storage for data persistence. Built with React and external CSS, future updates will include a backend and more. 🚀
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
 
 
    padding: "0px",
    marginTop:'15px',
    backgroundColor:'white',
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    position: "relative",
  },
  card: {
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    borderRadius: "15px",
    padding: "0px",
    boxShadow: "0px 10px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "260px",
    color: "#fff",
    lineHeight: "20px",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
  },
  image: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "3px solid #fff",
    marginTop: "-30px",
  },
  name: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  role: {
    fontSize: ".8rem",
    opacity: "0.9",
    marginTop: "-10px",
  },
  bio: {
    fontSize: "0.9rem",
    opacity: "0.8",
  },
  sun: {
    fontSize: "0.8rem",
    opacity: "0.8",
    marginTop:'40px'
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
  paginationButtonContainer: {
    marginTop: "0px",
    marginLeft:'190px',
    position:'absolute',
  },
  paginationButton: {
    width:'100px',
    fontSize:'0.8rem',
    backgroundColor: "#fff",
    border: "1px solid",
    color: "#2575fc",
    padding: "10px 0px",
    borderRadius: "0px 10px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};
