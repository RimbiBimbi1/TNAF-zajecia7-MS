import React from "react";

function QuizResult({ score, maxScore }) {
  return (
    <>
      <h2>Koniec quizu</h2>
      <p>
        Twój wynik: {score}/{maxScore} pkt.
      </p>
    </>
  );
}

export { QuizResult };
