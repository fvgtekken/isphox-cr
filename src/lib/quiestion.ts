import quizQuestions from '../data/questions';

export const initQuestions = () => {
  const initAnswerOptions = quizQuestions.map((question) => question.answers);
  const question = quizQuestions[0].question;
  const genre = quizQuestions[0].genre;
  const title = quizQuestions[0].title;
  const description = quizQuestions[0].description;
  const backgroundImageUrl = quizQuestions[0].backgroundImageUrl;

  return { initAnswerOptions, question, genre, title, description, backgroundImageUrl };
};
