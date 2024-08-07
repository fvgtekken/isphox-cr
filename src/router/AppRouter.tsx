import { Route, Routes, Navigate } from 'react-router-dom';
import { PageNotFound } from '../view/common/PageNotFound';
import QuizContainer from '../view/quiz/QuizContainer';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/quiz' element={<QuizContainer />} />
        <Route path='/' element={<Navigate to='/quiz' />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
};
