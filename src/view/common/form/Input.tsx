import { FieldValues, UseFormRegister, Path } from 'react-hook-form';

interface ValidationRules {
  required?: boolean;
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
}

interface HtmlDirective<T extends FieldValues> {
  autoComplete?: string;
  id?: string;
  name?: Path<T>;
  className?: string;
  type?: string;
  min?: string | number;
  max?: string | number;
  value?: string | number;
  disable?: boolean;
  htmlFor?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface HtmlDirectiveLabel {
  label?: string;
  className?: string;
  htmlFor?: string;
}

interface Props<T extends FieldValues> {
  register?: UseFormRegister<T>;
  validation?: ValidationRules;
  htmlDirective: HtmlDirective<T>;
  htmlDirectiveLabel?: HtmlDirectiveLabel;
}

export const Input = <T extends FieldValues>({ register, validation, htmlDirective, htmlDirectiveLabel }: Props<T>) => {
  const { name } = htmlDirective;
  const { label, htmlFor, className } = htmlDirectiveLabel || {};

  return (
    <>
      {register && name ? (
        <>
          <input {...htmlDirective} {...register(name, { ...validation })}></input>
        </>
      ) : (
        <input {...htmlDirective}></input>
      )}
      <label className={className} htmlFor={htmlFor}>
        {label}
      </label>
    </>
  );
};
