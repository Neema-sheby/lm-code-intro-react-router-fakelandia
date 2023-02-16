import React from "react";
import { ErrorMsg } from "./ErrorMessages";

interface ErrorProp {
  errorMessage: Array<ErrorMsg>;
}

const ErrorComponent: React.FC<ErrorProp> = ({ errorMessage }) => {
  return <div className="error-message">{errorMessage}</div>;
};

export default ErrorComponent;
