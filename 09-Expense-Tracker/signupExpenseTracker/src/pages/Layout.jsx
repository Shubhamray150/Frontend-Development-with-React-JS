import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./home/NavBar";
import Header from "./header/Header";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 min-h-0">
        <div className="w-64 border-r overflow-y-auto ">
          <Sidebar />
        </div>
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
