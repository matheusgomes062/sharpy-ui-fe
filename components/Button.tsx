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
  size?: 'sm' | 'base' | 'lg' | 'xl';
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
  return (
    <button
      type="button"
      role="button"
      data-cy="click"
      className={`btn px-28 h-20 text-white font-semibold text-${size} uppercase ${mode}`}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button;