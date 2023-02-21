import React from "react";
import Option from "../Option/Option";
import ErrorComponent from "../ErrorHandler/ErrorComponent";
import { ErrorMsg } from "../ErrorHandler/ErrorMessages";
import {
  MISDEMEANOURS,
  MisdemeanourKind,
} from "../../Pages/Misdemeanour/Misdemeanours.types";

interface ConfessionSelectProp {
  id: string;
  value: string | MisdemeanourKind | "I just want to talk";
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onClick: () => void;
  onValidation: Array<ErrorMsg>;
}

const ConfessionSelect: React.FC<ConfessionSelectProp> = ({
  id,
  value,
  label,
  onChange,
  placeholder,
  onClick,
  onValidation,
}) => {
  return (
    <>
      <div className="form__select-container">
        <label htmlFor={id} className="form__label">
          {label}
        </label>
        <select
          id={id}
          className="form__select"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onClick={onClick}
        >
          {
            <>
              <Option value="" label="Select reason for confession" />
              {MISDEMEANOURS.map((misdemeanour, i) => (
                <Option
                  key={i + misdemeanour}
                  value={misdemeanour}
                  label={misdemeanour}
                />
              ))}
              <Option value="just-talk" label="I just want to talk" />
            </>
          }
        </select>
      </div>
      <ErrorComponent errorMessage={onValidation} />
    </>
  );
};

export default ConfessionSelect;
