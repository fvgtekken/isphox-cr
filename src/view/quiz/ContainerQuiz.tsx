import { useState, useEffect } from 'react';
import quizQuestions from '../../data/quizQuestions'; // Asegúrate de importar las preguntas del cuestionario
import { AnswerOption } from '../../types/quizForm';
import Quiz from './Quiz';
import Result from './Result';
import { shuffle } from '../../lib/shufleArray';
import '../../styles/App.css';

let checkFirst: boolean = false;
interface AnswerConfing {
  answer: '';
  answerOptions: AnswerOption[];
  filterAnwserOpt: any[];
}

const ContainerQuiz = () => {
  const [answerConfig, setAnswerConfig] = useState<AnswerConfing>({ answer: '', answerOptions: [], filterAnwserOpt: [] });
  // const [filterAnwserOpt, setFilterAnwserOpt] = useState<any[]>([]);
  const [answersCount, setAnswersCount] = useState<Record<string, number>>({});
  const [result, setResult] = useState('');
  const [questionConfig, setQuestionConfig] = useState({ counter: 0, questionId: 1, question: '' });

  useEffect(() => {
    console.log('Chipote useEffect');
    const shuffledAnswerOptions = quizQuestions.map((question: any) => shuffle(question.answers));
    const question = quizQuestions[0].question;
    setQuestionConfig((prev) => {
      return {
        ...prev,
        question,
      };
    });

    const answerOptions = shuffledAnswerOptions[0];
    setAnswerConfig((prev) => ({
      ...prev,
      answerOptions,
    }));
  }, []);

  const handleAnswerSelected = (event: any) => {
    const { questionId } = questionConfig;

    if (questionId === 1 && !checkFirst) {
      console.log('Chipote AnswerSelected', event.currentTarget.value);
      const genre = event.currentTarget.value;
      const filterAnwserOpt: any = quizQuestions.filter((answer: any) => answer.genre === genre || answer.genre === 'console');
      setAnswerConfig((prev) => ({
        ...prev,
        filterAnwserOpt,
      }));

      setTimeout(() => setNextQuestion(filterAnwserOpt, true), 300);
      checkFirst = true;
      return;
    }

    setUserAnswer(event.currentTarget.value);
    const { filterAnwserOpt } = answerConfig;
    if (questionId < filterAnwserOpt.length) {
      setTimeout(() => setNextQuestion(filterAnwserOpt, false), 300);
    } else {
      setTimeout(() => setResults(getResults()), 300);
    }
  };

  const setUserAnswer = (answer: any) => {
    setAnswersCount((prevAnswersCount) => ({
      ...prevAnswersCount,
      [answer]: (prevAnswersCount[answer as keyof typeof prevAnswersCount] || 0) + 1,
    }));

    setAnswerConfig((prev) => ({
      ...prev,
      answer,
    }));
  };

  const setNextQuestion = (filterAnwserOpt = [...quizQuestions], skip: boolean) => {
    console.log('filterAwnser', filterAnwserOpt);

    const { questionId, counter } = questionConfig;
    const sum = skip ? 0 : 1;
    const newCounter: number = counter + sum;
    const newQuestionId = questionId + sum;

    const question = filterAnwserOpt[newCounter].question;
    const answerOptions = filterAnwserOpt[newCounter].answers;

    setQuestionConfig({ counter: newCounter, questionId: newQuestionId, question });
    setAnswerConfig((prev) => ({
      ...prev,
      answer: '',
      answerOptions,
    }));

    console.log('answerOptions chipote Next', answerOptions);
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
  const { answer, answerOptions } = answerConfig;

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
