import { useState } from 'react';
import quizQuestions from '../data/questions';

const useFilterAnswers = () => {
  const [filteredAnswers, setFilteredAnswers] = useState(quizQuestions);

  const filterByGenre = (genre: string) => {
    const filtered = quizQuestions.filter((question: any) => question.genre === genre || question.genre === 'console');
    setFilteredAnswers(filtered);
  };

  return [filteredAnswers, filterByGenre];
};

export default useFilterAnswers;
