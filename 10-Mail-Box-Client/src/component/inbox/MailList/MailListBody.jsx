import React, { useEffect, useState } from "react";
import MailItem from "./MailItem";

const MailListBody = () => {
  const [mailList, setMailList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://mailboxclient-d6e39-default-rtdb.firebaseio.com/mail.json"
      );

      const data = await response.json();
      const loadData = [];
      for (let key in data) {
        loadData.push(data[key]);
      }
      setMailList(loadData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <span className="px-2 ">Today</span>
      <div className="flex flex-col gap-1">
        {mailList.map((item) => {
          return <MailItem key={Math.random()} item={item} />;
        })}
      </div>
    </div>
  );
};

export default MailListBody;
