import { ChangeEvent, useState, useEffect } from 'react';
import type { Answer } from '../../data/questions';
import AnswerOption from './AnswerOption';
import LazyImage from '../common/LazyImage';
import Spinner from '../common/Spinner';
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

const Quiz = ({ genre, description, result, backgroundImageUrl, checkedAnswers, answerOptions, questionId, handleAnswerSelected, handleInputField }: PropsQuiz) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  const typeBackgroundImageUrl = !result ? backgroundImageUrl : `/${result}.jpg`;

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
    </div>
  );
};

export default Quiz;
