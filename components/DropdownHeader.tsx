import React, { FunctionComponent, useRef } from "react";
import HeaderItems from './HeaderItems';
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import IDropdownHeaderProps from "types/DropdownHeaderProps";

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
    title: 'Fale Conosco',
    url: '#',
  },
]

const DropdownHeader: FunctionComponent<IDropdownHeaderProps> = (props) => {
  const { mobile, onChildClick } = props;
  
  return (
    mobile ? (
      <ul className="flex flex-col text-white bg-black w-full h-full px-3" aria-labelledby="dropdown">
        <div className="flex flex-row items-center py-5 justify-between px-3">
          <Image
            width={90}
            height={30}
            src="/sharpy-logo.svg"
            alt="sharpy SVG"
          />
          <button 
            onClick={onChildClick}>
            <Icon
              path={mdiClose}
              className={'text-primary-orange cursor-pointer ml-3'}
              size={1.3}
              />
          </button>
        </div>
        {menuItems.map((menu, index) => {
          return <HeaderItems items={menu} key={index} mobile={mobile}/>;
        })}
      </ul>) : (
      <ul className="flex flex-row space-x-8 mt-0 text-xs text-primary-purple font-medium border-0" aria-labelledby="dropdown">
        {menuItems.map((menu, index) => {
          return <HeaderItems items={menu} key={index} />;
        })}
      </ul>
    )
  );
};

export default DropdownHeader;
