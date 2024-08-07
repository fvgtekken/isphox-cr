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
import MainTitle from '../common/MainTitle';
import Title from '../common/Title';
import { Button } from '../common/Button';
import FooterPanel from '../common/FooterPanel';

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

  const { filterAnwserOpt, genre, errorAnswer } = answerConfig;
  const { counter, questionId, question, title } = questionConfig;
  const typeContent = !result ? question : `You Prefer ${result}!`;
  const typeTitle = !result ? title : ``;
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
      <div key={questionId} className='quiz-container'>
        <MainTitle className={'question-panel'}>
          <Title className={'question'} content={typeContent} />
        </MainTitle>
        <MainTitle className={'title-panel'}>
          <h3>{typeTitle}</h3>
        </MainTitle>
        <Quiz {...{ ...answerConfig, ...questionConfig, result, counter, questionTotal, setNextSlide, setNewQuiz, handleInputField, handleAnswerSelected }} />
        <FooterPanel className={'footer-panel'} content={errorAnswer} />
        <div className={'button-panel'}>
          {!result ? <Button className={'button-next'} onClick={setNextSlide} title={'Next Slide'}></Button> : <Button className={'button-next'} onClick={setNewQuiz} title={'New Quiz!'}></Button>}
        </div>
      </div>
    </div>
  );
};

export default QuizContainer;
