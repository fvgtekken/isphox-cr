import quizQuestions, { defaultGenre } from '../data/quizQuestions';

export const useNextSlide = ({ setAnswerConfig, setQuestionConfig, questionConfig, answerConfig, setResults, getResults }:any) => {
  const setNextSlide = () => {
    const { questionId, counter } = questionConfig;
    const { genre, filterAnwserOpt, checkedAnswers } = answerConfig;
    let { answer } = answerConfig;

    if (!checkedAnswers.length && genre === defaultGenre) {
      // console.log('Select Something');
      return;
    }

    // Handle the first question and apply genre filter
    if (genre === defaultGenre) {
      const filteredAnswerOptions = quizQuestions.filter((question) => checkedAnswers.includes(question.genre) || question.genre === 'console');

      setAnswerConfig((prev: any) => ({
        ...prev,
        filterAnwserOpt: filteredAnswerOptions,
      }));

      setNextQuestion(filteredAnswerOptions);
      return;
    }

    if (!answer) {
      console.log('Select Something');
      setAnswerConfig((prev: any) => ({
        ...prev,
        errorAnswer: 'Please Select an Option',
      }));
      return;
    }

    let consoleExists: any = [];
    if (genre === 'console') {
      console.log('Estas en console, con esta answer->', answer);
      console.log('options->', filterAnwserOpt[counter].answers);

      consoleExists = filterAnwserOpt[counter].answers.filter((opt: any) => opt.content.toLowerCase().replace(/\s+/g, '') === answer.toLowerCase().replace(/\s+/g, ''));
      console.log('Exite la consola ->', consoleExists);
    }

    if (!consoleExists.length && genre === 'console') {
      console.log('No existe la consola');
      setAnswerConfig((prev: any) => ({
        ...prev,
        errorAnswer: `We dont have an this console in out db`,
      }));
      return;
    }

    if (consoleExists.length && genre === 'console') {
      answer = consoleExists[0].type;
    }

    // Handle subsequent questions
    setUserAnswer(answer);

    // Proceed to next question or show results
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

  const setUserAnswer = (answer: any) => {
    console.log('setUserAnswer answer', answer);
    const { answersCount } = answerConfig;

    const updateAnswersCount = { ...answersCount, [answer]: (answersCount[answer as keyof typeof answersCount] || 0) + 1 };
    console.log('setUserAnswer updateAnswersCount', updateAnswersCount);

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

    setQuestionConfig({
      counter: newCounter,
      questionId: newQuestionId,
      question: nextQuestion,
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
