import Question from './Question';
import AnswerOption from './AnswerOption';
import { Button } from '../common/Button';

const Quiz = ({ genre, checkedAnswers, answerOptions, errorAnswer, questionId, question, setNextSlide, onAnswerSelected, handleInputField }: any) => {
  return (
    <div key={questionId}>
      
      <Question content={question} />
      <ul className='answerOptions'>
        {answerOptions.map((opt: any) => (
          <AnswerOption
            genre={genre}
            typeField={opt.typeField}
            htmlDirective={opt.htmlDirective}
            htmlDirectiveLabel={opt.htmlDirectiveLabel}
            key={opt.content}
            answerContent={opt.content}
            answerType={opt.type}
            questionId={questionId}
            checkedAnswers={checkedAnswers}
            onAnswerSelected={onAnswerSelected}
            handleInputField={handleInputField}
          />
        ))}
      </ul>
      <div>{errorAnswer}</div>
      <Button onClick={setNextSlide} title={'Next Slide'}></Button>
    </div>
  );
};

export default Quiz;
