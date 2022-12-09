import React, { FunctionComponent, useState } from 'react'

interface InputProps {
  /**
   * Input Placeholder
   */
  placeholder: string;
  /**
   * Input type
   */
  type: string;
  /**
   * Click handler
   */
  onChange?: () => void;
}

/**
 * Input component for user interaction
 */
const Input: FunctionComponent<InputProps> = ({ placeholder, type, ...props }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setValue(event.target.value);
  };

  return (
    <input
      type={type}
      role="input"
      data-cy="input"
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      className="border-solid border-2 border-primary-purple p-2 focus:border-primary-orange focus:outline-primary-orange focus:outline"
    />
  )
}

export default Input;
