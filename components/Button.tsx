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
  primary,
  size,
  label,
  ...props }) => {
  const mode = primary ? styles['btn--primary'] : styles['btn--secondary'];
  return (
    <button
      type="button"
      role="button"
      data-cy="click"
      className={[styles.btn, styles[`btn--${size}`], mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button;