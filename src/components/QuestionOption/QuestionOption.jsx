import React from "react";
import "./QuestionOption.css";

function QuestionOption({ answer, handleOptionClicked, visible, value }) {
  return (
    <button
      onClick={() => handleOptionClicked(value)}
      className={`QuestionOptionButton ${
        visible ? (value ? "correct" : "incorrect") : ""
      }`}
      disabled={visible}
    >
      {answer}
    </button>
  );
}

export { QuestionOption };
