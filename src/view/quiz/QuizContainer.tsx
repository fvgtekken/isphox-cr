import Quiz from './Quiz';
import Result from './Result';
import Header from '../common/Header';
import ProgressBar from '../common/ProgressBar';
import QuestionCount from './QuestionCount';
import { useQuestion } from '../../hooks/useQuestion';
import { useResult } from '../../hooks/useResults';
import { useNextSlide } from '../../hooks/useNextSlide';
import { useAnswerHandlers } from '../../hooks/useAnswerHandlers';
import { defaultGenre } from '../../data/quizQuestions';
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
  const { questionId, counter } = questionConfig;
  const questionTotal = filterAnwserOpt.length;
  return (
    <div className='App'>
      <Header className='App-header'>
        <h2>Quiz Game!</h2>
      </Header>

      {genre !== defaultGenre && (
        <>
          <QuestionCount counter={questionId} total={questionTotal} /> <ProgressBar counter={counter} total={questionTotal}></ProgressBar>
        </>
      )}
      {result ? <Result quizResult={result} /> : <Quiz {...{ ...answerConfig, ...questionConfig, questionTotal, setNextSlide, handleInputField, handleAnswerSelected }} />}
    </div>
  );
};

export default QuizContainer;
