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
}

/**
 * Link component for user interaction
 */
const SmartLink: FunctionComponent<LinkProps> = ({ label, ...props }) => {
  return (
    <Link href="/" role="link" data-cy="link" {...props}
    className="underline underline-offset-6 text-black hover:text-primary-orange active:text-primary-purple ">
      {label}
    </Link>
  )
}

export default SmartLink;