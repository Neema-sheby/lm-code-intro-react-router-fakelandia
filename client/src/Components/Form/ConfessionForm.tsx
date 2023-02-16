import React, { useState } from "react";
import InputField from "../Input/InputField";
import ConfessionSelect from "../Select/ConfessionSelect";
import { ConfessionFormProperties } from "../../Pages/Confession/Confession.types";
import TextareaField from "../TextArea/TextAreaField";
import Button from "../Button";

const initialConfessionFormDetail = {
  subject: "",
  reason: "",
  text: "",
};

const ConfessionForm = () => {
  const [value, setValue] = useState<ConfessionFormProperties>(
    initialConfessionFormDetail
  );

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
        onChange={(e) => setValue({ ...value, subject: e.target.value })}
      />
      <ConfessionSelect
        setReason={(reason) => setValue({ ...value, reason: reason })}
      />
      <TextareaField
        id="confession-textarea"
        ContainerClassName="=textarea__confession-container"
        label=""
        value={value.text}
        placeholder="textarea"
        onChange={(e) => setValue({ ...value, text: e.target.value })}
      />
      <Button className="button__form" name="Confess" />
    </form>
  );
};

export default ConfessionForm;
