import React from "react";

function FlashCard({ questions }) {
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div className="cards-content">
          <p>{question.question}</p>
        </div>
      ))}
    </div>
  );
}

export default FlashCard;
