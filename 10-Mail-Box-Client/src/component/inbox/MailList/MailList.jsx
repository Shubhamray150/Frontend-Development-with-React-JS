import React from "react";
import MailListHead from "./MailListHead";
import MailListBody from "./MailListBody";
import { Routes, Route } from "react-router-dom";
import MailMessageView from "./MailMessage/MailMessageView";

const MailList = () => {
  return (
    <div className="border w-[84%] flex flex-col h-screen">
      <MailListHead />
      <MailListBody />
    </div>
  );
};

export default MailList;
