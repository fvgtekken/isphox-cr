import Quiz from './Quiz';
import Result from './Result';
import { useSelectQuestion } from '../../hooks/useSelectQuestion';
import { useResult } from '../../hooks/useResults';
import ProgressBar from '../common/ProgressBar';
import QuestionCount from './QuestionCount';
import { defaultGenre } from '../../data/quizQuestions';
import useAnswerHandlers from '../../hooks/useAnswerHandlers';
import { useNextSlide } from '../../hooks/useNextSlide';
import Header from '../common/Header';
import '../../styles/index.css';
import '../../styles/App.css';

const QuizContainer = () => {
  const { result, getResults, setResults } = useResult();
  const { answerConfig, questionConfig, setQuestionConfig, setAnswerConfig } = useSelectQuestion(getResults, setResults);
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
      <Header {...{ className: 'App-header', title: 'React Quiz Game!' }} />

      {genre === defaultGenre ? (
        <>
          <div> Welcome!, Please select your genre games</div>
        </>
      ) : (
        <>
          <QuestionCount counter={questionId} total={questionTotal} />
          <ProgressBar counter={counter} total={questionTotal}></ProgressBar>
        </>
      )}

      {result ? (
        <Result quizResult={result} />
      ) : (
        <Quiz {...{ ...answerConfig, ...questionConfig, questionTotal, setNextSlide }} handleInputField={handleInputField} onAnswerSelected={handleAnswerSelected} />
      )}
    </div>
  );
};

export default QuizContainer;
