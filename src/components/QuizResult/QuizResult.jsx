import React from 'react';
import './QuizResult.css'
import gif from './EmotionalLimpingClownanemonefish-max-1mb1.gif';

function QuizResult({ score, maxScore }) {
  return (
    <>
      <h2>Koniec quizu</h2>
      <p>
        Twój wynik: {score}/{maxScore} pkt.
      </p>
      {(score === maxScore) && <img className={'wow'} src={gif} aria-label={'Ty teraz:'} alt={'Ty teraz'}></img>}
    </>
  );
}

export { QuizResult };
