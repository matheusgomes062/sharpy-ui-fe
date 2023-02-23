import DropdownAux from './DropdownAux';

import { useState } from "react";

//TODO: how to instance this items type
const HeaderItems = ({ items, mobile }: { items: any, mobile?: Boolean }) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  
  return (
    mobile ? (
      <li
        onClick={() => setIsDropdownActive((prev) => !prev)}
      >
        {items.submenu ? (
          <>
            <button
              className="py-2 pl-3 pr-4 flex flex-row items-center hover:text-primary-orange text-xs"
              type="button"
              aria-haspopup="menu"
              aria-expanded={isDropdownActive ? "true" : "false"}
            >
              {items.title}{' '}
              <svg className={`w-4 h-4 ml-2 ${isDropdownActive ? "-scale-y-100" : "scale-y-100"}`} fill="none" stroke="orange" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <DropdownAux submenus={items.submenu} isDropdownActive={isDropdownActive} mobile={true}/>
          </>
        ) : (
          <a className="block py-2 pl-3 pr-4 text-xs hover:text-primary-orange" href={items.url}>{items.title}</a>
        )}
      </li>
    ) : (
      <li
        onMouseEnter={() => setIsDropdownActive(true)}
        onMouseLeave={() => setIsDropdownActive(false)}
      >
        {items.submenu ? (
          <>
            <button
              className="flex flex-row items-center p-0 hover:text-primary-orange"
              type="button"
              aria-haspopup="menu"
              aria-expanded={isDropdownActive ? "true" : "false"}
            >
              {items.title}{' '}
              <svg className={`w-4 h-4 ml-2 ${isDropdownActive ? "-scale-y-100" : "scale-y-100"}`} fill="none" stroke="orange" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <DropdownAux submenus={items.submenu} isDropdownActive={isDropdownActive} />
          </>
        ) : (
          <a className="block p-0 hover:text-primary-orange" href={items.url}>{items.title}</a>
        )}
      </li>
    )
  );
};

export default HeaderItems;