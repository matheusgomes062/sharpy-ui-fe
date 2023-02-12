import DropdownAux from './DropdownAux';

import { useState } from "react";

//TODO: how to instance this items type
const HeaderItems = ({ items }: { items: any}) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li 
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      {items.submenu ? (
        <>
          <button
            className="py-2 pl-3 pr-4 flex flex-row items-center md:p-0 hover:text-primary-orange"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            // onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{' '}
            <svg className={`w-4 h-4 ml-2 ${dropdown ? "-scale-y-100" : "scale-y-100"}`} fill="none" stroke="orange" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <DropdownAux submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a className="block py-2 pl-3 pr-4 md:p-0 hover:text-primary-orange" href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default HeaderItems;