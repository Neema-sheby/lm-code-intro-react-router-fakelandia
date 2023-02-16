import React from "react";

interface SelectProp {
  classNameContainer: string;
  className: string;
  value: string;
  options: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProp> = ({
  classNameContainer,
  className,
  value,
  options,
  onChange,
}) => {
  return (
    <div className={classNameContainer}>
      <select className={className} value={value} onChange={onChange}>
        {options}
      </select>
    </div>
  );
};

export default Select;
