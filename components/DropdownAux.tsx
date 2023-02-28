import IMenuItemsProps from "types/MenuItemsProps";

const DropdownAux = ({ submenus, isDropdownActive, mobile }: { submenus: Array<IMenuItemsProps>, isDropdownActive: boolean, mobile?: boolean }) => {
  return (
    mobile ? (
      <ul className={`bg-black dropdown ${isDropdownActive ? "block" : "hidden"}`} >
        {submenus.map((submenu: { url: string, title: string }, index: number) => (
          <li key={index} className="px-5 py-2 menu-items">
            <a className="text-xs text-white hover:text-primary-orange" href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    ) : (
      <ul className={`absolute z-10 bg-black dropdown ${isDropdownActive ? "block" : "hidden"}`} >
        {submenus.map((submenu: { url: string, title: string }, index: number) => (
          <li key={index} className="px-5 py-2 menu-items">
            <a className="text-xs text-white hover:text-primary-orange" href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    )
  );
};

export default DropdownAux;