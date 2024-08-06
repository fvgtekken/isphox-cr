import { useState } from 'react';
import { AnswerConfing } from './useQuestion';

interface UseResult {
  getResults: (answerConfig: AnswerConfing) => string[];
  setResults: (result: string[]) => void;
  result: string;
}

export const useResult = (): UseResult => {
  const [result, setResult] = useState<string>('');

  const getResults = (answerConfig: AnswerConfing) => {
    const { answersCount } = answerConfig;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key as keyof typeof answersCount]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  };

  const setResults = (result: string[]) => {
    const typeResult = result.length === 1 ? result[0] : 'Diverse Preferences';
    setResult(typeResult);
  };

  return { getResults, setResults, result };
};
