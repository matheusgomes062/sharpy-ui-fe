import Image from 'next/image';
import React, { FunctionComponent } from 'react'
import Icon from '@mdi/react';
import { mdiAccountCircleOutline, mdiMenu } from '@mdi/js';

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
        
        <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="mobile-menu-2">
          <ul className="flex flex-col border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-xs text-primary-purple md:font-medium md:border-0">
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 md:p-0 hover:text-primary-orange">Quem Somos</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 md:p-0  
         hover:text-primary-orange">Soluções</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 md:p-0  
         hover:text-primary-orange">Carreiras</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 md:p-0  
         hover:text-primary-orange">Fale Conosco</a>
            </li>
          </ul>
        
          <Icon path={mdiAccountCircleOutline} className={`material-icons-outlined text-primary-orange cursor-pointer ml-10`} size={1.5}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;