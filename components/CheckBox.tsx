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

  const borderStyleOnChange = isSelected ? "border-primary-purple" : "border-primary-purple outline-primary-purple outline";
  const spanStyleOnChange = isSelected ? "opacity-0" : "opacity-100";

  return (
    <label className={
      `flex cursor-pointer items-center h-8 w-8 border-2 
      ${borderStyleOnChange} 
      hover:border-primary-orange hover:outline-primary-orange hover:outline`
    }>
      <input
        type="checkbox"
        role="checkbox"
        data-cy="input"
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
