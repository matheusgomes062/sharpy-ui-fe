import React, { FunctionComponent } from 'react'
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import DropdownHeader from './DropdownHeader';
import Link from 'next/link';
import { useState } from "react";
import Image from 'next/image';

/**
 * Link component for user interaction
 */
const Navbar: FunctionComponent = () => {
  const [expand, setExpand] = useState(false);

  return (    
    <nav className="bg-white border-b-[5px] border-primary-orange" data-cy="navbar">
      <div className="flex flex-wrap items-center justify-between p-5">
        <div className='flex flex-row'>
          <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center mr-4 text-sm md:hidden text-primary-orange" aria-controls="navbar-dropdown" aria-expanded="false" 
          onClick={() => setExpand((prev) => !prev)}>
            <span className="sr-only">Open main menu</span>
            <Icon path={mdiMenu} className={`material-icons-outlined text-primary-orange`} size={1}/>
          </button>
          <Link href="/" className="relative flex items-center w-20 md:w-44 h-7 md:h-8">
            <Image src="/sharpy-logo-wide.svg" alt="Sharpy Logo" fill />
          </Link>
        </div>
        
        <div className={`md:items-center justify-between w-full md:flex  md:w-auto sm:hidden`}>          
          <DropdownHeader />
        </div>
        
        <div className={`justify-between w-full ${ expand ? 'flex flex-col items-start h-full absolute top-0 left-0' : 'hidden'} md:hidden z-10`}>
          <DropdownHeader mobile={true} onChildClick={() => setExpand((prev) => !prev)}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;