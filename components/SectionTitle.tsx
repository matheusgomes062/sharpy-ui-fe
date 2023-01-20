import Image from 'next/image';
import React, { FunctionComponent } from 'react'

interface SectionTitleProps {
  /**
   * Title for the Section
   */
  title: string;
  /**
   * Description for the title
   */
  description: string;
}

/**
 * Link component for user interaction
 */
const SectionTitle: FunctionComponent<SectionTitleProps> = ({ title, description}) => {
  return (
    <div className='flex flex-col mb-14'>
        <div className='flex flex-row w-100 mb-6'>
            {/* <span className={`material-icons-outlined absolute text-center text-primary-orange text-lg`}>cloud</span> */}
            <img src='/logo.svg' alt='next' className='w-12'/>
            <h2 className='ml-6 font-medium text-mobh2 md:text-2xl'>
                {title}
            </h2>
        </div>
        <span className='text-mobbase md:text-base'>
            {description}
        </span>
    </div>
  )
}

export default SectionTitle;