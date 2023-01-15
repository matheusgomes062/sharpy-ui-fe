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
    <div className='flex flex-col'>
        <div className='flex flex-row w-100'>
            <span className={`material-icons-outlined absolute text-center text-primary-orange`}>cloud</span>
            <h1 className='ml-10'>
                {title}
            </h1>
        </div>
        <span>
            {description}
        </span>
    </div>
  )
}

export default SectionTitle;