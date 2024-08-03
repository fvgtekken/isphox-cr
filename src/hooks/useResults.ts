import { useState } from 'react';

export const useResult = () => {
  const [result, setResult] = useState('');

  const getResults = (answerConfig: any) => {
    const { answersCount } = answerConfig;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key as keyof typeof answersCount]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    return answersCountKeys.filter((key: any) => answersCount[key as keyof typeof answersCount] === maxAnswerCount);
  };

  const setResults = (result: any) => {
    setResult(result.length === 1 ? result[0] : 'Undetermined');
  };

  return { getResults, setResults, result };
};
