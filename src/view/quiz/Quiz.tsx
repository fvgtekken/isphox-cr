import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';
import { Button } from '../common/Button';

const Quiz = ({ answer, checkedAnswers, answerOptions, questionId, question, questionTotal, setNextSlide, onAnswerSelected }: any) => {
  const typeInput = 'checkbox';

  //const typeInput = questionId === 1 ? 'checkbox' : 'radio';
  // console.log('typeInput', typeInput);

  return (
    <div key={questionId}>
      <QuestionCount counter={questionId} total={questionTotal} />
      <Question content={question} />
      <ul className='answerOptions'>
        {answerOptions.map((key: any) => (
          <AnswerOption
            type={typeInput}
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={answer}
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
