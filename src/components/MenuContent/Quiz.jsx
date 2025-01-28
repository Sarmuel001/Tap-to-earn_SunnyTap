import React, { useState, useEffect } from "react";

const quizzes = [
  {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
  },
];

function DailyQuiz({ points, setPoints }) {
  const [lastQuizDate, setLastQuizDate] = useState(null);
  const [userAnswer, setUserAnswer] = useState(null);
  const [quizScore, setQuizScore] = useState(null);
  const [isQuizAvailable, setIsQuizAvailable] = useState(false);

  // Get the current date and compare with the last quiz date
  useEffect(() => {
    const savedDate = localStorage.getItem("lastQuizDate");
    const currentDate = new Date().toLocaleDateString();

    // If quiz was already taken today, make it unavailable
    if (savedDate === currentDate) {
      setIsQuizAvailable(false);
    } else {
      setIsQuizAvailable(true);
    }
  }, []);

  const handleAnswerSelection = (answer) => {
    setUserAnswer(answer);
  };

  const handleSubmitQuiz = () => {
    // Check if the answer is correct
    if (userAnswer === quizzes[0].correctAnswer) {
      setQuizScore(20); // Correct answer gets 20 points
      setPoints(points + 20); // Add points to the total score
    } else {
      setQuizScore(0); // Incorrect answer gets 0 points
    }

    // Store the current date in localStorage to prevent further quiz attempts today
    const currentDate = new Date().toLocaleDateString();
    localStorage.setItem("lastQuizDate", currentDate);

    // Mark the quiz as unavailable until the next day
    setIsQuizAvailable(false);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.header}>Daily Quiz</h3>
      {isQuizAvailable ? (
        <div>
          <p style={styles.question}>{quizzes[0].question}</p>
          {quizzes[0].options.map((option) => (
            <div key={option} style={styles.option}>
              <input
                type="radio"
                id={option}
                name="quiz"
                value={option}
                onChange={() => handleAnswerSelection(option)}
                checked={userAnswer === option}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
          <button onClick={handleSubmitQuiz} style={styles.button}>
            Submit Answer
          </button>
        </div>
      ) : (
        <div>
          <p style={styles.message}>You have already completed today's quiz. Come back tomorrow!</p>
        </div>
      )}
      {quizScore !== null && (
        <div style={styles.result}>
          <h4>
            Your score is: {quizScore} points{" "}
            {quizScore > 0 && <span style={styles.congrats}>🎉 Congratulations! 🎉</span>}
          </h4>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  header: {
    color: "#333",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  question: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  option: {
    marginBottom: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#2575fc",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  message: {
    fontSize: "18px",
    color: "#ff0000",
  },
  result: {
    marginTop: "20px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  congrats: {
    color: "green",
    fontWeight: "bold",
    marginLeft: "10px",
  },
};

export default DailyQuiz;
