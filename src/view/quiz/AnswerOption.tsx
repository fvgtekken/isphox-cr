import { Input, InputField } from '../common/form';
import '../../styles/input.css';

const AnswerOption = (props: any) => {
  const { typeField, htmlDirective, htmlDirectiveLabel, genre, checkedAnswers, answerType, handleAnswerSelected, handleInputField, answerContent } = props;

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
              onChange: handleAnswerSelected,
            }}
            htmlDirectiveLabel={{ ...htmlDirectiveLabel, label: answerContent, htmlFor: answerType }}
          ></Input>
        </>
      )}
      {typeField === 'inputText' && (
        <>
          <div className={'center-container'}>
            <InputField
              htmlDirective={{
                ...htmlDirective,
                onChange: handleInputField,
              }}
              htmlDirectiveLabel={{ ...htmlDirectiveLabel, htmlFor: answerType }}
            ></InputField>
          </div>
        </>
      )}
    </li>
  );
};

export default AnswerOption;
