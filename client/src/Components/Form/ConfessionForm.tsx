import React, { useState } from "react";
import InputField from "../Input/InputField";
import ConfessionSelect from "../Select/ConfessionSelect";
import { ConfessionFormProperties } from "../../Pages/Confession/Confession.types";
import TextareaField from "../TextArea/TextAreaField";
import Button from "../Button";
import { errMsgReason, ErrorLogs } from "../ErrorHandler/ErrorMessages";
import {
  validateSubject,
  validateReasonSelection,
  validateText,
} from "../ErrorHandler/ErrorValidation";

const initialConfessionFormDetail = {
  subject: "",
  reason: "",
  text: "",
};

const initialErrorLog: ErrorLogs = {
  subject: [],
  reason: [],
  text: [],
};

const ConfessionForm = () => {
  const [value, setValue] = useState<ConfessionFormProperties>(
    initialConfessionFormDetail
  );
  const [error, setError] = useState<ErrorLogs>(initialErrorLog);

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <InputField
        id="confession-subject"
        ContainerClassName="input__confession-container"
        label="subject"
        value={value.subject}
        placeholder="Input"
        onChange={(e) => {
          setError({ ...error, subject: validateSubject(e.target.value) });
          setValue({ ...value, subject: e.target.value });
        }}
        onValidation={error.subject}
      />
      <ConfessionSelect
        setReason={(reason) => {
          setError({
            ...error,
            reason: validateReasonSelection(reason),
          });
          setValue({ ...value, reason: reason });
        }}
        onValidation={error.reason}
      />
      <TextareaField
        id="confession-textarea"
        ContainerClassName="=textarea__confession-container"
        label=""
        value={value.text}
        placeholder="textarea"
        onChange={(e) => {
          setError({ ...error, text: validateText(e.target.value) });
          setValue({ ...value, text: e.target.value });
        }}
        onValidation={error.text}
      />
      <Button
        className="button__form"
        name="Confess"
        disabled={
          error.subject.length === 0 &&
          error.reason.length === 0 &&
          error.text.length === 0
            ? false
            : true
        }
      />
    </form>
  );
};

export default ConfessionForm;
