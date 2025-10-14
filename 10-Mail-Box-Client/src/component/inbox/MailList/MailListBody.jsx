import React, { useEffect, useState } from "react";
import MailItem from "./MailItem";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { setIsLoading } from "../../../Store/uiSlice";

const MailListBody = () => {
  const activeLinkName = useSelector((state) => state.ui.activeLinkName);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.ui);
  const [mailList, setMailList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setIsLoading(true));
      const response = await fetch(
        "https://mailboxclient-d6e39-default-rtdb.firebaseio.com/mail.json"
      );

      const data = await response.json();
      const loadData = [];
      for (let key in data) {
        loadData.push({ ...data[key], id: key });
      }
      setMailList(loadData);
      dispatch(setIsLoading(false));
    };
    fetchData();
  }, []);
  console.log(mailList);

  return (
    <div>
      <span className="px-2 ">Today</span>
      {state.isLoading ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          {mailList.map((item) => {
            return <MailItem key={Math.random()} item={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MailListBody;
