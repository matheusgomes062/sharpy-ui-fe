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

  const buttonPadding = {
    sm: "px-10",
    base: "px-24",
    lg: "px-36",
    xl: "px-48",
  };

  return (
    <button
      type="button"
      role="button"
      data-cy="click"
      className={`btn h-20 text-white font-semibold text-${size} uppercase ${mode} ${buttonPadding[size]}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
