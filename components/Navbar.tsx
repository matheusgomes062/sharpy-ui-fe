import React, { FunctionComponent } from 'react'
import Icon from '@mdi/react';
import { mdiAccountCircleOutline, mdiMenu } from '@mdi/js';
import DropDownHeader from './DropdownHeader';

/**
 * Link component for user interaction
 */
const Navbar: FunctionComponent = () => {
  return (    
    <nav className="px-2 bg-white">
      <div className="flex flex-wrap items-center justify-between p-5">
        <div className='flex flex-row'>
          <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center mr-4 text-sm md:hidden text-primary-orange" aria-controls="navbar-dropdown" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <Icon path={mdiMenu} className={`material-icons-outlined text-primary-orange`} size={2}/>
          </button>
          <a href="#" className="flex items-center">
              <img src="./sharpy-logo-wide.svg" className="h-10 md:h-8" alt="Sharpy Logo" />
          </a>
        </div>
        
        <div className="items-center justify-between hidden w-full md:flex md:w-auto">          
          <DropDownHeader />
        
          <Icon path={mdiAccountCircleOutline} className={`material-icons-outlined text-primary-orange cursor-pointer ml-10`} size={1.5}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;