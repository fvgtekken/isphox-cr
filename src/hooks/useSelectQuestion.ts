import { useState, useEffect } from 'react';
import type { AnswerOption } from '../types/quizForm';
import quizQuestions from '../data/quizQuestions';
import { shuffle } from '../lib/shufleArray';

interface AnswerConfing {
  genre: string;
  answer: string;
  answerOptions: AnswerOption[];
  filterAnwserOpt: any[];
  answersCount: Record<string, number>;
  checkedAnswers: string[];
}

let checkFirst: boolean = false;

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
    console.log('chipoteate este JSON', answer, genre);

    console.log('handleAnswerSelected answer', answer);
    let { checkedAnswers } = answerConfig;

    if (checkedAnswers.includes(answer)) {
      checkedAnswers = checkedAnswers.filter((answerSelected) => answerSelected !== answer);
    } else {
      checkedAnswers.push(answer);
    }

    setAnswerConfig((prev) => ({
      ...prev,
      answer,
      checkedAnswers,
    }));
  };

  const setNextSlide = () => {
    const { questionId } = questionConfig;
    const { answer, filterAnwserOpt, checkedAnswers } = answerConfig;
    //console.log('checkedAnswers', checkedAnswers);

    if (!checkedAnswers.length && questionId === 1 && !checkFirst) {
      console.log('Select Something');
      return;
    }

    // Handle the first question and apply genre filter
    if (questionId === 1 && !checkFirst) {
      const filteredAnswerOptions = quizQuestions.filter((answerOpt) => answerOpt.genre === answer || answerOpt.genre === 'console');

      setAnswerConfig((prev) => ({
        ...prev,
        filterAnwserOpt: filteredAnswerOptions,
      }));

      setNextQuestion(filteredAnswerOptions, true);
      checkFirst = true;
      return;
    }

    if (!answer) {
      return;
    }

    // Handle subsequent questions
    setUserAnswer(answer);

    // Proceed to next question or show results
    if (questionId < filterAnwserOpt.length) {
      setNextQuestion(filterAnwserOpt, false);
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

  const setNextQuestion = (filterAnswerOptions = [...quizQuestions], skip: boolean) => {
    const { questionId, counter } = questionConfig;

    const increment = skip ? 0 : 1;
    const newCounter = counter + increment;
    const newQuestionId = questionId + increment;

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
