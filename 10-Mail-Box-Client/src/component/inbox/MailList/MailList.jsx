import React from "react";
import MailListHead from "./MailListHead";
import MailListBody from "./MailListBody";

const MailList = () => {
  return (
    <div className="border w-[84%] flex flex-col h-screen">
      <MailListHead />
      <MailListBody />
    </div>
  );
};

export default MailList;
