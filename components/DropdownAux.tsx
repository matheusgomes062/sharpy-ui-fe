const DropdownAux = ({ submenus, isDropdownActive, mobile }: { submenus: any, isDropdownActive: boolean, mobile?: boolean }) => {
  return (
    mobile ? (
      <ul className={`bg-black dropdown ${isDropdownActive ? "block" : "hidden"}`} >
        {submenus.map((submenu: { url: string, title: string }, index: number) => (
          <li key={index} className="menu-items px-5 py-2">
            <a className="hover:text-primary-orange text-white text-xs" href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    ) : (
      <ul className={`absolute z-10 bg-black dropdown ${isDropdownActive ? "block" : "hidden"}`} >
        {submenus.map((submenu: { url: string, title: string }, index: number) => (
          <li key={index} className="menu-items px-5 py-2">
            <a className="hover:text-primary-orange text-white text-xs" href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    )
  );
};

export default DropdownAux;