import React, { FunctionComponent } from "react";
import IButtonProps from "types/ButtonProps";

/**
 * Button component for user interaction
 */
const Button: FunctionComponent<IButtonProps> = ({
  primary,
  size,
  label,
  ...props
}) => {
  const mode = primary
    ? "bg-primary-purple hover:bg-primary-orange"
    : "bg-primary-orange hover:bg-primary-purple";

  const buttonSizeConfig = {
    xxs: "px-2 h-[42px]",
    sm: "px-10 h-[42px]",
    base: "px-24 h-[80px]",
    lg: "px-36 h-[80px]",
    xl: "px-48 h-[80px]",
  };

  return (
    <button
      type="button"
      role="button"
      data-cy="click"
      className={`btn text-white font-semibold text-${size} uppercase ${mode} ${buttonSizeConfig[size]}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
