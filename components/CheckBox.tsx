import React, { FunctionComponent, useState } from 'react'
import '@material-design-icons/font';

interface CheckBoxProps {
    /**
   * Value of the checkbox
   */
  value: string;
}

/**
 * CheckBox component for user interaction
 */
const CheckBox: FunctionComponent<CheckBoxProps> = ({ value, ...props }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleChange = () => {
    setIsSelected(!isSelected);
  };

  const borderStyleOnChange = isSelected ? "border-primary-purple outline-primary-purple outline" : "border-primary-purple";
  const spanStyleOnChange = isSelected ? "opacity-100" : "opacity-0";

  return (
    <label
      data-cy="checkbox"
      className={
      `flex cursor-pointer items-center h-8 w-8 border-2 
      ${borderStyleOnChange} 
      hover:border-primary-orange hover:outline-primary-orange hover:outline`
    }>
      <input
        type="checkbox"
        role="checkbox"
        className="cursor-pointer appearance-none"
        onChange={handleChange}
        value={value}
        {...props}
      />
      <span className={`material-icons-outlined absolute text-center ${spanStyleOnChange}`}>check</span>
    </label>
  )
}

export default CheckBox;
