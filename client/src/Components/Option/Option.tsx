import React from "react";

interface OptionProp {
  value: string;
  label: React.ReactNode;
}

const Option: React.FC<OptionProp> = ({ value, label }) => {
  return (
    <option value={value} className="form__option">
      {label}
    </option>
  );
};

export default Option;
