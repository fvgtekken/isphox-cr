import Quiz from './Quiz';
import Result from './Result';
import Header from '../common/Header';
import ProgressBar from '../common/ProgressBar';
import { useQuestion } from '../../hooks/useQuestion';
import { useResult } from '../../hooks/useResults';
import { useNextSlide } from '../../hooks/useNextSlide';
import { useAnswerHandlers } from '../../hooks/useAnswerHandlers';
import { defaultGenre } from '../../data/quizQuestions';
import QuestionCount from './QuestionCount';
import '../../styles/index.css';
import '../../styles/App.css';

const QuizContainer = () => {
  const { result, getResults, setResults } = useResult();
  const { answerConfig, questionConfig, setQuestionConfig, setAnswerConfig } = useQuestion();
  const { handleAnswerSelected, handleInputField } = useAnswerHandlers(setAnswerConfig, answerConfig);
  const { setNextSlide } = useNextSlide({
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
      <Header className='App-header'>
        <h2>Quiz Game!</h2>
      </Header>{' '}
      <div className='panel-progress-bar'>
        {genre !== defaultGenre && (
          <>
            <ProgressBar counter={counter} total={questionTotal}></ProgressBar>
            <QuestionCount counter={questionId} total={questionTotal} />  
          </>
        )}
      </div>
      {result ? <Result quizResult={result} /> : <Quiz {...{ ...answerConfig, ...questionConfig, counter, questionTotal, setNextSlide, handleInputField, handleAnswerSelected }} />}
    </div>
  );
};

export default QuizContainer;
