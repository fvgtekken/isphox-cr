import { useState, useEffect } from 'react';
import type { AnswerOption } from '../types/quizForm';
import quizQuestions from '../data/quizQuestions';
//import { shuffle } from '../lib/shufleArray';

export interface QuestionConfig {
  counter: number;
  questionId: number;
  question: string;
  title: string;
}

export interface AnswerConfing {
  genre: string;
  answer: string;
  answerOptions: AnswerOption[];
  filterAnwserOpt: any[];
  answersCount: Record<string, number>;
  checkedAnswers: string[];
  errorAnswer: string;
}

interface UseQuestion {
  answerConfig: AnswerConfing;
  questionConfig: QuestionConfig;
  setAnswerConfig: React.Dispatch<React.SetStateAction<AnswerConfing>>;
  setQuestionConfig: React.Dispatch<React.SetStateAction<QuestionConfig>>;
}

export const useQuestion = (): UseQuestion => {
  const [answerConfig, setAnswerConfig] = useState<AnswerConfing>({
    genre: 'initial',
    answer: '',
    answerOptions: [],
    filterAnwserOpt: [],
    answersCount: {},
    checkedAnswers: [],
    errorAnswer: '',
  });
  const [questionConfig, setQuestionConfig] = useState<QuestionConfig>({ counter: 0, questionId: 1, question: '', title: '' });

  useEffect(() => {
    console.log('Chipote useEffect');
    const shuffledAnswerOptions = quizQuestions.map((question: any) => question.answers);
    const question = quizQuestions[0].question;
    const genre = quizQuestions[0].genre;
    const title = quizQuestions[0].title;

    setQuestionConfig((prev) => ({
      ...prev,
      question,
      title,
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
