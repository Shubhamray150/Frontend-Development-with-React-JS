import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { setActiveLink } from "../../Store/uiSlice";

const Slider = () => {
  const navigate = useNavigate();

  const links = [
    { name: "Inbox", path: "/inbox" },
    { name: "Starred", path: "/starred" },
    { name: "Drafts", path: "/drafts" },
    { name: "Sent", path: "/sent" },
  ];

  return (
    <div className="w-[16%] h-screen px-3 bg-[#fafafa] py-4 flex flex-col gap-4 z-20">
      <button
        onClick={() => {
          navigate("/compose");
        }}
        className="w-full bg-blue-500 cursor-pointer text-white rounded py-2 font-medium"
      >
        Compose
      </button>

      <nav className="flex flex-col gap-2 text-gray-700">
        {links.map((link) => {
          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded transition ${
                  isActive
                    ? "bg-blue-200 border-l-4 border-blue-600 font-semibold"
                    : "hover:bg-blue-100"
                } `
              }
            >
              {link.name}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Slider;
