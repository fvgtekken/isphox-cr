import Question from './Question';
import QuestionCount from './QuestionCount';
import { defaultGenre } from '../../data/quizQuestions';
import AnswerOption from './AnswerOption';
import { Button } from '../common/Button';

const Quiz = ({ genre, checkedAnswers, answerOptions, questionId, question, questionTotal, setNextSlide, onAnswerSelected }: any) => {
  const typeInput = genre === defaultGenre ? 'checkbox' : 'radio';

  return (
    <div key={questionId}>
      <QuestionCount counter={questionId} total={questionTotal} />
      <Question content={question} />
      <ul className='answerOptions'>
        {answerOptions.map((key: any) => (
          <AnswerOption
            genre={genre}
            type={typeInput}
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            questionId={questionId}
            checkedAnswers={checkedAnswers}
            onAnswerSelected={onAnswerSelected}
          />
        ))}
      </ul>
      <Button onClick={setNextSlide} title={'Next Slide'}></Button>
    </div>
  );
};

export default Quiz;
