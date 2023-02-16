import React from "react";

interface ButtonProp {
  name: string;
  className: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProp> = ({ name, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
