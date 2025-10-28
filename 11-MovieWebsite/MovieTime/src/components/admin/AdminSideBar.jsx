import React from "react";
import { NavLink } from "react-router-dom";
import { CiUser, CiBoxList, CiClock1 } from "react-icons/ci";
import { MdLocalMovies } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";

const AdminSidebar = () => {
  const navItems = [
    {
      name: "Profile",
      icon: <CiUser size={20} />,
      path: "/admin/profile",
    },
    {
      name: "Category",
      icon: <CiBoxList size={20} />,
      path: "/admin/category",
    },
    {
      name: "Movies",
      icon: <MdLocalMovies size={20} />,
      path: "/admin/movies",
    },
    {
      name: "ShowTimes",
      icon: <CiClock1 size={20} />,
      path: "/admin/showtimes",
    },
    {
      name: "Booked Movies",
      icon: <IoTicketOutline size={20} />,
      path: "/admin/booked",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="w-64 bg-white shadow-md h-157 border-r border-gray-200 p-5">
        <ul className="flex flex-col gap-3">
          {navItems.map((item) => {
            return (
              <li key={Math.random()}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg ${
                      isActive
                        ? "bg-blue-100 text-blue-600 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {item.icon}
                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
