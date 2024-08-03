const QuestionCount = (props: any) => {
  const { total, counter } = props;

  return (
    <div className='questionCount'>
      Question <span>{counter}</span> of <span>{total}</span>
    </div>
  );
};

export default QuestionCount;
