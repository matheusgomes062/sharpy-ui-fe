import React, { FunctionComponent, useState } from "react";
import Icon from "@mdi/react";
import { mdiCheck } from "@mdi/js";
import ICheckBoxProps from "types/CheckBoxProps";

/**
 * CheckBox component for user interaction
 */
const CheckBox: FunctionComponent<ICheckBoxProps> = ({ value, onChange, name, ...props }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(e.target.checked);
    onChange && onChange(e);
  };

  const borderStyleOnChange = isSelected
    ? "border-primary-purple outline-primary-purple outline"
    : "border-primary-purple";
  const spanStyleOnChange = isSelected ? "opacity-100" : "opacity-0";

  return (
    <label
      data-cy="checkbox"
      className={`flex cursor-pointer items-center h-8 w-8 border-2 
      ${borderStyleOnChange} 
      hover:border-primary-orange hover:outline-primary-orange hover:outline`}
    >
      <input
        type="checkbox"
        role="checkbox"
        className="appearance-none cursor-pointer"
        onChange={handleChange}
        name={name}
        value={value}
        {...props}
      />
      <Icon
        path={mdiCheck}
        className={`${spanStyleOnChange} mx-auto`}
        size={1}
      />
    </label>
  );
};

export default CheckBox;
