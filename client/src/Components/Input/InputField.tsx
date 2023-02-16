import React from "react";
import ErrorMessage from "../ErrorHandler/Error";
import { ConfessionFormProperties } from "../../Pages/Confession/Confession.types";

interface InputFieldProp {
  ContainerClassName: string;
  id: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValidation: Error;
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
        <label htmlFor={id} className="input__label">
          {label}
        </label>
        <input
          id={id}
          className="input"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
      <ErrorMessage error={onValidation} />
    </>
  );
};

export default InputField;
