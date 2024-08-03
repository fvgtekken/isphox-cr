import { Route, Routes, Navigate } from 'react-router-dom';
import { PageNotFound } from '../view/common/PageNotFound';
import ContainerQuiz from '../view/quiz/ContainerQuiz';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='quiz' element={<ContainerQuiz />} />
        <Route path='/' element={<Navigate to='/quiz' />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
};
