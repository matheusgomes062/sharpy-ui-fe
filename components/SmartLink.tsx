import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import Icon from '@mdi/react';

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
   * URL or path
   */
  href: string;
  /**
   * Type of Link
   */
  type: 'email' | 'number' | 'tel' | 'text' | 'url' | 'week';
  /**
   * Icon name
   */
  icon?: string;
  /**
   * Has underline
   */
  underline?: boolean;
  // /**
  //  * Add font size as such: text-sm or text-md and others.
  //  */
  // fontSize?: 'xxxs' | 'xxs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | 'mobxxs' | 'mobxs' | 'mobsm' | 'mobbase' | 'mobh4' | 'mobh3' | 'mobh2';
  /**
   * Add font size as such: text-sm or font-md and others
   */
  iconSize?: number;
}

/**
 * Link component for user interaction
 */
const SmartLink: FunctionComponent<LinkProps> = ({ label, icon, underline, iconSize, href }) => {
  return (
    <div className='flex flex-row w-100 items-center'>
      {
        icon && 
        // <span className={`material-icons-outlined absolute text-center text-primary-orange`}>{icon}</span>
        <Icon path={icon} className={`material-icons-outlined text-primary-orange`} size={iconSize}/>
      }
      <a href={href} role="link" data-cy="link"
      className={`text-black hover:text-primary-orange active:text-primary-purple ${icon ? 'ml-3' : ''} ${underline ? 'underline underline-offset-6': ''} max-w-[250px]`}>
        {label}
      </a>
    </div>
  )
}

export default SmartLink;