import React from "react";
import AdminHeader from "./admin/AdminHeader";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./admin/AdminSidebar";

const AdminLayout = () => {
  return (
    <>
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
