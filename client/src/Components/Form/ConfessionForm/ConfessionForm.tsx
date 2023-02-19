import React, { useState } from "react";
import InputField from "../../Input/InputField";
import ConfessionSelect from "../../Select/ConfessionSelect";
import {
  ConfessionFormDataType,
  ConfessionProp,
} from "./ConfessionFormDataType.types";
import TextareaField from "../../TextArea/TextAreaField";
import Button from "../../Button/ButtonForm";
import { ErrorLogs } from "../../ErrorHandler/ErrorMessages";
import {
  validateSubject,
  validateReasonSelection,
  validateTextArea,
} from "../../ErrorHandler/ErrorValidation";
import { postData } from "../../GetPostData/Post";
import { defaultConfessionFormData } from "./ConfessionFormDataType.types";

const defaultErrorLog: ErrorLogs = {
  subject: [],
  reason: [],
  details: [],
};

const ConfessionForm: React.FC<ConfessionProp> = ({
  addNewMisdemeanourData,
}) => {
  const [value, setValue] = useState<ConfessionFormDataType>(
    defaultConfessionFormData
  );
  const [error, setError] = useState<ErrorLogs>(defaultErrorLog);
  const [postResponseError, setPostResponseError] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const getPostData = async () => {
    addNewMisdemeanourData(defaultConfessionFormData);
    const postResponse = await postData(
      "http://localhost:8080/api/confess",
      value,
      setPostResponseError
    );

    if (postResponse) {
      addNewMisdemeanourData(value);
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    //Post data
    getPostData();

    //clear Error messages
    setError(defaultErrorLog);

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
            setSubmitted(false);
            setError({ ...error, subject: validateSubject(e.target.value) });
            setValue({ ...value, subject: e.target.value });
          }}
          onValidation={error.subject}
        />
        <ConfessionSelect
          value={value.reason}
          onClick={() =>
            setError({
              ...error,
              reason: validateReasonSelection(value.reason),
            })
          }
          onChange={(e) => {
            setSubmitted(false);
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
          value={value.details}
          placeholder="textarea"
          onChange={(e) => {
            setSubmitted(false);
            setError({ ...error, details: validateTextArea(e.target.value) });
            setValue({ ...value, details: e.target.value });
          }}
          onValidation={error.details}
        />
        <Button
          className="button__form"
          name="Confess"
          disabled={
            value.subject &&
            value.reason &&
            value.details &&
            error.subject.length === 0 &&
            error.reason.length === 0 &&
            error.details.length === 0
              ? false
              : true
          }
        />
      </form>
      <div className="form__submitted-msg">
        {submitted && <div>Message Send</div>}
        {postResponseError && <div>{postResponseError}</div>}
      </div>
    </>
  );
};

export default ConfessionForm;
