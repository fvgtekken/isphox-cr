import Quiz from './Quiz';
import Header from '../common/MainTitle';
import ProgressBar from '../common/ProgressBar';
import { useQuestion } from '../../hooks/useQuestion';
import { useResult } from '../../hooks/useResults';
import { useNextSlide } from '../../hooks/useNextSlide';
import { useAnswerHandlers } from '../../hooks/useAnswerHandlers';
import { defaultGenre } from '../../data/questions';
import QuestionCount from './QuestionCount';
import '../../styles/quizContainer.css';

const QuizContainer = () => {
  const { result, getResults, setResults } = useResult();
  const { answerConfig, questionConfig, setQuestionConfig, setAnswerConfig } = useQuestion();
  const { handleAnswerSelected, handleInputField } = useAnswerHandlers(setAnswerConfig, answerConfig);
  const { setNextSlide, setNewQuiz } = useNextSlide({
    getResults,
    setResults,
    answerConfig,
    questionConfig,
    setQuestionConfig,
    setAnswerConfig,
  });

  const { filterAnwserOpt, genre } = answerConfig;
  const { counter, questionId } = questionConfig;
  const questionTotal = filterAnwserOpt.length;
  return (
    <div>
      <Header className='panel-quiz-header'>
        <img src='/favicon.png' alt='Logo' className={'logo'} />
        <h2>SiPhox Quiz Demo</h2>
      </Header>
      <div className='panel-progress-bar'>
        {genre !== defaultGenre && (
          <>
            <ProgressBar counter={counter} total={questionTotal}></ProgressBar>
            <QuestionCount counter={questionId} total={questionTotal} />
          </>
        )}
      </div>
      <Quiz {...{ ...answerConfig, ...questionConfig, result, counter, questionTotal, setNextSlide, setNewQuiz, handleInputField, handleAnswerSelected }} />
    </div>
  );
};

export default QuizContainer;
