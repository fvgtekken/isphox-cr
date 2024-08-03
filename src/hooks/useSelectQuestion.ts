import { useState, useEffect } from 'react';
import type { AnswerOption } from '../types/quizForm';
import quizQuestions from '../data/quizQuestions';
import { shuffle } from '../lib/shufleArray';

interface AnswerConfing {
  answer: '';
  answerOptions: AnswerOption[];
  filterAnwserOpt: any[];
  answersCount: Record<string, number>;
}

let checkFirst: boolean = false;

export const useSelectQuestion = (getResults: any, setResults: any) => {
  const [answerConfig, setAnswerConfig] = useState<AnswerConfing>({ answer: '', answerOptions: [], filterAnwserOpt: [], answersCount: {} });
  const [questionConfig, setQuestionConfig] = useState({ counter: 0, questionId: 1, question: '' });

  useEffect(() => {
    console.log('Chipote useEffect');
    const shuffledAnswerOptions = quizQuestions.map((question: any) => shuffle(question.answers));
    const question = quizQuestions[0].question;
    setQuestionConfig((prev) => {
      return {
        ...prev,
        question,
      };
    });

    const answerOptions = shuffledAnswerOptions[0];
    setAnswerConfig((prev) => ({
      ...prev,
      answerOptions,
    }));
  }, []);

  const handleAnswerSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { questionId } = questionConfig;
    const selectedValue: any = event.currentTarget.value;

    // Handle the first question and apply genre filter
    if (questionId === 1 && !checkFirst) {
      const filteredAnswerOptions = quizQuestions.filter((answer) => answer.genre === selectedValue || answer.genre === 'console');

      setAnswerConfig((prev) => ({
        ...prev,
        filterAnwserOpt: filteredAnswerOptions,
        answer: selectedValue,
      }));

      setTimeout(() => setNextQuestion(filteredAnswerOptions, true), 300);
      checkFirst = true;
      return;
    }

    // Handle subsequent questions
    setUserAnswer(selectedValue);
    const { filterAnwserOpt } = answerConfig;

    // Proceed to next question or show results
    if (questionId < filterAnwserOpt.length) {
      setTimeout(() => setNextQuestion(filterAnwserOpt, false), 300);
    } else {
      setTimeout(() => setResults(getResults(answerConfig)), 300);
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

    setQuestionConfig({
      counter: newCounter,
      questionId: newQuestionId,
      question: nextQuestion,
    });

    setAnswerConfig((prev) => ({
      ...prev,
      answer: '',
      answerOptions: nextAnswerOptions,
    }));
  };

  return {
    answerConfig,
    questionConfig,
    handleAnswerSelected,
  };
};
