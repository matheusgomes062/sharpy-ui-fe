import React, { FunctionComponent } from "react";
import HeaderItems from './HeaderItems';
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import IDropdownHeaderProps from "types/DropdownHeaderProps";
import Link from "next/link";

const menuItems = [
  {
    title: "Quem Somos",
    url: "about",
    submenu: [
      {
        title: "Nosso time",
        url: "about",
      },
    ],
  },
  {
    title: "Soluções",
    url: "solutions",
    submenu: [
      {
        title: "Aplicações personalizadas",
        url: "solutions",
      },
      {
        title: "Consultoria em desenvolvimento",
        url: "solutions",
      },
      {
        title: "Soluções Sharpy",
        url: "solutions",
      },
    ],
  },
  {
    title: "Carreiras",
    url: "careers",
  },
  {
    title: "Fale Conosco",
    url: "/",
  },
];

const DropdownHeader: FunctionComponent<IDropdownHeaderProps> = (props) => {
  const { mobile, onChildClick } = props;
  
  return mobile ? (
    <ul
      className="flex flex-col w-full h-full px-3 text-white bg-black"
      aria-labelledby="dropdown"
    >
      <div className="flex flex-row items-center justify-between px-3 py-5">
        <Link href="/">
          <Image
            width={90}
            height={30}
            src="/sharpy_logo.svg"
            alt="sharpy SVG"
          />
        </Link>
        <button onClick={onChildClick}>
          <Icon
            path={mdiClose}
            className={"text-primary-orange cursor-pointer ml-3"}
            size={1.3}
          />
        </button>
      </div>
      {menuItems.map((menu, index) => {
        return <HeaderItems items={menu} key={index} mobile={mobile} />;
      })}
    </ul>
  ) : (
    <ul
      className="flex flex-row mt-0 space-x-8 text-xs font-medium border-0 text-primary-purple"
      aria-labelledby="dropdown"
    >
      {menuItems.map((menu, index) => {
        return <HeaderItems items={menu} key={index} />;
      })}
    </ul>
  );
};

export default DropdownHeader;
