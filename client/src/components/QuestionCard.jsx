import React from "react";

const QuestionCard = ({ question, onAnswer }) => {
  return (
    <div className="question-card">
      <h3>Where is this?</h3>
      <div className="clues">
        <h4>Clues</h4>
        <div className="clues-op">
          {question.clues.map((clue) => (
            <p key={clue}>{clue}</p>
          ))}
        </div>
      </div>
      <div className="options">
        {question.options.map((option) => (
          <button key={option} onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
