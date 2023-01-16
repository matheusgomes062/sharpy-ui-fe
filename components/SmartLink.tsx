import React, { FunctionComponent } from 'react'
import Link from 'next/link'

interface LinkProps {
  /**
   * Link label
   */
  label: string;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Type of Link
   */
  type: string;
  /**
   * Icon name
   */
  icon: string;
  /**
   * Has underline
   */
  underline?: boolean;
}

/**
 * Link component for user interaction
 */
const SmartLink: FunctionComponent<LinkProps> = ({ label, type, icon, underline, ...props }) => {
  return (
    <div className='flex flex-row w-100'>
      {
        icon && 
        <span className={`material-icons-outlined absolute text-center text-primary-orange`}>{icon}</span>
      }
      <Link href="/" role="link" data-cy="link" {...props}
      className={`text-black hover:text-primary-orange active:text-primary-purple ${icon ? 'ml-9' : ''} ${underline ? 'underline underline-offset-6': ''}`}>
        {label}
      </Link>
    </div>
  )
}

export default SmartLink;