import React from "react";
import Slider from "./Slider";
import MailList from "./MailList/MailList";

const MailLayout = () => {
  return (
    <div className="flex flex-row">
      <Slider />
      <MailList />
    </div>
  );
};

export default MailLayout;
