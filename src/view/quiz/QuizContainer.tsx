import Quiz from './Quiz';
import Result from './Result';
import { useSelectQuestion } from '../../hooks/useSelectQuestion';
import { useResult } from '../../hooks/useResults';
import '../../styles/App.css';
import '../../styles/index.css';

const QuizContainer = () => {
  const { result, getResults, setResults } = useResult();
  const { answerConfig, questionConfig, handleAnswerSelected } = useSelectQuestion(getResults, setResults);

  const { questionId, question } = questionConfig;
  const { answer, answerOptions, filterAnwserOpt } = answerConfig;
  const questionTotal = filterAnwserOpt.length;

  return (
    <div className='App'>
      <div className={'App-header'}>
        <h2 className={''}>React Quiz</h2>
      </div>
      {result ? <Result quizResult={result} /> : <Quiz {...{ answer, answerOptions, questionId, question, questionTotal }} onAnswerSelected={handleAnswerSelected} />}
    </div>
  );
};

export default QuizContainer;
