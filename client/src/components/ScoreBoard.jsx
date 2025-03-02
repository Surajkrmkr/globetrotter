import React from "react";

const ScoreBoard = ({ score }) => (
  <div className="score-board">
    <p>✅ Correct: {score.correct}</p>
    <p>❌ Incorrect: {score.incorrect}</p>
  </div>
);

export default ScoreBoard;
