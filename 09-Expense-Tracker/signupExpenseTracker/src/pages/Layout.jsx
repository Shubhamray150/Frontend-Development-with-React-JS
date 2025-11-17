import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./home/SideBar";
import Header from "./header/Header";

const Layout = () => {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex flex-col h-screen bg-[var(--bg)] text-[var(--text)] ">
      <Header />
      <div className="flex flex-1 min-h-0 bg-[var(--bg)] text-[var(--text)]">
        <div className="w-64 overflow-y-auto bg-[var(--bg)] text-[var(--text)] ">
          <Sidebar />
        </div>
        <main className="flex-1 p-4 overflow-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
