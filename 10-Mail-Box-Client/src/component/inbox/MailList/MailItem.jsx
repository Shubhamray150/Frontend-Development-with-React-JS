import React from "react";
import { useNavigate } from "react-router-dom";

const MailItem = ({ item }) => {
  const navigate = useNavigate();
  const { body, receiver, sender, title } = item;
  console.log(body, receiver, sender, title);
  const mailClickHandler = () => {};

  return (
    <div
      onClick={mailClickHandler}
      className="bg-gray-100 border border-gray-300 py-2 flex items-center justify-center  "
    >
      <span className="mx-2 w-[15%] flex items-center justify-center ">
        <input type="checkbox" className="mx-1" />
        {`${sender} `}
      </span>
      <span className="truncate w-[80%]">{body.toUpperCase()}</span>
      <span className="w-[10%] flex justify-end px-4">8:29 pm</span>
    </div>
  );
};

export default MailItem;
