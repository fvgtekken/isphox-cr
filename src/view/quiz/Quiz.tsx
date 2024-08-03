import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';

const Quiz = ({ questionId, questionTotal, question, answer, answerOptions, onAnswerSelected }: any) => {
  return (
    <div key={questionId}>
      <QuestionCount counter={questionId} total={questionTotal} />
      <Question content={question} />
      <ul className='answerOptions'>
        {answerOptions.map((key: any) => (
          <AnswerOption key={key.content} answerContent={key.content} answerType={key.type} answer={answer} questionId={questionId} onAnswerSelected={onAnswerSelected} />
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
