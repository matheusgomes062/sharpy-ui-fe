import IMenuItemsProps from "types/MenuItemsProps";
import Link from "next/link";

const DropdownAux = ({ submenus, isDropdownActive, mobile }: { submenus: Array<IMenuItemsProps>, isDropdownActive: boolean, mobile?: boolean }) => {
  return (
    mobile ? (
      <ul className={`bg-black dropdown ${isDropdownActive ? "block" : "hidden"}`} >
        {submenus.map((submenu: { url: string, title: string }, index: number) => (
          <li key={index} className="px-5 py-2 menu-items">
            <Link className="text-xs text-white hover:text-primary-orange" href={submenu.url}>{submenu.title}</Link>
          </li>
        ))}
      </ul>
    ) : (
      <ul className={`absolute z-10 bg-black dropdown ${isDropdownActive ? "block" : "hidden"}`} >
        {submenus.map((submenu: { url: string, title: string }, index: number) => (
          <li key={index} className="px-5 py-2 menu-items">
            <Link className="text-xs text-white hover:text-primary-orange" href={submenu.url}>{submenu.title}</Link>
          </li>
        ))}
      </ul>
    )
  );
};

export default DropdownAux;