import React from "react";
import Header from "../../Header";
import Slider from "../../Slider";
import MailMessageView from "./MailMessageView";

const MaillViewDetailed = () => {
  console.log("Checked");
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <Slider />
        <MailMessageView />
      </div>
    </>
  );
};

export default MaillViewDetailed;
