import { ChangeEvent, useState, useEffect } from 'react';
import type { Answer } from '../../data/questions';
import AnswerOption from './AnswerOption';
import { Button } from '../common/Button';
import LazyImage from '../common/LazyImage';
import MainTitle from '../common/MainTitle';
import Title from '../common/Title';
import '../../styles/quiz.css';
import '../../styles/button.css';
import Spinner from '../common/Spinner';
import FooterPanel from '../common/FooterPanel';

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
  const [loading, setLoading] = useState(true);

  const typeBackgroundImageUrl = !result ? backgroundImageUrl : `/${result}.jpg`;
  const typeContent = !result ? question : `You Prefer ${result}!`;
  const typeTitle = !result ? title : ``;

  const panelContainerStyle = {
    backgroundImage: imageLoaded ? `url(${typeBackgroundImageUrl})` : 'none',
    backgroundPosition: !result ? 'right center' : 'center center',
    backgroundSize: !result ? 'contain' : 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: imageLoaded ? 1 : 0.3, // Adjust the opacity based on image loading
    transition: imageLoaded ? 'opacity 1s ease-in-out' : '', // Smooth transition effect
  };

  useEffect(() => {
    setImageLoaded(false);
    setLoading(true);
  }, [typeBackgroundImageUrl]);

  return (
    <div key={questionId} className='quiz-container'>
      <MainTitle className={'question-panel'}>
        <Title className={'question'} content={typeContent} />
      </MainTitle>
      <MainTitle className={'title-panel'}>
        <h3>{typeTitle}</h3>
      </MainTitle>
      <div className={'panel-container'} style={panelContainerStyle}>
        {loading && <Spinner className={'loading-spinner'} />}
        <LazyImage
          src={typeBackgroundImageUrl}
          onLoadStart={() => setLoading(true)}
          onLoad={() => {
            setImageLoaded(true);
            setLoading(false);
          }}
        />
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
      <FooterPanel className={'footer-panel'} content={errorAnswer} />
      <div className={'button-panel'}>
        {!result ? <Button className={'button-next'} onClick={setNextSlide} title={'Next Slide'}></Button> : <Button className={'button-next'} onClick={setNewQuiz} title={'New Quiz!'}></Button>}
      </div>
    </div>
  );
};

export default Quiz;
