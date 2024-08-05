import Question from './Question';
import QuestionCount from './QuestionCount';
import { defaultGenre } from '../../data/quizQuestions';
import AnswerOption from './AnswerOption';
import { Button } from '../common/Button';
import ProgressBar from '../common/ProgressBar';

const Quiz = ({ genre, checkedAnswers, answerOptions, errorAnswer, questionId, question, questionTotal, setNextSlide, onAnswerSelected, handleInputField }: any) => {
  return (
    <div key={questionId}>
      {genre == defaultGenre ? (
        <div> Welcome!, Please select your genre games</div>
      ) : (
        <>
          <QuestionCount counter={questionId} total={questionTotal} />
          <ProgressBar counter={questionId} total={questionTotal}></ProgressBar>
        </>
      )}
      

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
