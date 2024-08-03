import { useState, useEffect } from 'react';
import quizQuestions from '../../data/quizQuestions'; // Asegúrate de importar las preguntas del cuestionario
import { AnswerOption } from '../../types/quizForm';
import Quiz from './Quiz';
import Result from './Result';
import { shuffle } from '../../lib/shufleArray';
import '../../styles/App.css';

let checkFirst: boolean = false;

const ContainerQuiz = () => {
  //const [counter, setCounter] = useState(0);
  //const [questionId, setQuestionId] = useState(1);
  //const [question, setQuestion] = useState('');
  const [answerOptions, setAnswerOptions] = useState<AnswerOption[]>([]);
  const [answer, setAnswer] = useState('');
  const [answersCount, setAnswersCount] = useState<Record<string, number>>({});
  const [result, setResult] = useState('');
  const [filterAwnser, setFilterAwnser] = useState<any[]>([]);
  const [questionConfig, setQuestionConfig] = useState({ counter: 0, questionId: 1, question: '' });

  useEffect(() => {
    console.log('Chipote useEffect');
    const shuffledAnswerOptions = quizQuestions.map((question: any) => shuffle(question.answers));
    //setQuestion(quizQuestions[0].question);
    const question = quizQuestions[0].question;

    setQuestionConfig((prev) => {
      return {
        ...prev,
        question,
      };
    });

    setAnswerOptions(shuffledAnswerOptions[0]);
  }, []);

  const handleAnswerSelected = (event: any) => {
    const { questionId } = questionConfig;

    if (questionId === 1 && !checkFirst) {
      console.log('Chipote AnswerSelected', event.currentTarget.value);
      const genre = event.currentTarget.value;
      const filterAwnser2: any = quizQuestions.filter((answer: any) => answer.genre === genre || answer.genre === 'console');
      //console.log('filterAwnser', filterAwnser);
      setFilterAwnser(filterAwnser2);

      setTimeout(() => setNextQuestion(filterAwnser2, true), 300);
      checkFirst = true;
      return;
    }

    setUserAnswer(event.currentTarget.value);

    if (questionId < filterAwnser.length) {
      setTimeout(() => setNextQuestion(filterAwnser, false), 300);
    } else {
      setTimeout(() => setResults(getResults()), 300);
    }
  };

  const setUserAnswer = (answer: any) => {
    setAnswersCount((prevAnswersCount) => ({
      ...prevAnswersCount,
      [answer]: (prevAnswersCount[answer as keyof typeof prevAnswersCount] || 0) + 1,
    }));
    setAnswer(answer);
  };

  const setNextQuestion = (filterAwnser = [...quizQuestions], skip: boolean) => {
    console.log('filterAwnser', filterAwnser);

    const { questionId, counter } = questionConfig;
    const sum = skip ? 0 : 1;
    const newCounter: number = counter + sum;
    const newQuestionId = questionId + sum;

    const question = filterAwnser[newCounter].question;
    setQuestionConfig({ counter: newCounter, questionId: newQuestionId, question });

    setAnswerOptions(filterAwnser[newCounter].answers);
    setAnswer('');
  };

  const getResults = () => {
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key as keyof typeof answersCount]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);
    return answersCountKeys.filter((key: any) => answersCount[key as keyof typeof answersCount] === maxAnswerCount);
  };

  const setResults = (result: any) => {
    if (result.length === 1) {
      setResult(result[0]);
    } else {
      setResult('Undetermined');
    }
  };

  const { questionId, question } = questionConfig;

  return (
    <div className='App'>
      <div className={'App-header'}>
        <h2 className={''}>React Quiz</h2>
      </div>
      {result ? (
        <Result quizResult={result} />
      ) : (
        <Quiz answer={answer} answerOptions={answerOptions} questionId={questionId} question={question} questionTotal={quizQuestions.length} onAnswerSelected={handleAnswerSelected} />
      )}
    </div>
  );
};

export default ContainerQuiz;
