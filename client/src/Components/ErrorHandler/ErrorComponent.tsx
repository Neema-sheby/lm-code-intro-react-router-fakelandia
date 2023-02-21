import React from "react";
import { ErrorMsg } from "./ErrorMessages";

interface ErrorProp {
  errorMessage: Array<ErrorMsg>;
}

const ErrorComponent: React.FC<ErrorProp> = ({ errorMessage }) => {
  return (
    <ul className="form__error">
      {errorMessage.map((err, i) => (
        <li key={i + 1 + "err"} className="form__error-msg">
          {err}
        </li>
      ))}
    </ul>
  );
};

export default ErrorComponent;
