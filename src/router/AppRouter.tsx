import { Route, Routes } from 'react-router-dom';
import { PageNotFound } from '../view/common/PageNotFound';
import QuizContainer from '../view/quiz/QuizContainer';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<QuizContainer />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
};
