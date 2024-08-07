import quizQuestions, { Answer, defaultGenre } from '../data/questions';
import { initQuestions } from '../lib/quiestion';
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
  setNewQuiz: () => void;
}

export const useNextSlide = ({ setAnswerConfig, setQuestionConfig, questionConfig, answerConfig, setResults, getResults }: UseNextSlideProps): UseNextSlide => {
  const setNextSlide = () => {
    const { questionId, counter } = questionConfig;
    const { genre, filterAnwserOpt, checkedAnswers } = answerConfig;
    let { answer } = answerConfig;

    // Initial Game Genre
    /****************************************************/
    if (!checkedAnswers.length && genre === defaultGenre) {
      setAnswerConfig((prev) => ({
        ...prev,
        errorAnswer: 'Please select your favorite genre game',
      }));
      return;
    }

    if (genre === defaultGenre) {
      const filteredAnswerOptions = quizQuestions.filter((question) => checkedAnswers.includes(question.genre) || question.genre === 'console');
      console.log('filteredAnswerOptions', filteredAnswerOptions);

      setAnswerConfig((prev) => ({
        ...prev,
        filterAnwserOpt: filteredAnswerOptions,
      }));

      setNextQuestion(filteredAnswerOptions);
      return;
    }

    // For the others genres
    /****************************************************/
    if (!answer && genre !== defaultGenre) {
      setAnswerConfig((prev) => ({
        ...prev,
        errorAnswer: 'Please Select an Option',
      }));
      return;
    }

    // For input field text
    //****************************************************** */
    let consoleExists: Answer[] = [];
    if (genre === 'console') {
      consoleExists = filterAnwserOpt[counter].answers.filter((opt: any) => opt.content.toLowerCase().replace(/[\s-]+/g, '') === answer.toLowerCase().replace(/[\s-]+/g, ''));
    }

    if (!consoleExists.length && genre === 'console') {
      setAnswerConfig((prev) => ({
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
      setQuestionConfig((prev) => ({
        ...prev,
        counter: counter + 1,
      }));
      setResults(getResults(answerConfig));
    }
  };

  // Get user ponits to get the final answer
  const setUserStatistics = (answer: string) => {
    const { answersCount } = answerConfig;
    const updateAnswersCount = { ...answersCount, [answer]: (answersCount[answer as keyof typeof answersCount] || 0) + 1 };
    setAnswerConfig((prev) => ({
      ...prev,
      answersCount: { ...updateAnswersCount },
      answer,
    }));
  };

  const setNewQuiz = () => {
    const { initAnswerOptions, question, genre, title, description, backgroundImageUrl } = initQuestions();

    setQuestionConfig((prev) => ({
      ...prev,
      counter: 0,
      questionId: 1,
      question,
      title,
      description,
      backgroundImageUrl,
    }));

    const answerOptions = initAnswerOptions[0];
    setAnswerConfig((prev) => ({
      ...prev,
      answerOptions,
      answersCount: {},
      genre,
    }));
    setResults(['']);
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
    const nextDescription = filterAnswerOptions[newCounter].description;
    const newBackgroundImageUrl = filterAnswerOptions[newCounter].backgroundImageUrl;

    setQuestionConfig({
      counter: newCounter,
      questionId: newQuestionId,
      question: nextQuestion,
      title: nextTitle,
      description: nextDescription,
      backgroundImageUrl: newBackgroundImageUrl,
    });

    setAnswerConfig((prev) => ({
      ...prev,
      answer: '',
      errorAnswer: '',
      checkedAnswers: [],
      answerOptions: nextAnswerOptions,
      genre: nextGenre,
    }));
  };

  return {
    setNewQuiz,
    setNextSlide,
  };
};
