import quizQuestions, { defaultGenre } from '../data/quizQuestions';
import { AnswerConfing, QuestionConfig } from './useQuestion';

interface UseNextSlideProps {
  setAnswerConfig: React.Dispatch<React.SetStateAction<AnswerConfing>>;
  setQuestionConfig: React.Dispatch<React.SetStateAction<QuestionConfig>>;
  questionConfig: QuestionConfig;
  answerConfig: AnswerConfing;
  setResults: (result: string[]) => void;
  getResults: (answerConfig: AnswerConfing) => string[];
}

interface UseNextSlide {
  setNextSlide: () => void | null;
}

export const useNextSlide = ({ setAnswerConfig, setQuestionConfig, questionConfig, answerConfig, setResults, getResults }: UseNextSlideProps): UseNextSlide => {
  const setNextSlide = () => {
    const { questionId, counter } = questionConfig;
    const { genre, filterAnwserOpt, checkedAnswers } = answerConfig;
    let { answer } = answerConfig;

    // Initial Game Genre
    /****************************************************/
    if (!checkedAnswers.length && genre === defaultGenre) {
      setAnswerConfig((prev: any) => ({
        ...prev,
        errorAnswer: 'Please select your favorite genre game',
      }));
      return;
    }

    if (genre === defaultGenre) {
      const filteredAnswerOptions = quizQuestions.filter((question) => checkedAnswers.includes(question.genre) || question.genre === 'console');

      setAnswerConfig((prev: any) => ({
        ...prev,
        filterAnwserOpt: filteredAnswerOptions,
      }));

      setNextQuestion(filteredAnswerOptions);
      return;
    }

    // For the others genres
    /****************************************************/
    if (!answer && genre !== defaultGenre) {
      setAnswerConfig((prev: any) => ({
        ...prev,
        errorAnswer: 'Please Select an Option',
      }));
      return;
    }

    // For input field text
    //****************************************************** */
    let consoleExists: any = [];
    if (genre === 'console') {
      consoleExists = filterAnwserOpt[counter].answers.filter((opt: any) => opt.content.toLowerCase().replace(/\s+/g, '') === answer.toLowerCase().replace(/\s+/g, ''));
    }

    if (!consoleExists.length && genre === 'console') {
      setAnswerConfig((prev: any) => ({
        ...prev,
        errorAnswer: `We dont have an this console in our db`,
      }));
      return;
    }

    if (consoleExists.length && genre === 'console') {
      answer = consoleExists[0].type;
    }

    setUserStatistics(answer);

    // Proceed to next question or show results
    /*****************************************************/
    if (questionId < filterAnwserOpt.length) {
      setNextQuestion(filterAnwserOpt);
    } else {
      setQuestionConfig((prev: any) => ({
        ...prev,
        counter: counter + 1,
      }));
      setResults(getResults(answerConfig));
    }
  };

  // Get user ponits to get the final answer
  const setUserStatistics = (answer: any) => {
    const { answersCount } = answerConfig;
    const updateAnswersCount = { ...answersCount, [answer]: (answersCount[answer as keyof typeof answersCount] || 0) + 1 };
    setAnswerConfig((prev: any) => ({
      ...prev,
      answersCount: { ...updateAnswersCount },
      answer,
    }));
  };

  const setNextQuestion = (filterAnswerOptions = [...quizQuestions]) => {
    const { questionId, counter } = questionConfig;
    const { genre } = answerConfig;

    let newCounter = 0;
    let newQuestionId = 1;

    if (genre !== defaultGenre) {
      const increment = 1;
      newCounter = counter + increment;
      newQuestionId = questionId + increment;
    }

    const nextQuestion = filterAnswerOptions[newCounter].question;
    const nextAnswerOptions = filterAnswerOptions[newCounter].answers;
    const nextGenre = filterAnswerOptions[newCounter].genre;
    const nextTitle = filterAnswerOptions[newCounter].title;

    setQuestionConfig({
      counter: newCounter,
      questionId: newQuestionId,
      question: nextQuestion,
      title: nextTitle,
    });

    setAnswerConfig((prev: any) => ({
      ...prev,
      answer: '',
      errorAnswer: '',
      checkedAnswers: [],
      answerOptions: nextAnswerOptions,
      genre: nextGenre,
    }));
  };

  return {
    setNextSlide,
  };
};
