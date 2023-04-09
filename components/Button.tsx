import React, { FunctionComponent } from "react";
import IButtonProps from "types/ButtonProps";

/**
 * Button component for user interaction
 */
const Button: FunctionComponent<IButtonProps> = ({
  showPrimaryButton,
  label,
  ...props
}) => {
  const mode = showPrimaryButton
    ? "bg-primary-purple hover:bg-primary-orange"
    : "bg-primary-orange hover:bg-primary-purple";

  return (
    <button
      type="button"
      role="button"
      data-cy="click"
      className={`btn text-white uppercase ${mode} px-5 h-[42px] text-mobbase font-medium md:px-10 md:h-[70px] md:text-sm md:font-semibold`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
