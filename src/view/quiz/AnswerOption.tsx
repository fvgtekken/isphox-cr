import { Input, InputField } from '../common/form';

const AnswerOption = (props: any) => {
  const { typeField, htmlDirective, htmlDirectiveLabel, genre, checkedAnswers, answerType, onAnswerSelected, handleInputField, answerContent } = props;

  return (
    <li className='answerOption'>
      {typeField === 'input' && (
        <>
          <Input
            htmlDirective={{
              ...htmlDirective,
              checked: checkedAnswers.includes(answerType),
              id: answerType,

              value: JSON.stringify({ answer: answerType, genre }),
              onChange: onAnswerSelected,
            }}
            htmlDirectiveLabel={{ ...htmlDirectiveLabel, label: answerContent, htmlFor: answerType }}
          ></Input>
        </>
      )}
      {typeField === 'inputText' && (
        <>
          <InputField
            htmlDirective={{
              ...htmlDirective,
              onChange: handleInputField,
            }}
            htmlDirectiveLabel={{ ...htmlDirectiveLabel, htmlFor: answerType }}
          ></InputField>
        </>
      )}
    </li>
  );
};

export default AnswerOption;
