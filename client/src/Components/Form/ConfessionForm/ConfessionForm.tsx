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
import {
  Misdemeanour,
  MisdemeanourKind,
  defaultMisdemeanour,
} from "../../../Pages/Misdemeanour/Misdemeanours.types";

import { getNumber } from "../../ErrorHandler/ErrorValidation";

const defaultErrorLog: ErrorLogs = {
  subject: [],
  reason: [],
  details: [],
};

const ConfessionForm: React.FC<ConfessionProp> = ({
  setNewMisdemeanourOfMisdemeanant,
}) => {
  const [value, setValue] = useState<ConfessionFormDataType>(
    defaultConfessionFormData
  );
  const [error, setError] = useState<ErrorLogs>(defaultErrorLog);
  const [postResponseError, setPostResponseError] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  //typeguard
  const isMisdemeanour = (value: string): value is MisdemeanourKind => {
    return (
      value === "rudeness" ||
      value === "vegetables" ||
      value === "lift" ||
      value === "united"
    );
  };

  const getPostData = async () => {
    const postResponse = await postData(
      "http://localhost:8080/api/confess",
      value,
      setPostResponseError
    );

    if (
      postResponse &&
      postResponse.success === true &&
      postResponse.justTalked === false
    ) {
      if (isMisdemeanour(value.reason)) {
        const newMisdamenourData: Misdemeanour = {
          citizenId: getNumber(value.details),
          misdemeanour: value.reason,
          date: new Date().toLocaleDateString("en-US"),
        };
        setSubmitted(true);
        setNewMisdemeanourOfMisdemeanant(newMisdamenourData);
      }
    } else {
      setSubmitted(false);
      setNewMisdemeanourOfMisdemeanant(defaultMisdemeanour);
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
