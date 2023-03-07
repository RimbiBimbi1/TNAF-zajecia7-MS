import React from "react";
import "./Quiz.css";
import { Question } from "../Question/Question";
import { NextQuestionButton } from "../NextQuestionButton/NextQuestionButton";
import { QuizResult } from "../QuizResult/QuizResult";

function Quiz({ questions }) {
  const questionsLength = questions.length;

  const [score, setScore] = React.useState(0);
  const [current, setCurrent] = React.useState(0);
  const [visible, setVisible] = React.useState(false);

  const handleOptionClicked = (value) => {
    setScore(score + value);
    setVisible(true);
  };

  const handleNextQuestion = () => {
    setVisible(false);
    setCurrent(current + 1);
  };

  const nextPanel = () => {
    return current === questions.length ? (
      <QuizResult score={score} maxScore={questions.length} />
    ) : (
      <>
        <h4>
          Pytanie {current + 1}/{questionsLength}
        </h4>
        <Question
          handleOptionClicked={handleOptionClicked}
          visible={visible}
          question={questions[current]}
        />
        <NextQuestionButton
          disabled={!visible}
          handleNextQuestion={handleNextQuestion}
        />
      </>
    );
  };

  return <div className={"Quiz"}>{nextPanel()}</div>;
}

export { Quiz };
