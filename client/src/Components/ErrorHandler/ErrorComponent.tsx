import React from "react";
import { ErrorMsg } from "./ErrorMessages";

interface ErrorProp {
  errorMessage: Array<ErrorMsg>;
}

const ErrorComponent: React.FC<ErrorProp> = ({ errorMessage }) => {
  return (
    <ul className="error__container">
      {errorMessage.map((err, i) => (
        <li key={i + 1 + "err"} className="error__message">
          {err}
        </li>
      ))}
    </ul>
  );
};

export default ErrorComponent;
