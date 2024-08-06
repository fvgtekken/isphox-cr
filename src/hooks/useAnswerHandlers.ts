import { defaultGenre } from '../data/questions';
import { AnswerConfing } from './useQuestion';

export interface UseAnswerHandlers {
  handleInputField: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAnswerSelected: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useAnswerHandlers = (setAnswerConfig: React.Dispatch<React.SetStateAction<AnswerConfing>>, answerConfig: AnswerConfing): UseAnswerHandlers => {
  const handleInputField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const answer = event.target.value;

    setAnswerConfig((prev) => ({
      ...prev,
      answer,
    }));
  };

  const handleAnswerSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { answer, genre } = JSON.parse(event.target.value);
    let { checkedAnswers } = answerConfig;

    if (checkedAnswers.includes(answer) && genre === defaultGenre) {
      checkedAnswers = checkedAnswers.filter((answerSelected) => answerSelected !== answer);
    } else if (genre === defaultGenre) {
      checkedAnswers.push(answer);
    }

    if (genre !== defaultGenre) {
      checkedAnswers = [answer];
    }

    setAnswerConfig((prev) => ({
      ...prev,
      answer,
      checkedAnswers,
      genre,
    }));
  };

  return {
    handleInputField,
    handleAnswerSelected,
  };
};
