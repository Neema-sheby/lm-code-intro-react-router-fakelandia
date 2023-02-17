import React, { useContext, useState } from "react";
import Option from "../Option/Option";
import ErrorComponent from "../ErrorHandler/ErrorComponent";
import { ErrorMsg } from "../ErrorHandler/ErrorMessages";
import {
  MISDEMEANOURS,
  MisdemeanourKind,
} from "../../Pages/Misdemeanour/Misdemeanours.types";
import { MisdemeanourEmoji } from "../../Pages/Misdemeanour/MisdemeanourEmoji";

const isMisdemeanourKind = (data: string): data is MisdemeanourKind => {
  return (data as MisdemeanourKind) !== undefined;
};

interface ConfessionSelectProp {
  setReason: (T: string | MisdemeanourKind | "I just want to talk") => void;
  onValidation: Array<ErrorMsg>;
}

const ConfessionSelect: React.FC<ConfessionSelectProp> = ({
  setReason,
  onValidation,
}) => {
  const [value, setValue] = useState<
    string | MisdemeanourKind | "I just want to talk"
  >("");

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);

    if (isMisdemeanourKind(e.target.value)) setReason(e.target.value);
    else if (isMisdemeanourKind("")) setReason(e.target.value);
    else setReason("I just want to talk");
  };

  return (
    <>
      <div className="select__dropdown-container">
        <select className="select__dropdown" value={value} onChange={onChange}>
          {
            <>
              <Option value="" label="Select" />
              {MISDEMEANOURS.map((misdemeanour, i) => (
                <Option
                  key={i + misdemeanour}
                  value={misdemeanour}
                  label={misdemeanour}
                />
              ))}
              <Option value="I just want to talk" label="I just want to talk" />
            </>
          }
        </select>
      </div>
      <ErrorComponent errorMessage={onValidation} />
    </>
  );
};

export default ConfessionSelect;
