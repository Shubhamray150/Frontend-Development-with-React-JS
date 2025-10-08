import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { PiArrowBendDoubleUpLeftDuotone } from "react-icons/pi";
import { TiArrowForward } from "react-icons/ti";

const MailMessageBody = () => {
  const date = new Date().getDate();
  return (
    <div>
      <div className="flex justify-between p-2">
        <h1>email</h1>
        <span>{date}</span>
      </div>
      <div>
        <p>message</p>
        <p>message</p>
        <p>message</p>
        <p>message</p>
        <p>message</p>
        <p>message</p>
      </div>
      <div className="flex items-center gap-2 w-40 rounded-xl mx-auto border-2 px-2 py-1 border-gray-300 justify-around">
        <TiArrowBack size={20} />
        <PiArrowBendDoubleUpLeftDuotone size={20} />
        <TiArrowForward size={20} />
      </div>
    </div>
  );
};

export default MailMessageBody;
