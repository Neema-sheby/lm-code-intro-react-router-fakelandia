import React from "react";

interface ButtonProp {
  name: string;
  className: string;
  onClick?: () => void;
  disabled: boolean;
}

const Button: React.FC<ButtonProp> = ({
  name,
  className,
  onClick,
  disabled,
}) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {name}
    </button>
  );
};

export default Button;
