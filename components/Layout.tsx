import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ILayoutProps from "types/LayoutProps";

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className="flex flex-col justify-between w-screen h-screen overflow-x-hidden overflow-y-scroll lg:scrollbar">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
