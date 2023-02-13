import React, { FunctionComponent } from 'react'
import Icon from '@mdi/react';
import { mdiAccountCircleOutline, mdiMenu } from '@mdi/js';
import DropDownHeader from './DropdownHeader';

import { useState } from "react";

/**
 * Link component for user interaction
 */
const Navbar: FunctionComponent = () => {
  const [expand, setExpand] = useState(false);

  return (    
    <nav className="bg-white border-b-[5px] border-primary-orange">
      <div className="flex flex-wrap items-center justify-between p-5">
        <div className='flex flex-row'>
          <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center mr-4 text-sm md:hidden text-primary-orange" aria-controls="navbar-dropdown" aria-expanded="false" 
          onClick={() => setExpand((prev) => !prev)}>
            <span className="sr-only">Open main menu</span>
            <Icon path={mdiMenu} className={`material-icons-outlined text-primary-orange`} size={1}/>
          </button>
          <a href="#" className="flex items-center">
              <img src="./sharpy-logo-wide.svg" className="h-7 md:h-10  md:h-8 " alt="Sharpy Logo" />
          </a>
        </div>
        
        <div className={`md:items-center justify-between w-full ${ expand ? 'flex flex-col items-start h-full absolute top-24' : 'hidden'} md:flex md:w-auto`}>          
          <DropDownHeader />
        
          <Icon path={mdiAccountCircleOutline} className={`material-icons-outlined text-primary-orange cursor-pointer ml-10`} size={1.5}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;