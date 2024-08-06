import { useState } from 'react';
import Question from './Question';
import AnswerOption from './AnswerOption';
import { Button } from '../common/Button';
import Header from '../common/Header';
import '../../styles/quiz.css';
import '../../styles/button.css';
import LazyImage from '../common/LazyImage';

const Quiz = ({ genre, title, backgroundImageUrl, checkedAnswers, answerOptions, errorAnswer, questionId, question, setNextSlide, handleAnswerSelected, handleInputField }: any) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const classPanel = '';

  const panelContainerStyle = {
    backgroundImage: imageLoaded ? `url(${backgroundImageUrl})` : 'none',
    backgroundPosition: 'right center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    transition: 'background-image 0.3s ease-in-out',
  };

  return (
    <div key={questionId}>
      <div className={'question-panel'}>
        <Header className=''>
          <Question content={question} />
        </Header>
      </div>
      <div className={'title-panel'}>
        <Header className=''>
          <h3>{title}</h3>
        </Header>
      </div>

      <div className={'panel-container'} style={panelContainerStyle}>
        <LazyImage src={backgroundImageUrl} alt='Question background' onLoad={() => setImageLoaded(true)} />
        {/*Aqui deberiamos crear una clase css que sea tipo panel de boostrap que de un efecto delicado*/}
        <ul className={`answerOptions ${classPanel}`}>
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
      </div>
      <div className={'progress-panel'}>
        <div className={'errorMessage'}>{errorAnswer}</div>
      </div>

      <div className={'button-panel'}>
        <Button className={'button-next'} onClick={setNextSlide} title={'Next Slide'}></Button>
      </div>
    </div>
  );
};

export default Quiz;
