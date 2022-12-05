import React, { FunctionComponent } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   * 
   * true = purple | false = orange.
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
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
 * Primary UI component for user interaction
 */
const Button: FunctionComponent<ButtonProps> = ({ 
  primary = false,
  size = 'medium',
  label,
  ...props }) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <button
      type="button"
      className={[styles.button, `${styles.button}--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button;