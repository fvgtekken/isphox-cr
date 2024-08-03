const QuestionCount = (props: any) => {
  return (
    <div className='questionCount'>
      Question <span>{props.counter}</span> of <span>{props.total}</span>
    </div>
  );
};

export default QuestionCount;
