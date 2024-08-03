import { useState, useEffect } from 'react';
import quizQuestions from '../../data/quizQuestions'; // Asegúrate de importar las preguntas del cuestionario
import type { AnswerOption } from '../../types/quizForm';
import Quiz from './Quiz';
import Result from './Result';
import { shuffle } from '../../lib/shufleArray';
import '../../styles/App.css';
import '../../styles/index.css';

let checkFirst: boolean = false;
interface AnswerConfing {
  answer: '';
  answerOptions: AnswerOption[];
  filterAnwserOpt: any[];
  answersCount: Record<string, number>;
}

const ContainerQuiz = () => {
  const [answerConfig, setAnswerConfig] = useState<AnswerConfing>({ answer: '', answerOptions: [], filterAnwserOpt: [], answersCount: {} });
  const [questionConfig, setQuestionConfig] = useState({ counter: 0, questionId: 1, question: '' });
  const [result, setResult] = useState('');

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

  const handleAnswerSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { questionId } = questionConfig;
    const selectedValue: any = event.currentTarget.value;

    // Handle the first question and apply genre filter
    if (questionId === 1 && !checkFirst) {
      const filteredAnswerOptions = quizQuestions.filter((answer) => answer.genre === selectedValue || answer.genre === 'console');

      setAnswerConfig((prev) => ({
        ...prev,
        filterAnwserOpt: filteredAnswerOptions,
        answer: selectedValue,
      }));

      setTimeout(() => setNextQuestion(filteredAnswerOptions, true), 300);
      checkFirst = true;
      return;
    }

    // Handle subsequent questions
    setUserAnswer(selectedValue);
    const { filterAnwserOpt } = answerConfig;

    // Proceed to next question or show results
    if (questionId < filterAnwserOpt.length) {
      setTimeout(() => setNextQuestion(filterAnwserOpt, false), 300);
    } else {
      setTimeout(() => setResults(getResults()), 300);
    }
  };

  const setUserAnswer = (answer: any) => {
    const { answersCount } = answerConfig;
    const updateAnswersCount = { ...answersCount, [answer]: (answersCount[answer as keyof typeof answersCount] || 0) + 1 };

    setAnswerConfig((prev) => ({
      ...prev,
      answersCount: updateAnswersCount,
      answer,
    }));
  };

  const setNextQuestion = (filterAnswerOptions = [...quizQuestions], skip: boolean) => {
    const { questionId, counter } = questionConfig;

    const increment = skip ? 0 : 1;
    const newCounter = counter + increment;
    const newQuestionId = questionId + increment;

    const nextQuestion = filterAnswerOptions[newCounter].question;
    const nextAnswerOptions = filterAnswerOptions[newCounter].answers;

    setQuestionConfig({
      counter: newCounter,
      questionId: newQuestionId,
      question: nextQuestion,
    });

    setAnswerConfig((prev) => ({
      ...prev,
      answer: '',
      answerOptions: nextAnswerOptions,
    }));
  };

  const getResults = () => {
    const { answersCount } = answerConfig;
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
  const { answer, answerOptions, filterAnwserOpt } = answerConfig;
  const questionTotal = filterAnwserOpt.length;

  return (
    <div className='App'>
      <div className={'App-header'}>
        <h2 className={''}>React Quiz</h2>
      </div>
      {result ? <Result quizResult={result} /> : <Quiz {...{ answer, answerOptions, questionId, question, questionTotal }} onAnswerSelected={handleAnswerSelected} />}
    </div>
  );
};

export default ContainerQuiz;
