import { useState, useEffect } from 'react';
import { Answer, QuizQuestion } from '../data/questions';
import { initQuestions } from '../lib/quiestion';

export interface QuestionConfig {
  counter: number;
  questionId: number;
  question: string;
  title: string;
  description: string;
  backgroundImageUrl: string;
}

export interface AnswerConfing {
  genre: string;
  answer: string;
  answerOptions: Answer[];
  filterAnwserOpt: QuizQuestion[];
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
  const [questionConfig, setQuestionConfig] = useState<QuestionConfig>({ counter: 0, questionId: 1, question: '', title: '', description: '', backgroundImageUrl: '' });

  useEffect(() => {
    const { initAnswerOptions, question, genre, title, description, backgroundImageUrl } = initQuestions();

    setQuestionConfig((prev) => ({
      ...prev,
      question,
      title,
      description,
      backgroundImageUrl,
    }));

    const answerOptions = initAnswerOptions[0];
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
