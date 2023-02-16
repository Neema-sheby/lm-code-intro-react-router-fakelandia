import React from "react";
import { ConfessionFormProperties } from "../../Pages/Confession/Confession.types";

interface TextAreaFieldProp {
  ContainerClassName: string;
  id: string;
  label: string;
  value: string | ConfessionFormProperties["text"];
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaField: React.FC<TextAreaFieldProp> = ({
  ContainerClassName,
  id,
  label,
  value,
  placeholder,
  onChange,
}) => {
  return (
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
  );
};

export default TextareaField;
