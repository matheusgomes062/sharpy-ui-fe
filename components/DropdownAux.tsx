const DropdownAux = ({ submenus, dropdown }: { submenus: any, dropdown: boolean }) => {
  return (
    <ul className={`absolute bg-black dropdown ${dropdown ? "block" : "hidden"}`} >
      {submenus.map((submenu: { url: string, title: string }, index: number) => (
        <li key={index} className="menu-items px-5 py-2">
          <a className="hover:text-primary-orange text-white text-xs" href={submenu.url}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default DropdownAux;