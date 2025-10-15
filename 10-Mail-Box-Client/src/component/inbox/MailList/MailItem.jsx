import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MailItem = ({ item, folder }) => {
  const navigate = useNavigate();
  const { body, id, title, read, time } = item;

  const mailTime = new Date(time).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const mailClickHandler = async () => {
    const response = await fetch(
      `https://mailboxclient-d6e39-default-rtdb.firebaseio.com/mail/${folder}/${id}.json`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ read: true }),
      }
    );
    const data = await response.json();
    console.log(data);

    console.log(item);
    navigate(`/${folder}/${id}`);
    console.log(`${folder}/${id}`);
  };

  return (
    <div
      onClick={mailClickHandler}
      className={`flex items-center  justify-between h-7 hover:bg-gray-100 cursor-pointer ${
        !read && "bg-gray-200 font-semibold"
      } `}
    >
      <span className="w-[10%] flex text-center ml-2 flex items-center">
        <span
          className={`${
            !read && "bg-blue-500"
          } w-[6px] h-[6px] mr-2 rounded-md`}
        ></span>
        {console.log(read)}
        <span className="truncate">{read ? title : title.toUpperCase()}</span>
      </span>
      <span className="truncate w-[80%]">
        {!read ? body.toUpperCase() : body}
      </span>
      <span className="mr-2">{mailTime}</span>
    </div>
  );
};

export default MailItem;
