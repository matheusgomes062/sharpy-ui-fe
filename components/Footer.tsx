import React, { FunctionComponent } from "react";
import Icon from "@mdi/react";
import { mdiLinkedin, mdiTwitter, mdiGithub } from "@mdi/js";
import SmartLink from "./SmartLink";
import Image from "next/image";
import Link from "next/link";

const routes = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Quem Somos",
    path: "/about",
  },
  {
    title: "Nosso Time",
    path: "/about",
  },
  {
    title: "Trabalhe Conosco",
    path: "/careers",
  },
  {
    title: "Soluções",
    path: "/solutions",
  },
  {
    title: "Login",
    path: "/",
  },
  {
    title: "Inscrever-se",
    path: "/",
  },
  {
    title: "Fale Conosco",
    path: "/",
  },
  {
    title: "Política de Privacidade",
    path: "/policies",
  },
  {
    title: "Termos & Condições",
    path: "/terms",
  },
];

const Footer: FunctionComponent = () => {
  return (
    <footer
      className="flex justify-center w-screen p-4 bg-black"
      data-cy="footer"
    >
      <div className="w-full max-w-6xl py-20">
        <Link href="/">
          <Image
            width={181}
            height={59}
            src="/sharpy-logo.svg"
            alt="sharpy SVG"
          />
        </Link>

        <div className="flex justify-between mt-5 md:mt-20 sm:max-md:flex-col-reverse">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {routes.slice(0, 4).map((route) => (
              <div key={route.title}>
                <SmartLink
                  label={route.title}
                  type={"text"}
                  href={route.path}
                  mode="light"
                />
              </div>
            ))}

            {routes.slice(4, 8).map((route) => (
              <div key={route.title}>
                <SmartLink
                  label={route.title}
                  type={"text"}
                  href={route.path}
                  mode="light"
                />
              </div>
            ))}

            {routes.slice(8, 10).map((route) => (
              <div key={route.title}>
                <SmartLink
                  label={route.title}
                  type={"text"}
                  href={route.path}
                  mode="light"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-start mt-5 space-x-9 md:mt-0 sm:mb-9">
            <Link href="/">
              <Icon
                path={mdiLinkedin}
                className="text-white cursor-pointer hover:text-primary-orange md:w-10 md:h-10 w-7 h-7"
              />
            </Link>
            <Link href="/">
              <Icon
                path={mdiTwitter}
                className="text-white cursor-pointer hover:text-primary-orange md:w-10 md:h-10 w-7 h-7"
              />
            </Link>
            <Link href="/">
              <Icon
                path={mdiGithub}
                className="text-white cursor-pointer hover:text-primary-orange md:w-10 md:h-10 w-7 h-7"
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-between mt-5 text-white md:mt-20 sm:max-md:flex-col-reverse">
          <p>© 2022, Sharpy • Todos os direitos Reservados.</p>
          <p className="sm:max-md:mb-5">
            Designed by Proteína Digital & Developed by Sharpy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
