import Question from './Question';
import AnswerOption from './AnswerOption';
import { Button } from '../common/Button';
import Header from '../common/Header';

const Quiz = ({ genre, title, checkedAnswers, answerOptions, errorAnswer, questionId, question, setNextSlide, handleAnswerSelected, handleInputField }: any) => {
  return (
    <div key={questionId}>
      <Header className=''>
        <h3>{title}</h3>
      </Header>
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
            handleAnswerSelected={handleAnswerSelected}
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
