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
}

/**
 * Link component for user interaction
 */
const SmartLink: FunctionComponent<LinkProps> = ({ label, type, icon, ...props }) => {
  return (
    <div className='d-flex flex-row w-100'>
      {
        icon && 
        <span className={`material-icons-outlined absolute text-center text-primary-orange`}>{icon}</span>
      }
      <Link href="/" role="link" data-cy="link" {...props}
      className={`underline underline-offset-6 text-black hover:text-primary-orange active:text-primary-purple ${icon ? 'ml-9' : ''}`}>
        {label}
      </Link>
    </div>
  )
}

export default SmartLink;