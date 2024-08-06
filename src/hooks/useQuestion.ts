import { useState, useEffect } from 'react';
import quizQuestions, { Answer, QuizQuestion } from '../data/questions';

export interface QuestionConfig {
  counter: number;
  questionId: number;
  question: string;
  title: string;
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
  const [questionConfig, setQuestionConfig] = useState<QuestionConfig>({ counter: 0, questionId: 1, question: '', title: '', backgroundImageUrl: '' });

  useEffect(() => {
    const shuffledAnswerOptions = quizQuestions.map((question) => question.answers);
    const question = quizQuestions[0].question;
    const genre = quizQuestions[0].genre;
    const title = quizQuestions[0].title;
    const backgroundImageUrl = quizQuestions[0].backgroundImageUrl;

    setQuestionConfig((prev) => ({
      ...prev,
      question,
      title,
      backgroundImageUrl,
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
