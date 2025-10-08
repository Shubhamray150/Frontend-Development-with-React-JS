import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
import { PiArrowBendDoubleUpLeftDuotone } from "react-icons/pi";
import { TiArrowForward } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const MailMessageHeader = () => {
  return (
    <>
      <div className="flex items-center justify-between p-2 border border-gray-300 ">
        <div className="flex items-center gap-2 w-[10%] justify-between">
          <span className="flex gap-1 items-center">
            <IoMdArrowBack size={20} />
            {`Back`}
          </span>
          <div className="flex items-center gap-2 w-full justify-around">
            <TiArrowBack size={20} />
            <PiArrowBendDoubleUpLeftDuotone size={20} />
            <TiArrowForward size={20} />
          </div>
        </div>
        <div className="flex items-center w-[25%] justify-around">
          <span>Archive</span>
          <span>Move</span>
          <span>Delete</span>
          <span>Spam</span>
        </div>
        <div className="flex items-center w-[5%] justify-around ">
          <IoMdArrowDropdown size={20} />
          <MdArrowDropUp size={20} />
          <IoCloseSharp size={20} />
        </div>
      </div>
      <div className="flex justify-between p-2 items-center border border-gray-300">
        <h1>Test Message</h1>
        <span>Yahoo/Inbox</span>
      </div>
    </>
  );
};

export default MailMessageHeader;
