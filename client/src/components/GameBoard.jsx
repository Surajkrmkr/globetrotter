import React, { useEffect, useState } from "react";
import { fetchRandomQuestion, submitAnswer } from "../services/api";
import InvitePopup from "./InvitePopup";
import QuestionCard from "./QuestionCard";
import ScoreBoard from "./ScoreBoard";

const GameBoard = () => {
  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [feedback, setFeedback] = useState("");
  const [showInvite, setShowInvite] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    loadNewQuestion();
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const loadNewQuestion = async () => {
    const data = await fetchRandomQuestion();
    setQuestion(data);
    setFeedback("");
  };

  const handleAnswer = async (selectedCity) => {
    const clueHash = btoa(question.data.clues.join("-"));
    const result = await submitAnswer({
      clueHash,
      userAnswer: selectedCity,
      userName: username,
    });
    if (result.data.isCorrect) {
      setFeedback("🎉 Correct! " + result.data.randomFact);
      setScore({ ...score, correct: score.correct + 1 });

      setTimeout(() => {
        loadNewQuestion();
      }, 2000);
    } else {
      setFeedback("😢 Incorrect! " + result.data.randomFact);
      setScore({ ...score, incorrect: score.incorrect + 1 });
    }
  };

  return (
    <div className="game-board">
      <ScoreBoard score={score} />
      {question && (
        <QuestionCard question={question.data} onAnswer={handleAnswer} />
      )}
      {feedback && <div className="feedback">{feedback}</div>}
      <button onClick={loadNewQuestion}>Next Destination</button>
      <button onClick={() => setShowInvite(true)}>Challenge a Friend</button>
      {showInvite && <InvitePopup onClose={() => setShowInvite(false)} />}
    </div>
  );
};

export default GameBoard;
