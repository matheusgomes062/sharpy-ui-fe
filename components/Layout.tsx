import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ILayoutProps from "types/LayoutProps";
import ContactUs from "./ContactUs";

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className="flex flex-col justify-between w-screen h-screen overflow-x-hidden overflow-y-scroll lg:scrollbar">
      <Navbar />
      <main>{children}</main>
      <ContactUs
        title="Fale Conosco"
        description="Formas de entrar em contato conosco"
        email="teste@sharpy.com"
        phone="+55 11 9876-5555"
        address="Rua Foz de São José, 99, BR"
      />
      <Footer />
    </div>
  );
}
