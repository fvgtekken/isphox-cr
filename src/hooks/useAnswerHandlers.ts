// Asegúrate de exportar AnswerConfing desde types/quizForm
import { defaultGenre } from '../data/quizQuestions';
import { AnswerConfing } from './useSelectQuestion';

const useAnswerHandlers = (setAnswerConfig: React.Dispatch<React.SetStateAction<AnswerConfing>>, answerConfig: any) => {
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
      checkedAnswers = checkedAnswers.filter((answerSelected: any) => answerSelected !== answer);
    } else if (genre === defaultGenre) {
      checkedAnswers.push(answer);
    }

    if (genre !== defaultGenre) {
      checkedAnswers = [];
      checkedAnswers.push(answer);
    }

    setAnswerConfig((prev: any) => ({
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

export default useAnswerHandlers;
