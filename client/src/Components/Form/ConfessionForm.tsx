import React, { useState } from "react";
import InputField from "../Input/InputField";
import ConfessionSelect from "../Select/ConfessionSelect";
import {
  ConfessionFormDataType,
  ConfessionProp,
} from "../../Pages/Confession/Confession.types";
import {
  PostResponseDataType,
  defaultPostData,
} from "../GetPostData/DefaultPostData";
import TextareaField from "../TextArea/TextAreaField";
import Button from "../Button/ButtonForm";
import { ErrorLogs } from "../ErrorHandler/ErrorMessages";
import {
  validateSubject,
  validateReasonSelection,
  validateText,
} from "../ErrorHandler/ErrorValidation";
import { postData } from "../GetPostData/Post";

const defaultConfessionFormData = {
  subject: "",
  reason: "",
  details: "",
};

const defaultErrorLog: ErrorLogs = {
  subject: [],
  reason: [],
  details: [],
};

const ConfessionForm: React.FC<ConfessionProp> = ({ setPostData }) => {
  const [value, setValue] = useState<ConfessionFormDataType>(
    defaultConfessionFormData
  );
  const [error, setError] = useState<ErrorLogs>(defaultErrorLog);
  const [postResponseError, setPostResponseError] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const getPostData = async () => {
    setPostData(defaultPostData);
    const postResponse = await postData(
      "http://localhost:8080/api/confess",
      value,
      setPostResponseError
    );

    if (postResponse) {
      setPostData(postResponse);
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
            setError({ ...error, details: validateText(e.target.value) });
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
      <div className="form__submitted-msg">{submitted && "Message Send"}</div>
    </>
  );
};

export default ConfessionForm;
