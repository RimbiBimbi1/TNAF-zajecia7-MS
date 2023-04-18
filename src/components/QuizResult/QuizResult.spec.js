import '@testing-library/jest-dom'
import {screen, render} from '@testing-library/react';
import { QuizResult } from './QuizResult';

describe('QuizResult', ()=>{
  it('should concatenate string correctly',() => {
      //given
      const score = 4
    const maxScore = 10
    render(<QuizResult score={score} maxScore={maxScore}/>)

    //then

    expect(screen.getByText(`Twój wynik: ${score}/${maxScore} pkt.`)).toBeInTheDocument()
  });
})