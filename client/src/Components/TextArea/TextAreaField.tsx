import React from "react";
import { ConfessionFormProperties } from "../../Pages/Confession/Confession.types";
import ErrorComponent from "../ErrorHandler/ErrorComponent";
import { ErrorMsg } from "../ErrorHandler/ErrorMessages";

interface TextAreaFieldProp {
  ContainerClassName: string;
  id: string;
  label: string;
  value: string | ConfessionFormProperties["text"];
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
        <label htmlFor={id} className="textarea__label">
          {label}
        </label>
        <textarea
          id={id}
          className="textarea"
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
