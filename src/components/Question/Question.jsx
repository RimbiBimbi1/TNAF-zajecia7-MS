import React from "react";
import "./Question.css";
import { QuestionOption } from "../QuestionOption/QuestionOption";

function Question({ question, visible, handleOptionClicked }) {
  const renderQuestionOptions = () => {
    return question.options.map((option) => (
      <QuestionOption
        value={question.correct === option.id}
        key={option.id}
        answer={option.answer}
        handleOptionClicked={handleOptionClicked}
        visible={visible}
      />
    ));
  };

  return (
    <div className={"Question"}>
      <p className={"questionText"}>{question.text}</p>
      <div className={"divider"}></div>
      <div className={"questionOptions"}>{renderQuestionOptions()}</div>
    </div>
  );
}

export { Question };
