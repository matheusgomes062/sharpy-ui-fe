import React, { FunctionComponent } from "react";
import HeaderItems from './HeaderItems';
import IDropDownProps from "types/DropDownProps";

const menuItems = [
  {
    title: 'Quem Somos',
    url: '#',
    submenu: [
      {
        title: 'Nosso time',
        url: '#',
      },
    ],
  },
  {
    title: 'Soluções',
    url: '#services',
    submenu: [
      {
        title: 'Aplicações personalizadas',
        url: '#',
      },
      {
        title: 'Consultoria em desenvolvimento',
        url: '#',
      },
      {
        title: 'Soluções Sharpy',
        url: '#',
      },
    ],
  },
  {
    title: 'Carreiras',
    url: '#',
  },
  {
    title: 'Fale Consco',
    url: '#',
  },
]


const DropDownHeader: FunctionComponent = ({
}) => {

  return (
      <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-xs text-primary-purple md:font-medium md:border-0" aria-labelledby="dropdown">
        {menuItems.map((menu, index) => {
          return <HeaderItems items={menu} key={index} />;
        })}
      </ul>
  );
};

export default DropDownHeader;
