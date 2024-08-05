import { useState, useEffect } from 'react';
import type { AnswerOption } from '../types/quizForm';
import quizQuestions from '../data/quizQuestions';
//import { shuffle } from '../lib/shufleArray';

export interface AnswerConfing {
  genre: string;
  answer: string;
  answerOptions: AnswerOption[];
  filterAnwserOpt: any[];
  answersCount: Record<string, number>;
  checkedAnswers: string[];
  errorAnswer: string;
}

export const useSelectQuestion = () => {
  const [answerConfig, setAnswerConfig] = useState<AnswerConfing>({
    genre: 'initial',
    answer: '',
    answerOptions: [],
    filterAnwserOpt: [],
    answersCount: {},
    checkedAnswers: [],
    errorAnswer: '',
  });
  const [questionConfig, setQuestionConfig] = useState({ counter: 0, questionId: 1, question: '' });

  useEffect(() => {
    console.log('Chipote useEffect');
    const shuffledAnswerOptions = quizQuestions.map((question: any) => question.answers);
    const question = quizQuestions[0].question;
    const genre = quizQuestions[0].genre;

    setQuestionConfig((prev) => ({
      ...prev,
      question,
    }));

    const answerOptions = shuffledAnswerOptions[0];
    setAnswerConfig((prev) => ({
      ...prev,
      answerOptions,
      genre,
    }));
  }, []);

  return {
    answerConfig,
    questionConfig,
    setAnswerConfig,
    setQuestionConfig,
  };
};
