import React from "react";
import { useLocation } from "react-router-dom";
import Slider from "./Slider";
import MailList from "./MailList/MailList";

const MailLayout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-row">
      <Slider />
      <MailList />
    </div>
  );
};

export default MailLayout;
