import React from "react";
import ErrorComponent from "../ErrorHandler/ErrorComponent";
import { ErrorMsg } from "../ErrorHandler/ErrorMessages";

interface InputFieldProp {
  ContainerClassName: string;
  id: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValidation: Array<ErrorMsg>;
}

const InputField: React.FC<InputFieldProp> = ({
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
        <input
          id={id}
          className="form__input"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
      <ErrorComponent errorMessage={onValidation} />
    </>
  );
};

export default InputField;
