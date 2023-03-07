import React from "react";

function QuizResult({ score, maxScore }) {
  return (
    <>
      Twój wynik: {score}/{maxScore} pkt.
    </>
  );
}

export { QuizResult };
