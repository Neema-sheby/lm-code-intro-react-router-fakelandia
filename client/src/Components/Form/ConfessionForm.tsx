import React, { useState } from "react";
import InputField from "../Input/InputField";
import ConfessionSelect from "../Select/ConfessionSelect";
import { ConfessionFormDataType } from "../../Pages/Confession/Confession.types";
import TextareaField from "../TextArea/TextAreaField";
import Button from "../Button";
import { errMsgReason, ErrorLogs } from "../ErrorHandler/ErrorMessages";
import {
  validateSubject,
  validateReasonSelection,
  validateText,
} from "../ErrorHandler/ErrorValidation";

const defaultConfessionFormData = {
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
  const [value, setValue] = useState<ConfessionFormDataType>(
    defaultConfessionFormData
  );
  const [error, setError] = useState<ErrorLogs>(initialErrorLog);
  const [submitted, setsubmitted] = useState<boolean>(false);

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setsubmitted(true);

    //reset inputfield, selectfield and textarea
    setValue(defaultConfessionFormData);
  };

  return (
    <>
      <form className="form" aria-label="form-confession" onSubmit={onSubmit}>
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
          value={value.reason}
          onChange={(e) => {
            setError({
              ...error,
              reason: validateReasonSelection(e.target.value),
            });
            setValue({ ...value, reason: e.target.value });
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
      <div className="form__submitted-msg">{submitted && "Message Send"}</div>
    </>
  );
};

export default ConfessionForm;
