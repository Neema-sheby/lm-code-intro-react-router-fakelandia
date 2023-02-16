import React from "react";
import { Error } from "./ErrorMessages";

interface ErrorProp {
  error: Error;
}

const Error: React.FC<ErrorProp> = ({ error }) => {
  return <div className="Error">{error}</div>;
};

export default Error;
