import React from "react";
import MailListHead from "./MailListHead";
import MailListBody from "./MailListBody";
import { Routes, Route, useParams } from "react-router-dom";
import MailMessageView from "./MailMessage/MailMessageView";

const MailList = () => {
  return (
    <div className="border w-[84%] flex flex-col h-screen">
      <MailListHead />

      <Routes>
        <Route path=":folder">
          <Route index element={<MailListBody />}></Route>
          <Route path=":id" element={<MailMessageView />}></Route>
          {/* <Route path="sent" element={<MailListBody />}></Route> */}
        </Route>
        <Route index element={<MailListBody />}></Route>
      </Routes>
    </div>
  );
};

export default MailList;
