import React, { useState } from "react";
import InputField from "../../Input/InputField";
import ConfessionSelect from "../../Select/ConfessionSelect";
import {
  ConfessionFormDataType,
  ConfessionProp,
} from "./ConfessionFormDataType.types";
import TextareaField from "../../TextArea/TextAreaField";
import Button from "../../Button/ButtonForm";
import { ErrorLogs, ErrorMessagesAPI } from "../../ErrorHandler/ErrorMessages";
import {
  validateSubject,
  validateReasonSelection,
  validateTextArea,
} from "../../ErrorHandler/ErrorValidation";
import { postData } from "../../GetPostData/Post";
import { defaultConfessionFormData } from "./ConfessionFormDataType.types";
import {
  MisdemeanourKind,
  SelfConfessionMisdemeanour,
  defaultSelfConfessionMisdemeanour,
} from "../../../Pages/Misdemeanour/Misdemeanours.types";

import { MISDEMEANOUR_NUM } from "../../../Configuration/Config";

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
        const newMisdamenourData: SelfConfessionMisdemeanour = {
          misdemeanourInfo: {
            citizenId: Math.floor(
              MISDEMEANOUR_NUM + Math.random() * 37 * (Math.random() * 967)
            ),
            misdemeanour: value.reason,
            date: new Date().toLocaleDateString("en-US"),
          },
          selfConfession: true,
          selfConfessionDetails: value.details,
        };
        setSubmitted(true);
        setNewMisdemeanourOfMisdemeanant(newMisdamenourData);
      }
    } else if (postResponse && postResponse.success === false) {
      setPostResponseError(ErrorMessagesAPI.errUnsuccessful);
    } else {
      setSubmitted(false);
      setNewMisdemeanourOfMisdemeanant(defaultSelfConfessionMisdemeanour);
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
    <div className="form__container">
      <form className="form" aria-label="form-confession" onSubmit={onSubmit}>
        <InputField
          id="confession-subject"
          ContainerClassName="form__input-container"
          label="subject :"
          value={value.subject}
          placeholder="Enter your subject"
          onChange={(e) => {
            setSubmitted(false);
            setPostResponseError("");
            setError({ ...error, subject: validateSubject(e.target.value) });
            setValue({ ...value, subject: e.target.value });
          }}
          onValidation={error.subject}
        />
        <ConfessionSelect
          id="confession-reason"
          label="Reason : "
          value={value.reason}
          placeholder="Enter reason for confession"
          onClick={() => {
            setPostResponseError("");
            setError({
              ...error,
              reason: validateReasonSelection(value.reason),
            });
          }}
          onChange={(e) => {
            setPostResponseError("");
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
          ContainerClassName="=form__textarea-container"
          label=""
          value={value.details}
          placeholder="Enter your confession details"
          onChange={(e) => {
            setSubmitted(false);
            setError({ ...error, details: validateTextArea(e.target.value) });
            setValue({ ...value, details: e.target.value });
          }}
          onValidation={error.details}
        />
        <Button
          className="button--form"
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
        {submitted && (
          <div role="alert" className="form__sendMsg">
            ✅ Message Send !
          </div>
        )}
        {postResponseError && (
          <div role="alert" className="form__err-server">
            {postResponseError}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfessionForm;
