import React, { FunctionComponent } from 'react'
import Icon from '@mdi/react';
import ISmartLinkProps from 'types/SmartLinkProps';

/**
 * Link component for user interaction
 */
const SmartLink: FunctionComponent<ISmartLinkProps> = ({ label, icon, underline, iconSize, href }) => {
  return (
    <div className='flex flex-row items-center w-100'>
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