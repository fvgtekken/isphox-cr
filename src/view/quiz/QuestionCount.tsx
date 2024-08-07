import '../../styles/questionCount.css';

interface PropsQuestionCount {
  total: number;
  counter: number;
}

const QuestionCount = (props: PropsQuestionCount) => {
  const { total, counter } = props;

  return (
    <div className='panel-question'>
      Question <span>{counter}</span> of <span>{total}</span>
    </div>
  );
};

export default QuestionCount;
