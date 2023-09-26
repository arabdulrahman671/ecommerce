import React from "react";
import { Header } from "./Header";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="w-full flex item-center flex-col bg-gray-100">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
