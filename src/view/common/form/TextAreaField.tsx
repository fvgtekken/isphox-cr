import { FieldValues, UseFormRegister, Path } from 'react-hook-form';

interface ValidationRules {
  required?: boolean;
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
}

interface HtmlDirective<T extends FieldValues> {
  autoComplete?: string;
  label?: string;
  name?: Path<T>;
  value?: string | number;
}

interface Props<T extends FieldValues> {
  register?: UseFormRegister<T>;
  validation?: ValidationRules;
  htmlDirective: HtmlDirective<T>;
}

export const TextAreaField = <T extends FieldValues>({ register, validation, htmlDirective }: Props<T>) => {
  const { label, name } = htmlDirective;

  return (
    <div className='field'>
      <label>{label}</label>
      {register && name ? <textarea {...htmlDirective} {...register(name, { ...validation })} /> : <textarea {...htmlDirective} />}
    </div>
  );
};
