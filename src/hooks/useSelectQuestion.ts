import { useState, useEffect } from 'react';
import type { AnswerOption } from '../types/quizForm';
import quizQuestions, { defaultGenre } from '../data/quizQuestions';
import { shuffle } from '../lib/shufleArray';

interface AnswerConfing {
  genre: string;
  answer: string;
  answerOptions: AnswerOption[];
  filterAnwserOpt: any[];
  answersCount: Record<string, number>;
  checkedAnswers: string[];
}

export const useSelectQuestion = (getResults: any, setResults: any) => {
  const [answerConfig, setAnswerConfig] = useState<AnswerConfing>({ genre: '', answer: '', answerOptions: [], filterAnwserOpt: [], answersCount: {}, checkedAnswers: [] });
  const [questionConfig, setQuestionConfig] = useState({ counter: 0, questionId: 1, question: '' });

  useEffect(() => {
    console.log('Chipote useEffect');
    const shuffledAnswerOptions = quizQuestions.map((question: any) => shuffle(question.answers));
    const question = quizQuestions[0].question;
    const genre = quizQuestions[0].genre;

    setQuestionConfig((prev) => {
      return {
        ...prev,
        question,
        genre,
      };
    });

    const answerOptions = shuffledAnswerOptions[0];
    setAnswerConfig((prev) => ({
      ...prev,
      answerOptions,
    }));
  }, []);

  const handleAnswerSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { answer, genre } = JSON.parse(event.target.value);
    let { checkedAnswers } = answerConfig;

    if (checkedAnswers.includes(answer) && genre === defaultGenre) {
      checkedAnswers = checkedAnswers.filter((answerSelected) => answerSelected !== answer);
    } else if (genre === defaultGenre) {
      checkedAnswers.push(answer);
    }

    if (genre !== defaultGenre) {
      checkedAnswers = [];
      checkedAnswers.push(answer);
    }

    setAnswerConfig((prev) => ({
      ...prev,
      answer,
      checkedAnswers,
      genre,
    }));
  };

  const setNextSlide = () => {
    const { questionId } = questionConfig;
    const { genre, answer, filterAnwserOpt, checkedAnswers } = answerConfig;
    //console.log('checkedAnswers', checkedAnswers);

    if (!checkedAnswers.length && genre === defaultGenre) {
      console.log('Select Something');
      return;
    }

    // Handle the first question and apply genre filter
    if (genre === defaultGenre) {
      const filteredAnswerOptions = quizQuestions.filter((answerOpt) => answerOpt.genre === answer || answerOpt.genre === 'console');
      console.log('filteredAnswerOptions', filteredAnswerOptions);

      setAnswerConfig((prev) => ({
        ...prev,
        filterAnwserOpt: filteredAnswerOptions,
      }));

      setNextQuestion(filteredAnswerOptions);
      return;
    }

    if (!answer) {
      console.log('Select Something');
      return;
    }

    // Handle subsequent questions
    setUserAnswer(answer);

    // Proceed to next question or show results
    if (questionId < filterAnwserOpt.length) {
      setNextQuestion(filterAnwserOpt);
    } else {
      setResults(getResults(answerConfig));
    }
  };

  const setUserAnswer = (answer: any) => {
    const { answersCount } = answerConfig;
    const updateAnswersCount = { ...answersCount, [answer]: (answersCount[answer as keyof typeof answersCount] || 0) + 1 };

    setAnswerConfig((prev) => ({
      ...prev,
      answersCount: updateAnswersCount,
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

    setAnswerConfig((prev) => ({
      ...prev,
      answer: '',
      checkedAnswers: [],
      answerOptions: nextAnswerOptions,
      genre: nextGenre,
    }));
  };

  return {
    answerConfig,
    questionConfig,
    setNextSlide,
    handleAnswerSelected,
  };
};
