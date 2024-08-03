import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';

function Quiz(props: any) {
  //console.log('Esto es Props yanque', props.answerOptions);

  return (
    <div key={props.questionId}>
      <QuestionCount counter={props.questionId} total={props.questionTotal} />
      <Question content={props.question} />
      <ul className='answerOptions'>
        {props.answerOptions.map((key: any) => (
          <AnswerOption key={key.content} answerContent={key.content} answerType={key.type} answer={props.answer} questionId={props.questionId} onAnswerSelected={props.onAnswerSelected} />
        ))}
      </ul>
    </div>
  );
}

export default Quiz;
