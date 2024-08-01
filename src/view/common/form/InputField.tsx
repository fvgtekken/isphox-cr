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
  type?: string;
  min?: string | number;
  max?: string | number;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Props<T extends FieldValues> {
  register?: UseFormRegister<T>;
  validation?: ValidationRules;
  htmlDirective: HtmlDirective<T>;
}

export const InputField = <T extends FieldValues>({ register, validation, htmlDirective }: Props<T>) => {
  const { label, name } = htmlDirective;

  return (
    <div className='field'>
      <label>{label}</label>
      {register && name ? <input {...htmlDirective} {...register(name, { ...validation })}></input> : <input {...htmlDirective}></input>}
    </div>
  );
};
