import React from "react";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <div className="text-center shadow border border-gray-100 bg-white  py-4 flex justify-around items-center">
      <span className="font-bold text-3xl flex-1 ml-24">Admin DashBoard</span>
      <div className="flex text-lg gap-4 font-semibold">
        <Link to="/auth" className="mr-10">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default AdminHeader;
