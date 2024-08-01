import { FieldErrors } from 'react-hook-form';

interface ErrorsField {
  name: string;
  type: string;
  message: string;
}

interface Props {
  errors: FieldErrors;
  errorsField: ErrorsField[];
}

export const ErrorsField = ({ errors, errorsField }: Props) => {
  return <div className='errorfield'>{errorsField && errorsField.map((ele) => <div key={ele.type}>{errors[ele.name]?.type === ele.type && <p>{ele.message}</p>}</div>)}</div>;
};
