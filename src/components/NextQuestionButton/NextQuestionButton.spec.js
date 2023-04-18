import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { NextQuestionButton } from './NextQuestionButton';
import userEvent from '@testing-library/user-event';

describe('NextQuestionButton', () => {
  it('should render nextQuestionButton', () => {
    //given
    render(<NextQuestionButton />);
    //then
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should add quizNextButton class to the button element', () => {

    //when
    render(<NextQuestionButton/>)

    //then
    expect(screen.getByRole('button')).toHaveClass('nextQuestionButton')
  });

  it('should render a button with onCLick passed', () => {
    //given
    const onClick = jest.fn();


    render(<NextQuestionButton handleNextQuestion={onClick} />);
    userEvent.click(screen.getByRole('button'));

    //then
    expect(onClick).toHaveBeenCalled();
  });


});