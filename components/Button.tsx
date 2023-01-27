import React, { FunctionComponent } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  /**
   * Optional css setter
   * 
   * true = purple | false = orange.
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size: 'sm' | 'base' | 'lg' | 'xl';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Button component for user interaction
 */
const Button: FunctionComponent<ButtonProps> = ({
  primary,
  size,
  label,
  ...props }) => {
  
  const mode = primary ? "bg-primary-purple hover:bg-primary-orange" : "bg-primary-orange hover:bg-primary-purple";

  const buttonPadding = {
    "sm": "px-10",
    "base": "px-24",
    "lg": "px-36",
    "xl":  "px-48",
  }

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
}

export default Button;