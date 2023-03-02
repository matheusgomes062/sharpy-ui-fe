import React, { FunctionComponent } from "react";
import Icon from "@mdi/react";
import ISmartLinkProps from "types/SmartLinkProps";
import Link from "next/link";

/**
 * Link component for user interaction
 */
const SmartLink: FunctionComponent<ISmartLinkProps> = ({
  label,
  icon,
  underline,
  mode,
  href,
}) => {
  const textColor =  mode === "dark" ? "text-black" : "text-white"
  return (
    <div className="flex flex-row items-center w-100">
      {icon && (
        // <span className={`material-icons-outlined absolute text-center text-primary-orange`}>{icon}</span>
        <Icon
          path={icon}
          className={`material-icons-outlined text-primary-orange md:w-20 md:h-20 w-9 h-9`}
        />
      )}
      <Link
        href={href}
        role="link"
        data-cy="link"
        className={`md:text-[20px] sm:text-[15px] hover:text-primary-orange active:text-primary-purple ${
          icon ? "ml-3" : ""
          } ${underline ? "underline underline-offset-6" : ""} max-w-[250px]
          ${textColor}
        `}
      >
        {label}
      </Link>
    </div>
  );
};

export default SmartLink;
