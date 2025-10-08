import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Slider = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[16%] h-screen px-3 bg-[#fafafa] py-4 flex flex-col gap-4">
      <button
        onClick={() => {
          navigate("/compose");
        }}
        className="w-full bg-blue-500 cursor-pointer text-white rounded py-2 font-medium"
      >
        Compose
      </button>

      <nav className="flex flex-col gap-2 text-gray-700">
        <Link className="px-2 py-2 hover:bg-blue-200 hover:border-l-2 hover:border-left-2">
          Inbox
        </Link>
        <Link className="px-2 py-2 hover:bg-blue-200 hover:border-l-2 hover:border-left-2">
          Unread
        </Link>
        <Link className="px-2 py-2 hover:bg-blue-200 hover:border-l-2 hover:border-left-2">
          Starred
        </Link>
        <Link className="px-2 py-2 hover:bg-blue-200 hover:border-l-2 hover:border-left-2">
          Drafts
        </Link>
        <Link className="px-2 py-2 hover:bg-blue-200 hover:border-l-2 hover:border-left-2">
          Sent
        </Link>
      </nav>
    </div>
  );
};

export default Slider;
