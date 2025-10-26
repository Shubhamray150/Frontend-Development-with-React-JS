import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Copyright = () => {
  return (
    <div className="bg-black h-24 flex justify-around items-center">
      <span className="text-gray-300">©copyright 2025 Movie</span>
      <ul className="flex items-center gap-4">
        <li>
          <a target="_blank" href="https://www.facebook.com/">
            <FaFacebookF className="" color="gray" />
          </a>
        </li>
        <li className="">
          <a target="_blank" href="https://x.com/">
            <CiTwitter color="gray" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.facebook.com/">
            <FaInstagram color="gray" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Copyright;
