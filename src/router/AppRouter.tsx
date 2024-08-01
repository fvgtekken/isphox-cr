import { Route, Routes, Navigate } from 'react-router-dom';
import QuizIntro from '../view/quiz/QuizIntro';
import { PageNotFound } from '../view/common/PageNotFound';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='quiz' element={<QuizIntro />} />
        <Route path='/' element={<Navigate to='/quiz' />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
};
