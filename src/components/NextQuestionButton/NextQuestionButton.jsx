import React from "react";
import "./NextQuestionButton.css";

function NextQuestionButton({ handleNextQuestion, disabled }) {
  return (
    <button
      onClick={handleNextQuestion}
      className={`nextQuestionButton ${disabled ? "disabled" : ""}`}
      disabled={disabled}
    >
      Dalej
    </button>
  );
}

export { NextQuestionButton };
