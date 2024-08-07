import { ChangeEvent, useState } from 'react';
import type { Answer } from '../../data/questions';
import AnswerOption from './AnswerOption';
import { Button } from '../common/Button';
import LazyImage from '../common/LazyImage';
import MainTitle from '../common/MainTitle';
import Title from '../common/Title';
import '../../styles/quiz.css';
import '../../styles/button.css';

interface PropsQuiz {
  genre: string;
  title: string;
  description: string;
  result: string;
  errorAnswer: string;
  question: string;
  backgroundImageUrl: string;
  checkedAnswers: string[];
  answerOptions: Answer[];
  questionId: number;
  setNewQuiz: () => void;
  setNextSlide: () => void;
  handleAnswerSelected: (event: ChangeEvent<HTMLInputElement>) => void;
  handleInputField: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Quiz = ({
  genre,
  title,
  description,
  result,
  backgroundImageUrl,
  checkedAnswers,
  answerOptions,
  errorAnswer,
  questionId,
  question,
  setNextSlide,
  setNewQuiz,
  handleAnswerSelected,
  handleInputField,
}: PropsQuiz) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const typeBackgroundImageUrl = !result ? backgroundImageUrl : `/${result}.jpg`;
  const typeContent = !result ? question : ` You Prefer ${result}!`;
  const typeTitle = !result ? title : ``;

  const panelContainerStyle = {
    backgroundImage: imageLoaded ? `url(${typeBackgroundImageUrl})` : 'none',
    backgroundPosition: !result ? 'right center' : 'center center',
    backgroundSize: !result ? 'contain' : 'cover',
    backgroundRepeat: 'no-repeat',
    transition: 'background-image 0.3s ease-in-out',
  };

  return (
    <div key={questionId}>
      <MainTitle className={'question-panel'}>
        <Title className={'question'} content={typeContent} />
      </MainTitle>

      <MainTitle className={'title-panel'}>
        <h3>{typeTitle}</h3>
      </MainTitle>

      <div className={'panel-container'} style={panelContainerStyle}>
        <LazyImage src={backgroundImageUrl} onLoad={() => setImageLoaded(true)} />
        {/*Aqui deberiamos crear una clase css que sea tipo panel de boostrap que de un efecto delicado*/}
        {!result && (
          <>
            <ul className={`answerOptions`}>
              <div className={`answerDescription`}>{description}</div>
              {answerOptions.map((opt) => (
                <AnswerOption
                  genre={genre}
                  typeField={opt.typeField}
                  htmlDirective={opt.htmlDirective}
                  htmlDirectiveLabel={opt.htmlDirectiveLabel}
                  key={opt.content}
                  answerContent={opt.content}
                  answerType={opt.type}
                  checkedAnswers={checkedAnswers}
                  handleAnswerSelected={handleAnswerSelected}
                  handleInputField={handleInputField}
                />
              ))}
            </ul>
          </>
        )}
      </div>
      <div className={'progress-panel'}>
        <div>{errorAnswer}</div>
      </div>

      <div className={'button-panel'}>
        {!result ? <Button className={'button-next'} onClick={setNextSlide} title={'Next Slide'}></Button> : <Button className={'button-next'} onClick={setNewQuiz} title={'New Quiz!'}></Button>}
      </div>
    </div>
  );
};

export default Quiz;
