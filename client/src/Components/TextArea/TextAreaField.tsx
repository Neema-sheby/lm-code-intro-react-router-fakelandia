import React from "react";
import ErrorComponent from "../ErrorHandler/ErrorComponent";
import { ErrorMsg } from "../ErrorHandler/ErrorMessages";

interface TextAreaFieldProp {
  ContainerClassName: string;
  id: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onValidation: Array<ErrorMsg>;
}

const TextareaField: React.FC<TextAreaFieldProp> = ({
  ContainerClassName,
  id,
  label,
  value,
  placeholder,
  onChange,
  onValidation,
}) => {
  return (
    <>
      <div className={ContainerClassName}>
        <label htmlFor={id} className="form__label">
          {label}
        </label>
        <textarea
          id={id}
          className="form__textarea"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        ></textarea>
      </div>
      <ErrorComponent errorMessage={onValidation} />
    </>
  );
};

export default TextareaField;
