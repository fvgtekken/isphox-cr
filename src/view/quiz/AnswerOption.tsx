const AnswerOption = (props: any) => {
  const { genre, type, checkedAnswers, answerType, onAnswerSelected, answerContent } = props;

  return (
    <li className='answerOption'>
      <input
        type={type}
        className='radioCustomButton'
        name='radioGroup'
        checked={checkedAnswers.includes(answerType)}
        id={answerType}
        value={JSON.stringify({ answer: answerType, genre })}
        disabled={false}
        onChange={onAnswerSelected}
      />
      <label className='radioCustomLabel' htmlFor={answerType}>
        {answerContent}
      </label>
    </li>
  );
};

export default AnswerOption;
