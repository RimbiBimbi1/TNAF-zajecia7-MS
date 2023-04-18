import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { QuestionOption } from './QuestionOption';

describe('QuestionOption', () => {
  it('should render QuestionOption', () => {
    //given
    render(<QuestionOption />);

    //then
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render QuestionOption with passed answer', () => {
    //given
    const answer = 'Bombaj';
    render(<QuestionOption answer={answer} />);

    //then
    expect(screen.getByRole('button', { name: answer })).toBeInTheDocument();

  });

  it('should render QuestionOption with correct class', () => {
    //given
    render(<QuestionOption visible={true} value={true} />);

    //then
    expect(screen.getByRole('button')).toHaveClass('correct');
  });

  it('should render QuestionOption with correct class', () => {
    //given
    render(<QuestionOption visible={true} value={false} />);

    //then
    expect(screen.getByRole('button')).toHaveClass('incorrect');
  });
});